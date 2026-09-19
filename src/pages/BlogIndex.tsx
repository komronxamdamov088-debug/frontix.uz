import { ArrowRight, Clock } from "lucide-react";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { Link } from "@/components/i18n/LocalizedLink";
import { blogPosts } from "@/data/blog";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogIndex() {
  const { t, lang } = useLanguage();

  return (
    <>
      <Seo
        title="Blog — IT va raqamli yechimlar bo'yicha qo'llanmalar"
        description="QR-menyu, Telegram bot va veb-sayt kabi raqamli yechimlar haqida amaliy qo'llanmalar: qanday ishlaydi, qachon kerak va biznesga qanday foyda beradi."
        keywords="IT blog, QR-menyu nima, Telegram bot qanday ishlaydi, kichik biznes uchun veb-sayt, raqamli yechimlar qo'llanma, FRONTIX blog"
        path="/blog"
        jsonLd={breadcrumbJsonLd(
          [
            { name: t.nav.home, path: "/" },
            { name: "Blog", path: "/blog" },
          ],
          lang,
        )}
      />
      <PageHero
        eyebrow="Qo'llanmalar"
        title="Raqamli yechimlar haqida amaliy qo'llanmalar"
        description="QR-menyu, Telegram bot va veb-sayt kabi yechimlar nima uchun kerak, qanday ishlaydi va biznesingizga qanday foyda keltirishi haqida qisqa, aniq maqolalar."
      />
      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
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
                      {post.readMinutes} daqiqa
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium text-brand-500 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                      O'qish
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
