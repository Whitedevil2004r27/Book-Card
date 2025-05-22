
import React, { useState } from 'react';
import { Book, CartItem, mockBooks } from '@/lib/data';
import Navbar from '@/components/Navbar';
import BookGrid from '@/components/BookGrid';
import BookDetail from '@/components/BookDetail';
import Cart from '@/components/Cart';
import { useToast } from '@/components/ui/use-toast';

const Browse = () => {
  const [books] = useState<Book[]>(mockBooks);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [showBookDetail, setShowBookDetail] = useState(false);
  const { toast } = useToast();

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartItems={cartItems} onCartClick={() => setShowCart(true)} />
      
      <section className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Browse Our Collection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-10">
            Discover books across all genres, from bestselling fiction to compelling non-fiction, classics to contemporary releases.
          </p>
          
          {/* Filter options could be added here in future */}
          
          <BookGrid 
            books={books} 
            onAddToCart={handleAddToCart} 
            onViewDetails={handleViewDetails} 
          />
        </div>
      </section>
      
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

export default Browse;
