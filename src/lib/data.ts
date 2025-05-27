
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
  },
  {
    id: 9,
    title: "Dune",
    author: "Frank Herbert",
    price: 18.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
    rating: 4.5,
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world.",
    genre: "Science Fiction",
    pages: 688,
    publicationYear: 1965,
    featured: true
  },
  {
    id: 10,
    title: "Where the Forest Meets the Stars",
    author: "Glendy Vanderah",
    price: 16.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1544629570i/42523064.jpg",
    rating: 4.3,
    description: "A mysterious child teaches two strangers how to love and trust again.",
    genre: "Contemporary Fiction",
    pages: 332,
    publicationYear: 2019,
    featured: false
  },
  {
    id: 11,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    price: 17.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1618982653i/32620332.jpg",
    rating: 4.7,
    description: "Reclusive Hollywood icon Evelyn Hugo finally decides to tell her life story—but only to one reporter, Monique Grant.",
    genre: "Historical Fiction",
    pages: 400,
    publicationYear: 2017,
    featured: true
  },
  {
    id: 12,
    title: "Educated",
    author: "Tara Westover",
    price: 19.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1506026635i/35133922.jpg",
    rating: 4.5,
    description: "A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
    genre: "Memoir",
    pages: 334,
    publicationYear: 2018,
    featured: false
  },
  {
    id: 13,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 15.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582398685i/40097951.jpg",
    rating: 4.2,
    description: "Alicia Berenson's life is seemingly perfect. A woman's act of violence against her husband—and of the therapist obsessed with uncovering her motive.",
    genre: "Thriller",
    pages: 336,
    publicationYear: 2019,
    featured: false
  },
  {
    id: 14,
    title: "Circe",
    author: "Madeline Miller",
    price: 18.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565909496i/35959740.jpg",
    rating: 4.4,
    description: "In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child—not powerful, like her father, nor viciously alluring like her mother.",
    genre: "Fantasy",
    pages: 416,
    publicationYear: 2018,
    featured: false
  },
  {
    id: 15,
    title: "Normal People",
    author: "Sally Rooney",
    price: 16.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1571423190i/41057294.jpg",
    rating: 4.1,
    description: "At school Connell and Marianne pretend not to know each other. He's popular and well-adjusted, star of the school football team.",
    genre: "Literary Fiction",
    pages: 266,
    publicationYear: 2018,
    featured: false
  },
  {
    id: 16,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 14.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1465761302i/28257707.jpg",
    rating: 4.0,
    description: "A counterintuitive approach to living a good life. For decades, we've been told that positive thinking is the key to a happy, rich life.",
    genre: "Self-Help",
    pages: 224,
    publicationYear: 2016,
    featured: false
  },
  {
    id: 17,
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    price: 17.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586269746i/46000520.jpg",
    rating: 4.3,
    description: "In a peaceful retirement village, four unlikely friends meet weekly in the Jigsaw Room to investigate unsolved crimes.",
    genre: "Mystery",
    pages: 368,
    publicationYear: 2020,
    featured: false
  },
  {
    id: 18,
    title: "The Guest List",
    author: "Lucy Foley",
    price: 16.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1577304942i/52656911.jpg",
    rating: 4.0,
    description: "On an island off the coast of Ireland, guests gather to celebrate two people joining their lives together as one.",
    genre: "Thriller",
    pages: 320,
    publicationYear: 2020,
    featured: false
  },
  {
    id: 19,
    title: "Becoming",
    author: "Michelle Obama",
    price: 22.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528207996i/38746485.jpg",
    rating: 4.6,
    description: "In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world.",
    genre: "Biography",
    pages: 448,
    publicationYear: 2018,
    featured: false
  },
  {
    id: 20,
    title: "The House in the Cerulean Sea",
    author: "TJ Klune",
    price: 18.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1584202805i/45047384.jpg",
    rating: 4.5,
    description: "Linus Baker is a by-the-book case worker in the Department in Charge of Magical Youth. He's tasked with determining whether six dangerous magical children are likely to bring about the end of the world.",
    genre: "Fantasy",
    pages: 398,
    publicationYear: 2020,
    featured: false
  },
  {
    id: 21,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 13.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
    rating: 4.2,
    description: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure.",
    genre: "Philosophy",
    pages: 163,
    publicationYear: 1988,
    featured: false
  },
  {
    id: 22,
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    price: 16.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1578028274i/38447.jpg",
    rating: 4.1,
    description: "Offred is a Handmaid in the Republic of Gilead. She may leave the home of the Commander and his wife once a day to walk to food markets.",
    genre: "Dystopian Fiction",
    pages: 311,
    publicationYear: 1985,
    featured: false
  },
  {
    id: 23,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    price: 19.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg",
    rating: 4.4,
    description: "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast.",
    genre: "Mystery",
    pages: 384,
    publicationYear: 2018,
    featured: false
  },
  {
    id: 24,
    title: "The Martian",
    author: "Andy Weir",
    price: 17.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1413706054i/18007564.jpg",
    rating: 4.5,
    description: "Six days ago, astronaut Mark Watney became one of the first people to walk on Mars. Now, he's sure he'll be the first person to die there.",
    genre: "Science Fiction",
    pages: 369,
    publicationYear: 2011,
    featured: false
  },
  {
    id: 25,
    title: "The Book Thief",
    author: "Markus Zusak",
    price: 15.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1522157426i/19063.jpg",
    rating: 4.6,
    description: "It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will become busier still.",
    genre: "Historical Fiction",
    pages: 552,
    publicationYear: 2005,
    featured: false
  },
  {
    id: 26,
    title: "1984",
    author: "George Orwell",
    price: 14.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
    rating: 4.4,
    description: "Winston Smith works for the Ministry of Truth in London, chief city of Airstrip One. Big Brother stares out from every poster.",
    genre: "Dystopian Fiction",
    pages: 328,
    publicationYear: 1949,
    featured: false
  },
  {
    id: 27,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 12.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1490528560i/4671.jpg",
    rating: 4.0,
    description: "The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island.",
    genre: "Classic Literature",
    pages: 180,
    publicationYear: 1925,
    featured: false
  },
  {
    id: 28,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 11.99,
    coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
    rating: 4.3,
    description: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language.",
    genre: "Romance",
    pages: 432,
    publicationYear: 1813,
    featured: false
  }
];

// Export books as mockBooks as well
export const mockBooks = books;

export interface CartItem {
  book: Book;
  quantity: number;
}
