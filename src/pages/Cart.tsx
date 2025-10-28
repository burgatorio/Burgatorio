import React from 'react';
import { useCartStore } from '../store/cartStore';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, clearCart } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-cinzel text-burg-gold mb-6 text-center">
        CESTA DE LOS PECADOS
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-400">Tu cesta está vacía</p>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <div key={item.id} className="bg-gray-900 p-4 rounded-lg">
                <div className="font-bold">{item.name}</div>
                <div className="text-burg-gold">${item.price.toFixed(2)}</div>
              </div>
            ))}
          </div>

          <div className="text-xl font-bold text-burg-gold mb-6">
            Total: ${total.toFixed(2)}
          </div>

          <button
            onClick={() => {
              alert('¡Orden enviada al infierno!');
              clearCart();
            }}
            className="w-full bg-burg-red hover:bg-red-700 text-white py-3 rounded-lg font-bold mb-4"
          >
            CONFIRMAR CONDENA
          </button>

          <Link
            to="/"
            className="block text-center text-burg-gold hover:underline"
          >
            ← Seguir pecando
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
