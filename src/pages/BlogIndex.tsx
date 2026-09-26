import { ArrowRight, Clock } from "lucide-react";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { Link } from "@/components/i18n/LocalizedLink";
import { getBlogPosts } from "@/data/blog";
import { useLanguage } from "@/context/LanguageContext";
import type { Lang } from "@/i18n/translations";

const COPY: Record<
  Lang,
  { title: string; description: string; keywords: string; eyebrow: string; heroTitle: string; heroDescription: string; minutes: string; read: string }
> = {
  uz: {
    title: "Blog — IT va raqamli yechimlar bo'yicha qo'llanmalar",
    description:
      "QR-menyu, Telegram bot va veb-sayt kabi raqamli yechimlar haqida amaliy qo'llanmalar: qanday ishlaydi, qachon kerak va biznesga qanday foyda beradi.",
    keywords:
      "IT blog, QR-menyu nima, Telegram bot qanday ishlaydi, kichik biznes uchun veb-sayt, raqamli yechimlar qo'llanma, FRONTIX blog",
    eyebrow: "Qo'llanmalar",
    heroTitle: "Raqamli yechimlar haqida amaliy qo'llanmalar",
    heroDescription:
      "QR-menyu, Telegram bot va veb-sayt kabi yechimlar nima uchun kerak, qanday ishlaydi va biznesingizga qanday foyda keltirishi haqida qisqa, aniq maqolalar.",
    minutes: "daqiqa",
    read: "O'qish",
  },
  ru: {
    title: "Блог — гайды по IT и цифровым решениям",
    description:
      "Практические гайды о цифровых решениях — QR-меню, Telegram-ботах и сайтах: как работают, когда нужны и чем полезны бизнесу.",
    keywords:
      "IT-блог, что такое QR-меню, как работает Telegram-бот, сайт для малого бизнеса, гайд по цифровым решениям, блог FRONTIX",
    eyebrow: "Гайды",
    heroTitle: "Практические гайды о цифровых решениях",
    heroDescription:
      "Короткие и понятные статьи о том, зачем нужны QR-меню, Telegram-боты и сайты, как они работают и чем полезны вашему бизнесу.",
    minutes: "мин",
    read: "Читать",
  },
  en: {
    title: "Blog — guides to IT and digital solutions",
    description:
      "Practical guides to digital solutions like QR menus, Telegram bots and websites: how they work, when you need them and how they help a business.",
    keywords:
      "IT blog, what is a QR menu, how a Telegram bot works, small business website, digital solutions guide, FRONTIX blog",
    eyebrow: "Guides",
    heroTitle: "Practical guides to digital solutions",
    heroDescription:
      "Short, clear articles on why QR menus, Telegram bots and websites matter, how they work and how they help your business.",
    minutes: "min",
    read: "Read",
  },
};

export default function BlogIndex() {
  const { t, lang } = useLanguage();
  const copy = COPY[lang];

  return (
    <>
      <Seo
        title={copy.title}
        description={copy.description}
        keywords={copy.keywords}
        path="/blog"
        jsonLd={breadcrumbJsonLd(
          [
            { name: t.nav.home, path: "/" },
            { name: t.nav.blog, path: "/blog" },
          ],
          lang,
        )}
      />
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.heroTitle}
        description={copy.heroDescription}
      />
      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getBlogPosts(lang).map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-[2rem] border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] p-8 shadow-soft transition-colors hover:border-brand-500/30"
                >
                  <span className="inline-flex w-fit items-center rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-500">
                    {post.category}
                  </span>
                  <h2 className="mt-4 text-lg font-semibold leading-snug sm:text-xl">{post.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60 dark:text-paper/60">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between text-xs text-ink/45 dark:text-paper/45">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={13} />
                      {post.readMinutes} {copy.minutes}
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium text-brand-500 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                      {copy.read}
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
