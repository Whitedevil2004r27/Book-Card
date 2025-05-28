
import React, { useState } from 'react';
import { mockBookings, mockEvents, Booking, Event } from '@/lib/eventData';
import EventNavbar from '@/components/EventNavbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ThemeProvider } from '@/contexts/ThemeContext';

const EventBookings: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);
  const [events] = useState<Event[]>(mockEvents);
  const { toast } = useToast();

  const getEventById = (eventId: number) => {
    return events.find(event => event.id === eventId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'canceled': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const handleCancelBooking = (bookingId: number) => {
    setBookings(prev => 
      prev.map(booking => 
        booking.id === bookingId 
          ? { ...booking, status: 'canceled' }
          : booking
      )
    );
    toast({
      title: "Booking Canceled",
      description: "Your booking has been successfully canceled.",
    });
  };

  const handleReschedule = (bookingId: number) => {
    toast({
      title: "Reschedule Request",
      description: "Please contact support to reschedule your booking.",
    });
  };

  const sortedBookings = [...bookings].sort((a, b) => {
    const eventA = getEventById(a.eventId);
    const eventB = getEventById(b.eventId);
    if (!eventA || !eventB) return 0;
    return new Date(eventA.date).getTime() - new Date(eventB.date).getTime();
  });

  const upcomingBookings = sortedBookings.filter(booking => {
    const event = getEventById(booking.eventId);
    return event && new Date(event.date) > new Date() && booking.status !== 'canceled';
  });

  const pastBookings = sortedBookings.filter(booking => {
    const event = getEventById(booking.eventId);
    return event && new Date(event.date) <= new Date() || booking.status === 'canceled';
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const BookingCard = ({ booking }: { booking: Booking }) => {
    const event = getEventById(booking.eventId);
    if (!event) return null;

    return (
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg">{event.title}</CardTitle>
            <Badge className={getStatusColor(booking.status)}>
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{event.venue}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              <span>{booking.seats} seat{booking.seats > 1 ? 's' : ''}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Total Amount: </span>
              <span className="font-semibold">${booking.totalAmount}</span>
            </div>
            <div className="space-x-2">
              {booking.status === 'confirmed' && new Date(event.date) > new Date() && (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleReschedule(booking.id)}
                  >
                    Reschedule
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleCancelBooking(booking.id)}
                  >
                    Cancel
                  </Button>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <EventNavbar />
        
        <div className="max-w-7xl mx-auto py-8 px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Bookings
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Manage your event registrations and bookings
            </p>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {upcomingBookings.length}
                </div>
                <div className="text-gray-600 dark:text-gray-300">Upcoming Events</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {bookings.filter(b => b.status === 'confirmed').length}
                </div>
                <div className="text-gray-600 dark:text-gray-300">Confirmed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  {bookings.filter(b => b.status === 'pending').length}
                </div>
                <div className="text-gray-600 dark:text-gray-300">Pending</div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Bookings */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Upcoming Events
            </h2>
            {upcomingBookings.length > 0 ? (
              <div className="space-y-4">
                {upcomingBookings.map(booking => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    No upcoming bookings found.
                  </p>
                  <Button className="mt-4" onClick={() => window.location.href = '/events'}>
                    Browse Events
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Past Bookings */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Past Events
            </h2>
            {pastBookings.length > 0 ? (
              <div className="space-y-4">
                {pastBookings.map(booking => (
                  <BookingCard key={booking.id} booking={booking} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    No past bookings found.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default EventBookings;
