import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'content/posts');

export function getPosts() {
  return fs.readdirSync(postsDir).map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const { data } = matter(fs.readFileSync(path.join(postsDir, file), 'utf8'));
    return { slug, ...(data as any) };
  });
}

export async function getPost(slug: string) {
  const source = fs.readFileSync(path.join(postsDir, slug + '.mdx'), 'utf8');
  const { content, data } = matter(source);
  const { serialize } = await import('next-mdx-remote/serialize');
  const mdx = await serialize(content);
  return { meta: data as any, mdx };
}
