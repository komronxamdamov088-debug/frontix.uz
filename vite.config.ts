import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { sendContact } from './api/_lib/telegram.js'
import { sendFrxMessage } from './api/_lib/gemini.js'
import { mintVoiceToken, saveVoiceLead } from './api/_lib/voice.js'

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
            const result = await sendFrxMessage(
              payload,
              env.GEMINI_API_KEY,
              env.TELEGRAM_BOT_TOKEN,
              env.TELEGRAM_CHAT_ID,
            )
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


function voiceApiPlugin(env: Record<string, string>): Plugin {
  const json = (res: import('node:http').ServerResponse, status: number, body: unknown) => {
    res.statusCode = status
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(body))
  }
  return {
    name: 'frontix-voice-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/voice-token', async (req, res) => {
        if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' })
        const result = await mintVoiceToken(env.GEMINI_API_KEY)
        json(res, result.status, result.body)
      })
      server.middlewares.use('/api/voice-lead', (req, res) => {
        if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed' })
        let raw = ''
        req.on('data', (chunk) => {
          raw += chunk
        })
        req.on('end', async () => {
          try {
            const result = await saveVoiceLead(raw ? JSON.parse(raw) : {}, env.TELEGRAM_BOT_TOKEN, env.TELEGRAM_CHAT_ID)
            json(res, result.status, result.body)
          } catch {
            json(res, 500, { error: 'Failed to save lead' })
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
    plugins: [react(), tailwindcss(), contactApiPlugin(env), frxApiPlugin(env), voiceApiPlugin(env)],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
      },
    },
  }
})
