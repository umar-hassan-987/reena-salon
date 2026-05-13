import { blogs } from '@/data/blogs';
import BlogDetailContent from '@/components/BlogDetailContent';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  const related = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  if (!blog) {
    return (
      <main className="pt-[72px] min-h-screen flex items-center justify-center bg-background">
        <div className="text-center px-6">
          <h1 className="font-display-lg text-4xl mb-6">Article Not Found</h1>
          <Link href="/blogs" className="btn-primary">Return to Sanctuary Journal</Link>
        </div>
      </main>
    );
  }

  return <BlogDetailContent blog={blog} related={related} />;
}
