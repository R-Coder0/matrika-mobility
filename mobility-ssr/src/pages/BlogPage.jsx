import { Link } from "react-router-dom";
import postsData from "../data/blog.json";

export default function BlogPage() {
  const posts = postsData.posts;

  return (
    <main className="mt-16 md:mt-20 text-gray-900 bg-[#FFFAFA]">
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

          {/* ================= Page Header ================= */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
            Our <span className="text-amber-600">Blog</span>
          </h1>
          <p className="mt-2 max-w-2xl text-sm sm:text-base text-gray-600">
            Insights on strategy, growth, and performance marketing.
          </p>

          {/* ================= Blog Grid ================= */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-lg hover:border-amber-500/50"
              >
                {/* Blog Image */}
                {post.coverImage && (
                  <div className="overflow-hidden rounded-xl bg-gray-100 border border-gray-200">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Blog Content */}
                <div className="mt-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                    <span>
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    {post.readingTime && (
                      <span>· {post.readingTime} min read</span>
                    )}
                  </div>

                  <h2 className="mt-1 text-base sm:text-lg font-semibold leading-snug group-hover:text-amber-600 text-gray-900">
                    {post.title}
                  </h2>

                  <p className="mt-2 text-sm sm:text-base line-clamp-3 text-gray-700">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  {post.tags?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
