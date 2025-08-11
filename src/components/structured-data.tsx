export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: 'Velvet Bolo',
    description:
      'Bolos artesanais, doces e sobremesas exclusivas em Curitiba. Qualidade premium e sabores únicos para festas e eventos.',
    url: 'https://velvet-one.vercel.app',
    telephone: '+554199422377',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Curitiba',
      addressRegion: 'PR',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -25.4284,
      longitude: -49.2733,
    },
    openingHours: 'Mo-Sa 09:00-18:00',
    priceRange: '$$',
    servesCuisine: ['Brasileira', 'Confeitaria'],
    hasMenu: 'https://velvet-one.vercel.app/nossos-bolos',
    image: [
      'https://velvet-one.vercel.app/assets/velvet.jpg',
      'https://velvet-one.vercel.app/assets/bolo2.jpg',
      'https://velvet-one.vercel.app/assets/bolo-sobre.png',
    ],
    sameAs: ['https://wa.me/554199422377'],
    founder: {
      '@type': 'Person',
      name: 'Isabel Badalotti',
      jobTitle: 'Chef Proprietária',
      description:
        'Chef proprietária da Velvet Bolo, especialista em bolos artesanais e doces exclusivos.',
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Cliente Velvet',
      },
      reviewBody: 'Bolos deliciosos e atendimento excepcional!',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
