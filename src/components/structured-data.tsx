export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: 'Velvet Bolo',
    alternateName: 'Velvet Confeitaria',
    description:
      'Bolos artesanais, doces e sobremesas exclusivas em Curitiba. Red Velvet, Pink Velvet e sabores únicos com qualidade premium para festas e eventos.',
    url: 'https://www.velvetbolo.com.br',
    telephone: '+554199422377',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Visconde de Nácar, 930',
      addressLocality: 'Curitiba',
      addressRegion: 'PR',
      postalCode: '80010-000',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -25.4309,
      longitude: -49.2817,
    },
    openingHours: 'Mo-Sa 09:00-18:00',
    priceRange: '$$',
    servesCuisine: [
      'Brasileira',
      'Confeitaria',
      'Red Velvet',
      'Velvet Cake',
      'Bolos Artesanais',
    ],
    hasMenu: 'https://www.velvetbolo.com.br/bolos',
    keywords:
      'Velvet Bolo Curitiba, bolos artesanais Curitiba, Red Velvet Curitiba, confeitaria artesanal, bolos sob encomenda, bolos para festas, bolos de aniversário, bolos de casamento, doces artesanais, sobremesas exclusivas, confeitaria centro Curitiba, bolos velvet, pink velvet, coffee velvet, black velvet, confeitaria de qualidade',
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Red Velvet Cake',
          description:
            'Bolo Red Velvet artesanal, nosso carro-chefe com massa vermelha e cobertura cremosa',
          category: 'Bolos Artesanais',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Pink Velvet Cake',
          description:
            'Bolo Pink Velvet artesanal com massa rosa e decoração elegante',
          category: 'Bolos Artesanais',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Bolos Sob Encomenda',
          description: 'Bolos personalizados para festas e eventos especiais',
          category: 'Bolos Artesanais',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Bolos Pronta Entrega',
          description: 'Bolos disponíveis para entrega imediata na loja',
          category: 'Bolos Artesanais',
        },
      },
    ],
    image: [
      'https://www.velvetbolo.com.br/assets/velvet.jpg',
      'https://www.velvetbolo.com.br/assets/bolo2.jpg',
      'https://www.velvetbolo.com.br/assets/bolo-sobre.png',
      'https://www.velvetbolo.com.br/assets/entrada-loja.jpg',
    ],
    sameAs: ['https://wa.me/554199422377'],
    founder: {
      '@type': 'Person',
      name: 'Isabel Badalotti',
      jobTitle: 'Chef Proprietária',
      description:
        'Chef proprietária da Velvet Bolo, especialista em bolos artesanais e doces exclusivos em Curitiba.',
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
      reviewBody:
        'Bolos deliciosos e atendimento excepcional! Qualidade premium em cada pedaço.',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
    areaServed: {
      '@type': 'City',
      name: 'Curitiba',
      addressRegion: 'PR',
      addressCountry: 'BR',
    },
    serviceArea: {
      '@type': 'City',
      name: 'Curitiba',
      addressRegion: 'PR',
      addressCountry: 'BR',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
