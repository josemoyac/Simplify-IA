import { getPost } from '@/lib/posts';
import MDXPostLayout from '@/components/mdx-post-layout';

interface Props { params: { slug: string } }

export default async function PostPage({ params }: Props) {
  const { meta, mdx } = await getPost(params.slug);
  const { MDXRemote } = await import('next-mdx-remote/rsc');
  return (
    <MDXPostLayout meta={meta as any}>
      <MDXRemote source={mdx} />
    </MDXPostLayout>
  );
}
