
export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  rating: number;
  description: string;
  genre: string;
  pages: number;
  publicationYear: number;
  featured?: boolean;
}

export const books: Book[] = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 19.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
    rating: 4.5,
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    genre: "Fiction",
    pages: 304,
    publicationYear: 2020,
    featured: true
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 24.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
    rating: 4.8,
    description: "An Easy & Proven Way to Build Good Habits & Break Bad Ones. Tiny Changes, Remarkable Results.",
    genre: "Self-Help",
    pages: 320,
    publicationYear: 2018,
    featured: true
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 22.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597695864i/54493401.jpg",
    rating: 4.7,
    description: "Ryland Grace is the sole survivor on a desperate mission—and if he fails, humanity and the Earth itself will perish.",
    genre: "Science Fiction",
    pages: 496,
    publicationYear: 2021,
    featured: true
  },
  {
    id: 4,
    title: "The Four Winds",
    author: "Kristin Hannah",
    price: 28.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1607688815i/53138081.jpg",
    rating: 4.4,
    description: "An epic novel of love and heroism and hope, set against the backdrop of one of America's most defining eras—the Great Depression.",
    genre: "Historical Fiction",
    pages: 464,
    publicationYear: 2021,
    featured: false
  },
  {
    id: 5,
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    price: 26.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1603206535i/54120408.jpg",
    rating: 4.3,
    description: "From the bestselling and Booker Prize winning author of Never Let Me Go and The Remains of the Day, a stunning new novel.",
    genre: "Literary Fiction",
    pages: 303,
    publicationYear: 2021,
    featured: false
  },
  {
    id: 6,
    title: "The Push",
    author: "Ashley Audrain",
    price: 21.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1599569554i/52476830.jpg",
    rating: 4.0,
    description: "A tense, page-turning psychological drama about the making and breaking of a family, about a woman whose experience of motherhood is nothing at all what she hoped for.",
    genre: "Thriller",
    pages: 320,
    publicationYear: 2021,
    featured: false
  },
  {
    id: 7,
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    price: 23.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1584633433i/50623864.jpg",
    rating: 4.6,
    description: "A life no one will remember. A story you will never forget.",
    genre: "Fantasy",
    pages: 448,
    publicationYear: 2020,
    featured: true
  },
  {
    id: 8,
    title: "The Vanishing Half",
    author: "Brit Bennett",
    price: 25.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1577090827i/51791252.jpg",
    rating: 4.2,
    description: "From the bestselling author of The Mothers, a stunning new novel about twin sisters, inseparable as children, who ultimately choose to live in two very different worlds.",
    genre: "Fiction",
    pages: 343,
    publicationYear: 2020,
    featured: false
  }
];

// Export books as mockBooks as well
export const mockBooks = books;

export interface CartItem {
  book: Book;
  quantity: number;
}
