
import React, { useState } from 'react';
import EventNavbar from '@/components/EventNavbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Lock, Bell, Shield, Eye } from 'lucide-react';

interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  eventReminders: boolean;
  marketingEmails: boolean;
}

interface PrivacySettings {
  profileVisibility: 'public' | 'private' | 'friends';
  showAttendedEvents: boolean;
  allowMessages: boolean;
}

const EventSettings: React.FC = () => {
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [notifications, setNotifications] = useState<NotificationSettings>({
    emailNotifications: true,
    pushNotifications: false,
    eventReminders: true,
    marketingEmails: false
  });
  const [privacy, setPrivacy] = useState<PrivacySettings>({
    profileVisibility: 'public',
    showAttendedEvents: true,
    allowMessages: true
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handlePasswordChange = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords don't match.",
        variant: "destructive"
      });
      return;
    }

    if (passwordData.newPassword.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters long.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsChangingPassword(false);
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    
    toast({
      title: "Success",
      description: "Password updated successfully.",
    });
  };

  const handleNotificationUpdate = async (setting: keyof NotificationSettings, value: boolean) => {
    setNotifications(prev => ({ ...prev, [setting]: value }));
    
    toast({
      title: "Settings Updated",
      description: "Your notification preferences have been saved.",
    });
  };

  const handlePrivacyUpdate = async (setting: keyof PrivacySettings, value: any) => {
    setPrivacy(prev => ({ ...prev, [setting]: value }));
    
    toast({
      title: "Settings Updated",
      description: "Your privacy settings have been saved.",
    });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <EventNavbar />
        
        <div className="max-w-4xl mx-auto py-8 px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Settings
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Manage your account preferences and security settings
            </p>
          </div>

          <div className="space-y-6">
            {/* Password Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="w-5 h-5 mr-2" />
                  Password & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {!isChangingPassword ? (
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Password</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Last updated 3 months ago
                      </p>
                    </div>
                    <Button onClick={() => setIsChangingPassword(true)}>
                      Change Password
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        value={passwordData.currentPassword}
                        onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                        placeholder="Enter current password"
                      />
                    </div>
                    <div>
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                        placeholder="Enter new password"
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        placeholder="Confirm new password"
                      />
                    </div>
                    <div className="flex space-x-4">
                      <Button 
                        onClick={handlePasswordChange}
                        disabled={isLoading}
                      >
                        {isLoading ? "Updating..." : "Update Password"}
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setIsChangingPassword(false)}
                        disabled={isLoading}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Notification Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Email Notifications</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Receive updates about your bookings via email
                    </p>
                  </div>
                  <Switch
                    checked={notifications.emailNotifications}
                    onCheckedChange={(checked) => handleNotificationUpdate('emailNotifications', checked)}
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Push Notifications</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Get notified on your device about important updates
                    </p>
                  </div>
                  <Switch
                    checked={notifications.pushNotifications}
                    onCheckedChange={(checked) => handleNotificationUpdate('pushNotifications', checked)}
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Event Reminders</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Receive reminders before your events start
                    </p>
                  </div>
                  <Switch
                    checked={notifications.eventReminders}
                    onCheckedChange={(checked) => handleNotificationUpdate('eventReminders', checked)}
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Marketing Emails</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Receive promotional content and new event announcements
                    </p>
                  </div>
                  <Switch
                    checked={notifications.marketingEmails}
                    onCheckedChange={(checked) => handleNotificationUpdate('marketingEmails', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Privacy Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Privacy Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <Eye className="w-4 h-4 mr-2" />
                    <h3 className="font-medium text-gray-900 dark:text-white">Profile Visibility</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    Control who can see your profile information
                  </p>
                  <select
                    value={privacy.profileVisibility}
                    onChange={(e) => handlePrivacyUpdate('profileVisibility', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="public">Public - Anyone can see</option>
                    <option value="friends">Friends - Only connections can see</option>
                    <option value="private">Private - Only you can see</option>
                  </select>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Show Attended Events</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Display events you've attended on your profile
                    </p>
                  </div>
                  <Switch
                    checked={privacy.showAttendedEvents}
                    onCheckedChange={(checked) => handlePrivacyUpdate('showAttendedEvents', checked)}
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Allow Messages</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Let other users send you messages
                    </p>
                  </div>
                  <Switch
                    checked={privacy.allowMessages}
                    onCheckedChange={(checked) => handlePrivacyUpdate('allowMessages', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Account Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600 dark:text-red-400">
                  Danger Zone
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-4 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950">
                  <div>
                    <h3 className="font-medium text-red-900 dark:text-red-100">Delete Account</h3>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                  <Button variant="destructive">
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default EventSettings;
