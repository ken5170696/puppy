import React from 'react';
import { Heart, Dog } from 'lucide-react';

interface Puppy {
  name: string;
  breed: string;
  age: string;
  imageUrl: string;
}

const puppies: Puppy[] = [
  {
    name: 'Max',
    breed: 'Golden Retriever',
    age: '3 months',
    imageUrl: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Luna',
    breed: 'Labrador',
    age: '2 months',
    imageUrl: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
  },
  {
    name: 'Charlie',
    breed: 'Beagle',
    age: '4 months',
    imageUrl: 'https://images.unsplash.com/photo-1612502169027-5a379283f9c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  },
  {
    name: 'Bella',
    breed: 'Poodle',
    age: '3 months',
    imageUrl: 'https://images.unsplash.com/photo-1594922009922-d1c6f4aed6f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Rocky',
    breed: 'German Shepherd',
    age: '5 months',
    imageUrl: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Daisy',
    breed: 'Corgi',
    age: '2 months',
    imageUrl: 'https://images.unsplash.com/photo-1612536057832-2ff7ead58194?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Cooper',
    breed: 'Husky',
    age: '4 months',
    imageUrl: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Milo',
    breed: 'French Bulldog',
    age: '3 months',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
  },
  {
    name: 'Lola',
    breed: 'Dachshund',
    age: '2 months',
    imageUrl: 'https://images.unsplash.com/photo-1612195583950-b8fd34c87093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Bailey',
    breed: 'Shih Tzu',
    age: '3 months',
    imageUrl: 'https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Ziggy',
    breed: 'Pug',
    age: '4 months',
    imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
  },
  {
    name: 'Rosie',
    breed: 'Boxer',
    age: '5 months',
    imageUrl: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-purple-100 py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-indigo-600 mb-4 flex items-center justify-center">
            <Dog className="mr-4 h-12 w-12" /> Puppy Pals
          </h1>
          <p className="text-2xl text-gray-600">Meet our adorable furry friends!</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {puppies.map((puppy) => (
            <div key={puppy.name} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-72">
                <img src={puppy.imageUrl} alt={puppy.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h2 className="absolute bottom-4 left-4 text-3xl font-bold text-white">{puppy.name}</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-2"><span className="font-semibold text-indigo-600">Breed:</span> {puppy.breed}</p>
                <p className="text-gray-600 mb-4"><span className="font-semibold text-indigo-600">Age:</span> {puppy.age}</p>
                <button className="w-full bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition-colors duration-300 flex items-center justify-center text-lg font-semibold">
                  <Heart className="mr-2" /> Adopt Me
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;