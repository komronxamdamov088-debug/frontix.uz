import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Send as SendIcon, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useLanguage } from "@/context/LanguageContext";
import { getFrxReply, type FrxReply } from "./engine";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  role: "user" | "frx";
  text: string;
  quickReplies?: string[];
  cta?: { label: string; to: string };
}

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `msg-${idCounter}`;
}

function FrxAvatar() {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink dark:bg-paper">
      <Logo variant="mark" className="h-4.5 w-4.5" />
    </span>
  );
}

function TypingBubble() {
  return (
    <div className="flex items-end gap-2">
      <FrxAvatar />
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-paper-2 dark:bg-white/[0.06] px-4 py-3.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-ink/40 dark:bg-paper/40"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
}

export function FrxWidget() {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const seeded = useRef(false);

  useEffect(() => {
    if (!seeded.current) {
      seeded.current = true;
      setMessages([
        {
          id: nextId(),
          role: "frx",
          text: t.frx.greeting,
          quickReplies: t.frx.starterSuggestions,
        },
      ]);
    }
  }, [t]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const respond = (query: string) => {
    const reply: FrxReply = getFrxReply(query, lang);
    window.setTimeout(
      () => {
        setMessages((prev) => [
          ...prev,
          { id: nextId(), role: "frx", text: reply.text, quickReplies: reply.quickReplies, cta: reply.cta },
        ]);
        setTyping(false);
      },
      550 + Math.random() * 500,
    );
  };

  const sendMessage = (raw: string) => {
    const value = raw.trim();
    if (!value) return;
    setMessages((prev) => [...prev, { id: nextId(), role: "user", text: value }]);
    setInput("");
    setTyping(true);
    respond(value);
  };

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            key="fab"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setOpen(true)}
            aria-label={t.frx.openLabel}
            className="fixed bottom-5 right-5 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-ink dark:bg-paper shadow-soft-dark sm:bottom-6 sm:right-6 sm:h-[68px] sm:w-[68px]"
          >
            <Logo variant="mark" className="h-7 w-7 sm:h-8 sm:w-8" />
            <span className="absolute top-0.5 right-0.5 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-brand-500 ring-2 ring-paper dark:ring-ink" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-5 right-5 z-50 flex h-[min(820px,calc(100vh-2rem))] w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-3xl border border-ink/10 dark:border-white/10 bg-paper dark:bg-ink-2 shadow-soft-dark sm:bottom-6 sm:right-6 sm:w-[520px]"
          >
            <div className="flex items-center justify-between border-b border-ink/10 dark:border-white/10 px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink dark:bg-paper">
                  <Logo variant="mark" className="h-6 w-6" />
                </span>
                <div>
                  <div className="flex items-center gap-1.5 text-base font-semibold">
                    {t.frx.name}
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="text-xs text-ink/50 dark:text-paper/50">{t.frx.subtitle}</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label={t.frx.closeLabel}
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink/50 dark:text-paper/50 hover:bg-ink/[0.05] dark:hover:bg-white/[0.08] hover:text-ink dark:hover:text-paper transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {messages.map((m) => (
                <div key={m.id} className={cn("flex flex-col gap-2", m.role === "user" ? "items-end" : "items-start")}>
                  <div className={cn("flex items-end gap-2", m.role === "user" && "flex-row-reverse")}>
                    {m.role === "frx" && <FrxAvatar />}
                    <div
                      className={cn(
                        "max-w-95 whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed",
                        m.role === "user"
                          ? "rounded-br-sm bg-brand-500 text-white"
                          : "rounded-bl-sm bg-paper-2 dark:bg-white/[0.06] text-ink dark:text-paper",
                      )}
                    >
                      {m.text}
                    </div>
                  </div>

                  {m.role === "frx" && m.cta && (
                    <Link
                      to={m.cta.to}
                      onClick={() => setOpen(false)}
                      className="ml-9 inline-flex items-center gap-1 rounded-full border border-brand-500/30 px-3 py-1.5 text-xs font-medium text-brand-500 hover:bg-brand-500/10 transition-colors"
                    >
                      {m.cta.label}
                      <ArrowUpRight size={12} />
                    </Link>
                  )}

                  {m.role === "frx" && m.quickReplies && m.quickReplies.length > 0 && (
                    <div className="ml-9 flex flex-wrap gap-1.5">
                      {m.quickReplies.map((qr) => (
                        <button
                          key={qr}
                          onClick={() => sendMessage(qr)}
                          className="rounded-full border border-ink/10 dark:border-white/15 px-3 py-1.5 text-xs font-medium text-ink/65 dark:text-paper/65 hover:border-brand-500/40 hover:text-brand-500 transition-colors"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {typing && <TypingBubble />}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 border-t border-ink/10 dark:border-white/10 p-4"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.frx.inputPlaceholder}
                className="flex-1 rounded-full bg-paper-2 dark:bg-white/[0.05] px-4 py-3 text-sm outline-none placeholder:text-ink/35 dark:placeholder:text-paper/35"
              />
              <button
                type="submit"
                aria-label={t.frx.sendLabel}
                disabled={!input.trim()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-paper dark:bg-paper dark:text-ink disabled:opacity-30 transition-opacity"
              >
                <SendIcon size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
