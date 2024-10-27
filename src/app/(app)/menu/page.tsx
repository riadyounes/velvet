export default function MenuPage() {
const menuData = {
    Bolos: {
      icon: '🍰',
      items: [
        { name: 'Bolo de Chocolate', price: 18, image: '/assets/velvet.jpg' },
        { name: 'Bolo de Cenoura', price: 20, image: '/assets/velvet.jpg' },
        { name: 'Bolo de Coco', price: 22, image: '/assets/velvet.jpg' },
      ],
    },
    Cookies: {
      icon: '🍪',
      items: [
        { name: 'Cookie de Chocolate', price: 5, image: '/assets/velvet.jpg' },
        { name: 'Cookie de Aveia', price: 6, image: '/assets/velvet.jpg' },
        { name: 'Cookie de Amendoim', price: 7, image: '/assets/velvet.jpg' },
      ],
    },
    Café: {
      icon: '☕',
      items: [
        { name: 'Espresso', price: 8, image: '/assets/velvet.jpg' },
        { name: 'Cappuccino', price: 15, image: '/assets/velvet.jpg' },
        { name: 'Latte', price: 13, image: '/assets/velvet.jpg' },
      ],
    },
    Salgados: {
      icon: '🥐',
      items: [
        { name: 'Coxinha', price: 10, image: '/assets/velvet.jpg' },
        { name: 'Esfiha', price: 12, image: '/assets/velvet.jpg' },
        { name: 'Empada', price: 14, image: '/assets/velvet.jpg' },
      ],
    },
    Bebidas: {
      icon: '🥤',
      items: [
        { name: 'Suco de Laranja', price: 8, image: '/assets/velvet.jpg' },
        { name: 'Refrigerante', price: 5, image: '/assets/velvet.jpg' },
        { name: 'Água Mineral', price: 3, image: '/assets/velvet.jpg' },
      ],
    },
  };
  return (
    <div className="p-4 container mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-700">Cardápio</h1>

      {Object.entries(menuData).map(([section, data]) => (
        <section key={section} className="mb-12">
          <div className="flex items-center mb-4">
            <span className="mr-2 text-3xl">{data.icon}</span>
            <h2 className="text-3xl font-semibold text-gray-700">{section}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {data.items.map((item, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <div key={index} className="text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg mb-2 shadow-lg"
                />
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-lg font-bold text-gray-600">R$ {item.price}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}