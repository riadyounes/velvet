import type { Metadata } from "next";
import Image from "next/image";
import ImageGallery from "@/components/image-gallery";

export const metadata: Metadata = {
  title: "Nosso Espaço",
  description:
    "Conheça o espaço acolhedor da Velvet Bolo em Curitiba. Ambiente moderno e elegante para degustar nossos bolos artesanais. Visite nossa loja no centro da cidade.",
  keywords:
    "espaço Velvet Bolo, loja confeitaria Curitiba, ambiente acolhedor, confeitaria centro Curitiba, loja bolos artesanais, espaço gastronômico, confeitaria elegante, ambiente confeitaria, loja Velvet, confeitaria acolhedora, espaço para degustação, confeitaria moderna Curitiba",
  openGraph: {
    title: "Nosso Espaço - Velvet Bolo Curitiba",
    description:
      "Conheça o espaço acolhedor da Velvet Bolo em Curitiba. Ambiente moderno e elegante para degustar nossos bolos artesanais.",
    images: [
      "/assets/entrada-loja.jpg",
      "/assets/velvet.jpg",
      "/assets/bg-velvet.jpg",
    ],
  },
};

export default function NossoEspacoPage() {
  const espacoImages = [
    {
      id: 1,
      src: "/assets/entrada-loja.jpg",
      alt: "Entrada da loja Velvet",
      width: 800,
      height: 600,
    },
    {
      id: 2,
      src: "/assets/velvet.jpg",
      alt: "Fachada da loja Velvet",
      width: 800,
      height: 600,
    },
    {
      id: 3,
      src: "/assets/bg-velvet.jpg",
      alt: "Ambiente interno da loja",
      width: 800,
      height: 600,
    },
    {
      id: 4,
      src: "/assets/bg-about.jpg",
      alt: "Detalhes do espaço",
      width: 800,
      height: 600,
    },
    {
      id: 5,
      src: "/assets/bg-about-2.jpg",
      alt: "Decoração da loja",
      width: 800,
      height: 600,
    },
    {
      id: 6,
      src: "/assets/bg-contact.jpg",
      alt: "Área de atendimento",
      width: 800,
      height: 600,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src="/assets/bg-velvet.jpg"
          alt="Nosso espaço Velvet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="mb-4 text-5xl font-bold">Nosso Espaço</h1>
            <p className="text-xl">Conheça onde a magia acontece</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-brand-800">
            Bem-vindo ao Velvet
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-600">
            Nossa loja é mais do que um simples estabelecimento - é um espaço
            acolhedor onde cada detalhe foi pensado para proporcionar uma
            experiência única. Localizada no coração da cidade, oferecemos um
            ambiente moderno e elegante que combina perfeitamente com a
            qualidade excepcional dos nossos bolos.
          </p>
        </div>

        <div className="mb-16 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-brand-700">
              Ambiente Acolhedor
            </h3>
            <p className="leading-relaxed text-zinc-600">
              Nosso espaço foi projetado para ser acolhedor e convidativo, com
              uma decoração que reflete a elegância e sofisticação dos nossos
              produtos. Cada canto da loja foi cuidadosamente planejado para
              criar uma atmosfera que faz nossos clientes se sentirem em casa.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-brand-700">
              Atendimento Personalizado
            </h3>
            <p className="leading-relaxed text-zinc-600">
              Nossa equipe está sempre pronta para oferecer um atendimento
              personalizado e atencioso. Queremos que cada visita seja uma
              experiência memorável, onde você possa descobrir novos sabores e
              encontrar o bolo perfeito para cada ocasião especial.
            </p>
          </div>
        </div>

        <div className="mb-16 text-center">
          <h3 className="mb-6 text-2xl font-semibold text-brand-700">
            Venha nos Visitar
          </h3>
          <p className="mx-auto max-w-2xl leading-relaxed text-zinc-600">
            Estamos localizados em um local de fácil acesso, com estacionamento
            conveniente e horários flexíveis para atender às suas necessidades.
            Venha conhecer nosso espaço e se encantar com a atmosfera única do
            Velvet.
          </p>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-brand-800">
            Galeria do Nosso Espaço
          </h2>
          <ImageGallery images={espacoImages} />
        </div>
      </div>
    </div>
  );
}
