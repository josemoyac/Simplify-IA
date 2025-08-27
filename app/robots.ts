export default function robots() {
  const url = process.env.NEXT_PUBLIC_URL || 'https://simplify-ia.example.com';
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${url}/sitemap.xml`
  };
}
