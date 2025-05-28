
import React, { useState } from 'react';
import { mockUser, User } from '@/lib/eventData';
import EventNavbar from '@/components/EventNavbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { User as UserIcon, Mail, Phone, Camera } from 'lucide-react';

const EventProfile: React.FC = () => {
  const [user, setUser] = useState<User>(mockUser);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<User>(user);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof User, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setUser(formData);
    setIsEditing(false);
    setIsLoading(false);
    
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleCancel = () => {
    setFormData(user);
    setIsEditing(false);
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
    
    if (!formData.name.trim()) return "Name is required";
    if (!emailRegex.test(formData.email)) return "Please enter a valid email";
    if (!phoneRegex.test(formData.phone)) return "Please enter a valid phone number";
    
    return null;
  };

  const isFormValid = validateForm() === null;

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <EventNavbar />
        
        <div className="max-w-4xl mx-auto py-8 px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Profile
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Manage your personal information and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Picture Section */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="relative inline-block mb-4">
                    {user.profilePicture ? (
                      <img
                        src={user.profilePicture}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover mx-auto"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center mx-auto">
                        <UserIcon className="w-16 h-16 text-gray-500 dark:text-gray-400" />
                      </div>
                    )}
                    <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {user.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
                </CardContent>
              </Card>
            </div>

            {/* Profile Information */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Personal Information</CardTitle>
                  {!isEditing && (
                    <Button onClick={() => setIsEditing(true)}>
                      Edit Profile
                    </Button>
                  )}
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="flex items-center mb-2">
                        <UserIcon className="w-4 h-4 mr-2" />
                        Full Name
                      </Label>
                      {isEditing ? (
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                        />
                      ) : (
                        <p className="text-gray-900 dark:text-white">{user.name}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="flex items-center mb-2">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Address
                      </Label>
                      {isEditing ? (
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email"
                        />
                      ) : (
                        <p className="text-gray-900 dark:text-white">{user.email}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="flex items-center mb-2">
                        <Phone className="w-4 h-4 mr-2" />
                        Phone Number
                      </Label>
                      {isEditing ? (
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Enter your phone number"
                        />
                      ) : (
                        <p className="text-gray-900 dark:text-white">{user.phone}</p>
                      )}
                    </div>
                  </div>

                  {isEditing && (
                    <div className="flex space-x-4 pt-4 border-t">
                      <Button
                        onClick={handleSave}
                        disabled={!isFormValid || isLoading}
                        className="flex-1"
                      >
                        {isLoading ? "Saving..." : "Save Changes"}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={handleCancel}
                        disabled={isLoading}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                    </div>
                  )}

                  {isEditing && validateForm() && (
                    <p className="text-red-500 text-sm">{validateForm()}</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Profile Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <div className="text-gray-600 dark:text-gray-300">Events Attended</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">8</div>
                <div className="text-gray-600 dark:text-gray-300">Certificates Earned</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">156</div>
                <div className="text-gray-600 dark:text-gray-300">Network Connections</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default EventProfile;
