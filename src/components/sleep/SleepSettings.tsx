
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Target, Bell, Moon, Sun, Shield } from "lucide-react";

const SleepSettings = () => {
  const [settings, setSettings] = useState({
    sleepGoal: 8,
    bedtimeReminder: true,
    reminderTime: "22:00",
    smartAlarm: true,
    alarmWindow: 30,
    weekendMode: false,
    darkMode: false,
    notifications: true,
    healthSync: true,
    privacyMode: false
  });

  const handleSliderChange = (value: number[]) => {
    setSettings(prev => ({ ...prev, sleepGoal: value[0] }));
  };

  const handleSwitchChange = (key: string, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleInputChange = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Sleep Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>Sleep Goals</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label className="text-sm font-medium">Daily Sleep Goal</Label>
            <div className="mt-2">
              <Slider
                value={[settings.sleepGoal]}
                onValueChange={handleSliderChange}
                max={12}
                min={4}
                step={0.5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>4h</span>
                <span className="font-semibold">{settings.sleepGoal}h per night</span>
                <span>12h</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-sm font-medium">Weekend Mode</Label>
              <p className="text-xs text-gray-500">Different goals for weekends</p>
            </div>
            <Switch
              checked={settings.weekendMode}
              onCheckedChange={(value) => handleSwitchChange('weekendMode', value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Bedtime & Alarms */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>Bedtime & Alarms</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-sm font-medium">Bedtime Reminder</Label>
              <p className="text-xs text-gray-500">Get notified when it's time for bed</p>
            </div>
            <Switch
              checked={settings.bedtimeReminder}
              onCheckedChange={(value) => handleSwitchChange('bedtimeReminder', value)}
            />
          </div>

          {settings.bedtimeReminder && (
            <div>
              <Label htmlFor="reminder-time" className="text-sm font-medium">Reminder Time</Label>
              <Input
                id="reminder-time"
                type="time"
                value={settings.reminderTime}
                onChange={(e) => handleInputChange('reminderTime', e.target.value)}
                className="mt-1"
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-sm font-medium">Smart Alarm</Label>
              <p className="text-xs text-gray-500">Wake up during light sleep phase</p>
            </div>
            <Switch
              checked={settings.smartAlarm}
              onCheckedChange={(value) => handleSwitchChange('smartAlarm', value)}
            />
          </div>

          {settings.smartAlarm && (
            <div>
              <Label className="text-sm font-medium">Smart Alarm Window</Label>
              <Select
                value={settings.alarmWindow.toString()}
                onValueChange={(value) => handleInputChange('alarmWindow', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">60 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="h-5 w-5" />
            <span>Notifications</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-sm font-medium">Push Notifications</Label>
              <p className="text-xs text-gray-500">Receive sleep insights and reminders</p>
            </div>
            <Switch
              checked={settings.notifications}
              onCheckedChange={(value) => handleSwitchChange('notifications', value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-sm font-medium">Health Data Sync</Label>
              <p className="text-xs text-gray-500">Sync with Apple Health / Google Fit</p>
            </div>
            <Switch
              checked={settings.healthSync}
              onCheckedChange={(value) => handleSwitchChange('healthSync', value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Privacy & Security</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-sm font-medium">Privacy Mode</Label>
              <p className="text-xs text-gray-500">Limit data collection to essentials only</p>
            </div>
            <Switch
              checked={settings.privacyMode}
              onCheckedChange={(value) => handleSwitchChange('privacyMode', value)}
            />
          </div>

          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              Export Sleep Data
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Delete All Data
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Privacy Policy
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* App Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Moon className="h-5 w-5" />
            <span>App Settings</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-sm font-medium">Dark Mode</Label>
              <p className="text-xs text-gray-500">Use dark theme for better night viewing</p>
            </div>
            <Switch
              checked={settings.darkMode}
              onCheckedChange={(value) => handleSwitchChange('darkMode', value)}
            />
          </div>

          <div>
            <Label className="text-sm font-medium">Time Format</Label>
            <Select defaultValue="12">
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12">12-hour (AM/PM)</SelectItem>
                <SelectItem value="24">24-hour</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-sm font-medium">Temperature Unit</Label>
            <Select defaultValue="celsius">
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="celsius">Celsius (°C)</SelectItem>
                <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Save Settings */}
      <div className="flex justify-end space-x-3">
        <Button variant="outline">Reset to Defaults</Button>
        <Button>Save Settings</Button>
      </div>
    </div>
  );
};

export default SleepSettings;
