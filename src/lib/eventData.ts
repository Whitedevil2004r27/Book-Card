
export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  image: string;
  category: string;
  price: number;
  availableSeats: number;
  totalSeats: number;
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface Booking {
  id: number;
  eventId: number;
  userId: number;
  seats: number;
  status: 'confirmed' | 'pending' | 'canceled';
  bookingDate: string;
  totalAmount: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  profilePicture?: string;
}

export const mockEvents: Event[] = [
  {
    id: 1,
    title: "Tech Innovation Summit 2024",
    date: "2024-06-15",
    time: "09:00 AM",
    venue: "Convention Center, Hall A",
    description: "Join industry leaders discussing the latest in AI, blockchain, and emerging technologies.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    category: "Technology",
    price: 150,
    availableSeats: 45,
    totalSeats: 200,
    status: 'upcoming'
  },
  {
    id: 2,
    title: "Digital Marketing Workshop",
    date: "2024-06-20",
    time: "02:00 PM",
    venue: "Business Center, Room 301",
    description: "Learn advanced digital marketing strategies and tools from industry experts.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    category: "Marketing",
    price: 75,
    availableSeats: 25,
    totalSeats: 50,
    status: 'upcoming'
  },
  {
    id: 3,
    title: "Startup Pitch Competition",
    date: "2024-06-25",
    time: "06:00 PM",
    venue: "Innovation Hub, Main Stage",
    description: "Watch promising startups pitch their ideas to venture capitalists and investors.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
    category: "Business",
    price: 0,
    availableSeats: 150,
    totalSeats: 300,
    status: 'upcoming'
  },
  {
    id: 4,
    title: "Web Development Bootcamp",
    date: "2024-07-01",
    time: "10:00 AM",
    venue: "Tech Campus, Lab 2",
    description: "Intensive 3-day bootcamp covering modern web development frameworks and practices.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    category: "Technology",
    price: 299,
    availableSeats: 20,
    totalSeats: 30,
    status: 'upcoming'
  },
  {
    id: 5,
    title: "Design Thinking Workshop",
    date: "2024-07-10",
    time: "01:00 PM",
    venue: "Creative Space, Studio B",
    description: "Hands-on workshop exploring design thinking methodologies for problem-solving.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    category: "Design",
    price: 120,
    availableSeats: 30,
    totalSeats: 40,
    status: 'upcoming'
  },
  {
    id: 6,
    title: "Networking Night",
    date: "2024-07-15",
    time: "07:00 PM",
    venue: "Rooftop Lounge",
    description: "Connect with professionals from various industries in a relaxed atmosphere.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
    category: "Networking",
    price: 50,
    availableSeats: 80,
    totalSeats: 100,
    status: 'upcoming'
  }
];

export const mockBookings: Booking[] = [
  {
    id: 1,
    eventId: 1,
    userId: 1,
    seats: 2,
    status: 'confirmed',
    bookingDate: '2024-05-20',
    totalAmount: 300
  },
  {
    id: 2,
    eventId: 3,
    userId: 1,
    seats: 1,
    status: 'pending',
    bookingDate: '2024-05-22',
    totalAmount: 0
  }
];

export const mockUser: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
};
