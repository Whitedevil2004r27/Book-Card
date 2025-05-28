
import React, { useState } from 'react';
import { Book } from '@/lib/data';
import ImageUpload from './ImageUpload';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Edit, X } from 'lucide-react';

interface BookImageManagerProps {
  book: Book;
  onImageUpdate: (bookId: number, newImageUrl: string) => void;
}

const BookImageManager: React.FC<BookImageManagerProps> = ({ 
  book, 
  onImageUpdate 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempImageUrl, setTempImageUrl] = useState(book.coverImage);

  const handleSave = () => {
    onImageUpdate(book.id, tempImageUrl);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setTempImageUrl(book.coverImage);
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
      >
        <Edit className="h-4 w-4" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Update Book Cover</DialogTitle>
            <button 
              onClick={handleCancel}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>
          </DialogHeader>

          <div className="space-y-4 pt-4">
            <div>
              <h3 className="font-medium mb-2">{book.title}</h3>
              <p className="text-sm text-gray-600">by {book.author}</p>
            </div>

            <ImageUpload
              currentImage={tempImageUrl}
              onImageChange={setTempImageUrl}
              bookTitle={book.title}
            />

            <div className="flex space-x-2 justify-end">
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookImageManager;
