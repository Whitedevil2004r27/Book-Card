import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FeaturedBooks from '@/components/FeaturedBooks';
import BookGrid from '@/components/BookGrid';
import Cart from '@/components/Cart';
import BookDetail from '@/components/BookDetail';
import { books as bookData, Book, CartItem } from '@/lib/data';
import { useToast } from "@/hooks/use-toast";
import { ThemeProvider } from '@/contexts/ThemeContext';

const Index = () => {
  const [books] = useState<Book[]>(bookData);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAddToCart = (book: Book) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.book.id === book.id);
      
      if (existingItem) {
        return prevItems.map(item => 
          item.book.id === book.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevItems, { book, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.book.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.book.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
      duration: 3000,
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout initiated",
      description: "This is a demo - no actual checkout will occur.",
      duration: 5000,
    });
    setIsCartOpen(false);
  };

  const handleViewBookDetails = (book: Book) => {
    setSelectedBook(book);
    setIsDetailOpen(true);
  };

  const handleStartExploring = () => {
    navigate('/browse');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar 
          cartItems={cartItems} 
          onCartClick={() => setIsCartOpen(true)} 
        />
        
        <main>
          <section className="py-20 px-6 bg-gradient-to-r from-primary-dark to-primary text-white">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Discover Your Next Favorite Book</h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">Explore our curated collection of bestsellers, classics, and hidden gems.</p>
                <button 
                  className="bg-accent hover:bg-accent-dark text-white font-bold text-lg py-4 px-8 rounded-lg transition-colors animate-pulse hover:animate-none"
                  onClick={handleStartExploring}
                >
                  Start Exploring
                </button>
              </div>
            </div>
          </section>
          
          <FeaturedBooks 
            books={books}
            onAddToCart={handleAddToCart}
            onViewDetails={handleViewBookDetails}
          />
          
          <BookGrid 
            books={books}
            onAddToCart={handleAddToCart}
            onViewDetails={handleViewBookDetails}
          />
        </main>
        
        <footer className="bg-dark text-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">BookCart</h3>
                <p className="text-gray-300">Your ultimate destination for books of all genres. Find your next page-turner today.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Browse</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">Categories</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-gray-300">Email: contact@bookcart.com</p>
                <p className="text-gray-300">Phone: (123) 456-7890</p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; {new Date().getFullYear()} BookCart. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <Cart 
          items={cartItems}
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={handleUpdateQuantity}
          onRemove={handleRemoveFromCart}
          onCheckout={handleCheckout}
        />
        
        <BookDetail 
          book={selectedBook}
          isOpen={isDetailOpen}
          onClose={() => setIsDetailOpen(false)}
          onAddToCart={handleAddToCart}
        />
        
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsCartOpen(false)}
        ></div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
