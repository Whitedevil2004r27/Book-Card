
import React, { useState } from 'react';
import { mockEvents, Event } from '@/lib/eventData';
import EventNavbar from '@/components/EventNavbar';
import EventCard from '@/components/EventCard';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';

const EventHome: React.FC = () => {
  const [events] = useState<Event[]>(mockEvents);
  const { toast } = useToast();
  const navigate = useNavigate();

  const featuredEvents = events.slice(0, 3);
  const upcomingEvents = events.slice(3);

  const handleRegister = (event: Event) => {
    toast({
      title: "Registration Started",
      description: `Redirecting to registration for ${event.title}`,
    });
    // Navigate to booking/registration page
    navigate(`/events/${event.id}/register`);
  };

  const handleViewMore = (event: Event) => {
    navigate(`/events/${event.id}`);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <EventNavbar />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Discover Amazing Events
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Connect, learn, and grow with our curated selection of workshops, conferences, and networking events.
            </p>
            <button 
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => navigate('/events')}
            >
              Explore All Events
            </button>
          </div>
        </section>

        {/* Featured Events */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Events
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Don't miss these highlighted events happening soon
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredEvents.map(event => (
                <EventCard 
                  key={event.id}
                  event={event}
                  onRegister={handleRegister}
                  onViewMore={handleViewMore}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 px-6 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                More exciting events to look forward to
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map(event => (
                <EventCard 
                  key={event.id}
                  event={event}
                  onRegister={handleRegister}
                  onViewMore={handleViewMore}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-accent to-accent-dark text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Sign up for our newsletter to get notified about new events and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg text-gray-900 flex-1"
              />
              <button className="bg-white text-accent px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
};

export default EventHome;
