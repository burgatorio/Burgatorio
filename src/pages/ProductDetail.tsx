import React from 'react';
import { useParams } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

const mockProducts: Record<string, any> = {
  ira: {
    id: 'ira-1',
    name: 'LA IRA SANTA',
    description: 'Doble carne ahumada, jalapeños flameados, salsa infernal',
    price: 18.9,
    isSpicy: true,
    image: 'https://placehold.co/400x300/1a1a1a/ffd700?text=LA+IRA+SANTA',
  },
  gula: {
    id: 'gula-1',
    name: 'GULA EXTREMA',
    description: 'Triple queso, bacon crujiente, cebolla caramelizada',
    price: 21.5,
    isSpicy: false,
    image: 'https://placehold.co/400x300/1a1a1a/ffd700?text=GULA+EXTREMA',
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = mockProducts[id || 'ira'];
  const { addToCart } = useCartStore();

  if (!product) return <div className="p-6 text-center text-white">Producto no encontrado</div>;

  return (
    <div className="p-4 max-w-md mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-xl mb-4"
      />
      <h1 className="text-2xl font-cinzel text-burg-gold mb-2">{product.name}</h1>
      <p className="text-gray-300 mb-4">{product.description}</p>
      {product.isSpicy && (
        <span className="inline-block bg-burg-red text-white px-2 py-1 rounded mb-4">
          🌶️ Picante
        </span>
      )}
      <div className="flex justify-between items-center mt-6">
        <span className="text-2xl font-bold text-burg-gold">${product.price.toFixed(2)}</span>
        <button
          onClick={() => addToCart(product)}
          className="bg-burg-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold"
        >
          AÑADIR AL PECADO
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
