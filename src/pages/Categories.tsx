
import React, { useState } from 'react';
import { Book, CartItem, mockBooks } from '@/lib/data';
import Navbar from '@/components/Navbar';
import BookGrid from '@/components/BookGrid';
import BookDetail from '@/components/BookDetail';
import Cart from '@/components/Cart';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

const Categories = () => {
  const [books] = useState<Book[]>(mockBooks);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [showBookDetail, setShowBookDetail] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { toast } = useToast();

  // Extract unique categories from books
  const categories = Array.from(new Set(books.map(book => book.genre)));

  const filteredBooks = activeCategory 
    ? books.filter(book => book.genre === activeCategory) 
    : books;

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
          <h1 className="text-5xl font-bold mb-6">BookVerse Categories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-10">
            Explore our books by category to find exactly what you're looking for.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-10">
            <Button 
              variant={activeCategory === null ? "default" : "outline"}
              onClick={() => setActiveCategory(null)}
            >
              All Categories
            </Button>
            
            {categories.map(category => (
              <Button 
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {filteredBooks.length > 0 ? (
            <BookGrid 
              books={filteredBooks} 
              onAddToCart={handleAddToCart} 
              onViewDetails={handleViewDetails} 
            />
          ) : (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600">No books found in this category.</p>
            </div>
          )}
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

export default Categories;
