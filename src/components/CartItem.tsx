
import React from 'react';
import { CartItem as CartItemType } from '@/lib/data';
import { Minus, Plus, X } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-start space-x-4 py-4 border-b border-gray-200">
      <img 
        src={item.book.coverImage} 
        alt={item.book.title}
        className="w-16 h-24 object-cover rounded"
      />
      
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium line-clamp-1">{item.book.title}</h4>
        <p className="text-xs text-gray-500">{item.book.author}</p>
        <p className="mt-1 font-medium">${item.book.price.toFixed(2)}</p>
        
        <div className="flex items-center mt-2 space-x-2">
          <button 
            onClick={() => onUpdateQuantity(item.book.id, Math.max(1, item.quantity - 1))}
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <Minus className="h-3 w-3" />
          </button>
          
          <span className="text-sm font-medium">{item.quantity}</span>
          
          <button 
            onClick={() => onUpdateQuantity(item.book.id, item.quantity + 1)}
            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>
      </div>
      
      <button 
        onClick={() => onRemove(item.book.id)}
        className="text-gray-500 hover:text-red-500"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CartItem;
