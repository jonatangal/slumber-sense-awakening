
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Moon, Sun, Activity, Clock, TrendingUp, Settings } from "lucide-react";
import SleepDashboard from "@/components/sleep/SleepDashboard";
import SleepAnalytics from "@/components/sleep/SleepAnalytics";
import SleepTracker from "@/components/sleep/SleepTracker";
import SleepSettings from "@/components/sleep/SleepSettings";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-slate-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-600 rounded-lg">
              <Moon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Smart Sleep Monitor</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">Track, analyze, and improve your sleep</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            className="ml-4"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </header>

        {/* Main Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <Activity className="h-4 w-4" />
              <span>Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="tracker" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Tracker</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <SleepDashboard />
          </TabsContent>

          <TabsContent value="analytics">
            <SleepAnalytics />
          </TabsContent>

          <TabsContent value="tracker">
            <SleepTracker />
          </TabsContent>

          <TabsContent value="settings">
            <SleepSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
