import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'ira', name: 'IRA', icon: '🔥' },
  { id: 'gula', name: 'GULA', icon: '🍔' },
  { id: 'lujuria', name: 'LUJURIA', icon: '💋' },
  { id: 'envidia', name: 'ENVIDIA', icon: '👁️' },
];

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-burg-gold font-cinzel text-center mb-12">
        ¿CUÁL SERÁ TU PECADO?
      </h1>
      <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/product/${cat.id}`}
            className="bg-gray-900 p-6 rounded-xl text-center border border-burg-red/30 hover:border-burg-red transition"
          >
            <div className="text-4xl mb-2">{cat.icon}</div>
            <div className="text-burg-gold font-cinzel text-xl">{cat.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
