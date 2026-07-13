import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ARTICLES, getArticle } from "@/data/articles";

export const Route = createFileRoute("/artikel/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} — Bekamu Solo` },
          { name: "description", content: loaderData.article.summary },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: loaderData.article.summary },
          { property: "og:image", content: loaderData.article.image },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:image", content: loaderData.article.image },
        ]
      : [],
  }),
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-white p-8 text-center">
      <div>
        <h1 className="text-3xl font-extrabold text-[#111]">Artikel tidak ditemukan</h1>
        <Link to="/" className="mt-6 inline-block rounded-full bg-[#D62828] px-6 py-3 font-semibold text-white">Kembali ke Beranda</Link>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-screen grid place-items-center bg-white p-8 text-center">
      <div>
        <h1 className="text-3xl font-extrabold text-[#111]">Terjadi kesalahan</h1>
        <Link to="/" className="mt-6 inline-block rounded-full bg-[#D62828] px-6 py-3 font-semibold text-white">Kembali ke Beranda</Link>
      </div>
    </div>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-[#111]">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111] shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <Link to="/" className="flex items-center gap-2 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#D62828] font-black">B</span>
            <span className="text-lg font-extrabold tracking-wide">BEKAMU SOLO</span>
          </Link>
          <Link to="/" className="rounded-full bg-[#D62828] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#b31f1f] transition-all">
            ← Beranda
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <header className="pt-28 pb-10 bg-[#F5F5F5]">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <Link to="/" hash="blog" className="text-sm text-[#D62828] font-semibold hover:underline">← Semua Artikel</Link>
          <span className="mt-4 inline-block text-xs font-bold text-[#D62828] uppercase tracking-widest">{article.category}</span>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">{article.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-[#666]">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime} baca</span>
          </div>
        </div>
      </header>

      {/* IMAGE */}
      <div className="mx-auto max-w-4xl px-4 md:px-8 -mt-4">
        <img src={article.image} alt={article.title} className="w-full rounded-3xl shadow-lg aspect-[16/9] object-cover" />
      </div>

      {/* CONTENT */}
      <article className="mx-auto max-w-3xl px-4 md:px-8 py-16">
        <p className="text-lg text-[#333] font-medium leading-relaxed border-l-4 border-[#D62828] pl-5 italic">{article.summary}</p>
        <div className="mt-8 space-y-6 text-[#333] leading-[1.9] text-[17px]">
          {article.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[#111] text-white p-8 md:p-10 text-center">
          <h3 className="text-2xl font-extrabold">Siap merasakan manfaat bekam?</h3>
          <p className="mt-2 text-white/70">Reservasi sesi terapi Anda hari ini juga.</p>
          <Link to="/" hash="booking" className="mt-6 inline-block rounded-full bg-[#D62828] px-8 py-3.5 font-semibold text-white hover:bg-[#b31f1f] transition-all">
            Booking Sekarang
          </Link>
        </div>
      </article>

      {/* RELATED */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center">Artikel Lainnya</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} to="/artikel/$slug" params={{ slug: r.slug }} className="group rounded-2xl overflow-hidden bg-white border border-[#eee] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={r.image} alt={r.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-[#D62828] uppercase tracking-wider">{r.category}</span>
                  <h3 className="mt-2 font-bold group-hover:text-[#D62828] transition-colors">{r.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111] text-white/60 py-8 text-center text-sm">
        © 2026 Bekamu Solo. All rights reserved.
      </footer>
    </div>
  );
}