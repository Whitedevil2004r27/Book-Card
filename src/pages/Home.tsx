
import React, { useState } from 'react';
import { Book, CartItem, mockBooks } from '@/lib/data';
import Navbar from '@/components/Navbar';
import FeaturedBooks from '@/components/FeaturedBooks';
import BookGrid from '@/components/BookGrid';
import BookDetail from '@/components/BookDetail';
import Cart from '@/components/Cart';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [books] = useState<Book[]>(mockBooks);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [showBookDetail, setShowBookDetail] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAddToCart = (book: Book) => {
    const existingItem = cartItems.find(item => item.book.id === book.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.book.id === book.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { book, quantity: 1 }]);
    }
    
    toast({
      title: "Added to Cart",
      description: `${book.title} has been added to your cart.`,
    });
  };

  const handleViewDetails = (book: Book) => {
    setSelectedBook(book);
    setShowBookDetail(true);
  };

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

  const handleRemoveFromCart = (bookId: number) => {
    setCartItems(cartItems.filter(item => item.book.id !== bookId));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout initiated",
      description: "Thank you for your order!",
    });
    setShowCart(false);
  };

  const handleStartExploring = () => {
    navigate('/browse');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItems={cartItems} onCartClick={() => setShowCart(true)} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Discover Your Next Favorite Book</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-10">
            Explore our vast collection of bestsellers, classics, and hidden gems to find stories that inspire, entertain, and enlighten.
          </p>
          <button 
            className="bg-primary text-white px-8 py-4 rounded-lg text-xl font-medium hover:bg-primary/90 transition-colors animate-pulse hover:animate-none"
            onClick={handleStartExploring}
          >
            Start Exploring
          </button>
        </div>
      </section>
      
      <FeaturedBooks 
        books={books} 
        onAddToCart={handleAddToCart} 
        onViewDetails={handleViewDetails} 
      />
      
      <BookGrid 
        books={books} 
        onAddToCart={handleAddToCart} 
        onViewDetails={handleViewDetails} 
      />
      
      {selectedBook && (
        <BookDetail 
          book={selectedBook} 
          isOpen={showBookDetail} 
          onClose={() => setShowBookDetail(false)} 
          onAddToCart={handleAddToCart} 
        />
      )}
      
      <Cart 
        items={cartItems} 
        isOpen={showCart} 
        onClose={() => setShowCart(false)} 
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Home;
