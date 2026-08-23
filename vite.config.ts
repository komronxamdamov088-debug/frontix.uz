import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { sendContact } from './api/_lib/telegram.js'
import { sendFrxMessage } from './api/_lib/gemini.js'

function contactApiPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'frontix-contact-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/contact', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        let raw = ''
        req.on('data', (chunk) => {
          raw += chunk
        })
        req.on('end', async () => {
          try {
            const payload = raw ? JSON.parse(raw) : {}
            const result = await sendContact(payload, env.TELEGRAM_BOT_TOKEN, env.TELEGRAM_CHAT_ID)
            res.statusCode = result.status
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(result.body))
          } catch {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Failed to send message' }))
          }
        })
      })
    },
  }
}

function frxApiPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'frontix-frx-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/frx', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        let raw = ''
        req.on('data', (chunk) => {
          raw += chunk
        })
        req.on('end', async () => {
          try {
            const payload = raw ? JSON.parse(raw) : {}
            const result = await sendFrxMessage(payload, env.GEMINI_API_KEY)
            res.statusCode = result.status
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(result.body))
          } catch {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Failed to reach FRX' }))
          }
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), tailwindcss(), contactApiPlugin(env), frxApiPlugin(env)],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
      },
    },
  }
})
