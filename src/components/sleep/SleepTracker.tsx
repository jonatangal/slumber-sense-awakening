
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Moon, Sun, Clock, Activity } from "lucide-react";

const SleepTracker = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [trackingStartTime, setTrackingStartTime] = useState<Date | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  const handleStartTracking = () => {
    setIsTracking(true);
    setTrackingStartTime(new Date());
    // In a real app, this would start the background tracking
    console.log("Starting sleep tracking...");
  };

  const handleStopTracking = () => {
    setIsTracking(false);
    setTrackingStartTime(null);
    // In a real app, this would stop the tracking and save the session
    console.log("Stopping sleep tracking...");
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getTrackingDuration = () => {
    if (!trackingStartTime) return "00:00";
    const now = new Date();
    const diff = now.getTime() - trackingStartTime.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  // Mock current sleep environment data
  const environment = {
    lightLevel: "Very Dark",
    noiseLevel: "Quiet",
    temperature: "22°C",
    humidity: "45%"
  };

  return (
    <div className="space-y-6">
      {/* Tracking Status */}
      <Card className={`${isTracking ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white' : ''}`}>
        <CardContent className="p-8 text-center">
          {isTracking ? (
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-white/20 rounded-full">
                  <Moon className="h-12 w-12" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Sleep Tracking Active</h2>
                <p className="text-lg opacity-90">Duration: {getTrackingDuration()}</p>
                <p className="text-sm opacity-75">Started at {trackingStartTime ? formatTime(trackingStartTime) : ''}</p>
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white">
                Monitoring Sleep Patterns
              </Badge>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full">
                  <Moon className="h-12 w-12 text-indigo-600" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ready to Track Sleep</h2>
                <p className="text-gray-600 dark:text-gray-400">Tap the button below to start monitoring your sleep</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Control Buttons */}
      <div className="flex justify-center">
        {isTracking ? (
          <Button 
            onClick={handleStopTracking}
            size="lg"
            variant="destructive"
            className="px-8 py-4 text-lg"
          >
            <Pause className="h-5 w-5 mr-2" />
            Stop Tracking
          </Button>
        ) : (
          <Button 
            onClick={handleStartTracking}
            size="lg"
            className="px-8 py-4 text-lg bg-indigo-600 hover:bg-indigo-700"
          >
            <Play className="h-5 w-5 mr-2" />
            Start Sleep Tracking
          </Button>
        )}
      </div>

      {/* Real-time Environment Data */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5" />
            <span>Sleep Environment</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">Light Level</div>
              <div className="text-lg font-semibold text-blue-600">{environment.lightLevel}</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">Noise Level</div>
              <div className="text-lg font-semibold text-green-600">{environment.noiseLevel}</div>
            </div>
            <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">Temperature</div>
              <div className="text-lg font-semibold text-orange-600">{environment.temperature}</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">Humidity</div>
              <div className="text-lg font-semibold text-purple-600">{environment.humidity}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Sleep Sessions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Sleep Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <Moon className="h-5 w-5 text-indigo-600" />
                <div>
                  <p className="font-semibold">Last Night</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">10:45 PM - 6:30 AM</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">7h 45m</p>
                <Badge variant="secondary">Score: 85</Badge>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <Moon className="h-5 w-5 text-indigo-600" />
                <div>
                  <p className="font-semibold">2 Days Ago</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">11:15 PM - 6:45 AM</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">7h 30m</p>
                <Badge variant="secondary">Score: 78</Badge>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-3">
                <Moon className="h-5 w-5 text-indigo-600" />
                <div>
                  <p className="font-semibold">3 Days Ago</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">10:30 PM - 7:00 AM</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">8h 30m</p>
                <Badge variant="secondary">Score: 92</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tracking Tips */}
      {isTracking && (
        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Sleep Tracking Tips</h3>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>• Keep your phone on the nightstand or nearby surface</li>
              <li>• Ensure your phone is connected to power</li>
              <li>• Try to maintain a quiet, dark environment</li>
              <li>• Avoid screen time 30 minutes before sleep</li>
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SleepTracker;
