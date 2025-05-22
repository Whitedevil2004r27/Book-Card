
import React, { useState } from 'react';
import { CartItem } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Cart from '@/components/Cart';

const About = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const handleUpdateQuantity = (bookId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(cartItems.filter(item => item.book.id !== bookId));
    } else {
      setCartItems(cartItems.map(item => 
        item.book.id === bookId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItems={cartItems} onCartClick={() => setShowCart(true)} />
      
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">About BookCart</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl mb-6">
              Welcome to BookCart, your premier destination for discovering and purchasing 
              quality books across a wide variety of genres and topics.
            </p>
            
            <h2 className="text-3xl font-bold mt-10 mb-4">Our Story</h2>
            <p>
              Founded in 2023, BookCart was created with a simple mission: to make the joy 
              of reading accessible to everyone. What started as a small online bookstore 
              has grown into a comprehensive platform connecting readers with their next 
              favorite books.
            </p>
            
            <h2 className="text-3xl font-bold mt-10 mb-4">Our Mission</h2>
            <p>
              At BookCart, we believe that books have the power to transform lives, spark 
              imagination, and foster understanding. Our mission is to curate a diverse 
              collection of titles that cater to all interests, ages, and backgrounds, 
              making it easy for readers to discover works that resonate with them.
            </p>
            
            <h2 className="text-3xl font-bold mt-10 mb-4">What Sets Us Apart</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Thoughtfully curated selection of books across all genres</li>
              <li>Personalized recommendations based on your reading history</li>
              <li>Competitive pricing and regular promotions</li>
              <li>Fast and reliable shipping options</li>
              <li>Commitment to supporting independent authors and publishers</li>
            </ul>
            
            <h2 className="text-3xl font-bold mt-10 mb-4">Contact Us</h2>
            <p>
              We'd love to hear from you! Whether you have a question, suggestion, or 
              just want to share your thoughts, please feel free to reach out to us at:
            </p>
            <p className="font-bold">Email: contact@bookcart.com</p>
            <p className="font-bold">Phone: (555) 123-4567</p>
            
          </div>
        </div>
      </section>
      
      <Cart 
        items={cartItems} 
        isOpen={showCart} 
        onClose={() => setShowCart(false)} 
        onUpdateQuantity={handleUpdateQuantity} 
      />
    </div>
  );
};

export default About;
