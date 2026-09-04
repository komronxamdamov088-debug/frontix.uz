import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle2, ArrowRight, Loader2, ChevronDown } from "lucide-react";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { SITE } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";

interface FormState {
  name: string;
  phone: string;
  telegram: string;
  service: string;
  message: string;
}

export default function Contact() {
  const { t, lang } = useLanguage();
  const initialState: FormState = {
    name: "",
    phone: "",
    telegram: "",
    service: t.services[services[0].slug].title,
    message: "",
  };
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const openTelegramFallback = () => {
    const text = [
      `Yangi so'rov — ${SITE.name}`,
      `Ism: ${form.name}`,
      `Telefon: ${form.phone}`,
      form.telegram ? `Telegram: ${form.telegram}` : null,
      `Xizmat: ${form.service}`,
      `Loyiha tavsifi: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${SITE.telegramUrl}?text=${encodeURIComponent(text)}`, "_blank", "noreferrer");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("request failed");
    } catch {
      openTelegramFallback();
    } finally {
      setSending(false);
      setSubmitted(true);
      setForm({ ...initialState, service: t.services[services[0].slug].title });
    }
  };

  return (
    <>
      <Seo
        title={t.nav.contact}
        description={t.contact.description}
        path="/contact"
        jsonLd={[
          breadcrumbJsonLd(
            [
              { name: t.nav.home, path: "/" },
              { name: t.nav.contact, path: "/contact" },
            ],
            lang,
          ),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: t.contact.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        ]}
      />
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description} />

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <div className="rounded-3xl border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] p-8 shadow-soft">
                <h2 className="text-xl font-semibold">{t.contact.infoTitle}</h2>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-brand-500">
                      <Phone size={16} />
                    </span>
                    <a href={`tel:${SITE.phoneHref}`} className="text-ink/70 dark:text-paper/70 hover:text-ink dark:hover:text-paper transition-colors">
                      {SITE.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-brand-500">
                      <Mail size={16} />
                    </span>
                    <a href={`mailto:${SITE.email}`} className="text-ink/70 dark:text-paper/70 hover:text-ink dark:hover:text-paper transition-colors">
                      {SITE.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-brand-500">
                      <MapPin size={16} />
                    </span>
                    <span className="text-ink/70 dark:text-paper/70">{SITE.city}</span>
                  </li>
                </ul>
              </div>

              <a
                href={SITE.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-3xl bg-ink dark:bg-white/[0.03] border border-ink/10 dark:border-white/10 p-8 text-paper transition-colors hover:border-brand-500/40"
              >
                <div>
                  <h3 className="text-lg font-semibold">{t.contact.telegramTitle}</h3>
                  <p className="mt-1 text-sm text-paper/55">{SITE.telegramHandle}</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Send size={17} />
                </span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-3xl border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] p-8 shadow-soft sm:p-10"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <CheckCircle2 size={48} className="text-brand-500" />
                    <h3 className="mt-5 text-xl font-semibold">{t.contact.successTitle}</h3>
                    <p className="mt-2 max-w-sm text-sm text-ink/60 dark:text-paper/60">
                      {t.contact.successDescription}
                    </p>
                    <Button variant="secondary" className="mt-6" onClick={() => setSubmitted(false)}>
                      {t.contact.sendAgain}
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                  >
                    <Field label={t.contact.labels.name} htmlFor="name" className="sm:col-span-1">
                      <input
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder={t.contact.placeholders.name}
                        className={inputClass}
                      />
                    </Field>

                    <Field label={t.contact.labels.phone} htmlFor="phone" className="sm:col-span-1">
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder={t.contact.placeholders.phone}
                        className={inputClass}
                      />
                    </Field>

                    <Field label={t.contact.labels.telegram} htmlFor="telegram" className="sm:col-span-1">
                      <input
                        id="telegram"
                        value={form.telegram}
                        onChange={(e) => update("telegram", e.target.value)}
                        placeholder={t.contact.placeholders.telegram}
                        className={inputClass}
                      />
                    </Field>

                    <Field label={t.contact.labels.service} htmlFor="service" className="sm:col-span-1">
                      <select
                        id="service"
                        value={form.service}
                        onChange={(e) => update("service", e.target.value)}
                        className={inputClass}
                      >
                        {services.map((s) => (
                          <option key={s.slug} value={t.services[s.slug].title}>
                            {t.services[s.slug].title}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label={t.contact.labels.message} htmlFor="message" className="sm:col-span-2">
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder={t.contact.placeholders.message}
                        className={`${inputClass} resize-none`}
                      />
                    </Field>

                    <div className="sm:col-span-2">
                      <Button type="submit" size="lg" disabled={sending} className="w-full sm:w-auto">
                        {sending ? (
                          <>
                            <Loader2 size={17} className="animate-spin" />
                            {t.contact.sending}
                          </>
                        ) : (
                          <>
                            {t.contact.submit}
                            <ArrowRight size={17} />
                          </>
                        )}
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="mx-auto mt-20 max-w-2xl">
            <Reveal>
              <h2 className="text-2xl font-semibold text-balance sm:text-3xl">{t.contact.faqTitle}</h2>
            </Reveal>
            <div className="mt-8 flex flex-col gap-3">
              {t.contact.faq.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <Reveal key={item.question} delay={i * 0.05}>
                    <div className="overflow-hidden rounded-2xl border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02]">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      >
                        <span className="text-sm font-semibold sm:text-base">{item.question}</span>
                        <ChevronDown
                          size={18}
                          className={`shrink-0 text-ink/40 dark:text-paper/40 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="px-6 pb-5 text-sm leading-relaxed text-ink/60 dark:text-paper/60">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

const inputClass =
  "w-full rounded-xl border border-ink/12 dark:border-white/15 bg-paper-2/50 dark:bg-white/[0.03] px-4 py-3 text-sm text-ink dark:text-paper placeholder:text-ink/35 dark:placeholder:text-paper/35 outline-none transition-colors focus:border-brand-500/60 focus:bg-paper dark:focus:bg-white/[0.05]";

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-ink/70 dark:text-paper/70">
        {label}
      </label>
      {children}
    </div>
  );
}
