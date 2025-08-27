export default function Schema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'SIMPLIFY·IA | José Moya Consulting',
    url: 'https://simplify-ia.example.com',
    sameAs: ['https://www.linkedin.com/in/josemoyacarrasco'],
    provider: {
      '@type': 'Person',
      name: 'José Moya Carrasco',
      email: 'mailto:josemoyacarrasco@gmail.com',
      knowsAbout: ['Estrategia', 'ERP', 'IA aplicada']
    }
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
