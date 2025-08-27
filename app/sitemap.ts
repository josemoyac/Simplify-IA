export default function sitemap() {
  const lastModified = new Date();
  return ['/', '/servicios', '/casos', '/recursos', '/sobre-mi', '/contacto'].map((url) => ({ url, lastModified }));
}
