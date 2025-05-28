
import React from 'react';
import { Event } from '@/lib/eventData';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface EventCardProps {
  event: Event;
  onRegister: (event: Event) => void;
  onViewMore: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onRegister, onViewMore }) => {
  const availabilityPercentage = (event.availableSeats / event.totalSeats) * 100;
  
  const getAvailabilityColor = () => {
    if (availabilityPercentage > 50) return 'text-green-600';
    if (availabilityPercentage > 20) return 'text-yellow-600';
    return 'text-red-600';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            {event.category}
          </span>
        </div>
        {event.price === 0 && (
          <div className="absolute top-4 right-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Free
            </span>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-3">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-2">
          {event.title}
        </h3>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{formatDate(event.date)}</span>
        </div>
        
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">{event.time}</span>
        </div>
        
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{event.venue}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Users className="h-4 w-4 mr-2" />
            <span className={`text-sm ${getAvailabilityColor()}`}>
              {event.availableSeats} seats available
            </span>
          </div>
          {event.price > 0 && (
            <span className="text-lg font-bold text-primary">${event.price}</span>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
          {event.description}
        </p>
      </CardContent>
      
      <CardFooter className="pt-0 space-x-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onViewMore(event)}
          className="flex-1"
        >
          View More
        </Button>
        <Button 
          size="sm" 
          onClick={() => onRegister(event)}
          className="flex-1"
          disabled={event.availableSeats === 0}
        >
          {event.availableSeats === 0 ? 'Sold Out' : 'Register Now'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
