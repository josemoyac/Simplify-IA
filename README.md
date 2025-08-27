# SIMPLIFY·IA | José Moya Consulting

Proyecto Next.js 14 con TypeScript y Tailwind CSS.

## Desarrollo

```bash
npm install
npm run dev
```

## Endpoint de contacto

El formulario envía un POST JSON a `/api/contact`. Actualmente solo hace `console.log`. Para conectarlo con un servicio SMTP/API real, reemplaza el contenido de `app/api/contact/route.ts`.

## Añadir nuevos posts

Guarda archivos `.mdx` en `content/posts` con frontmatter (`title`, `description`, `readingTime`, `category`). Se generan automáticamente en `/recursos`.

## Prototipo rápido

Para una vista simple del Home sin Node.js, abre `index.html`.
