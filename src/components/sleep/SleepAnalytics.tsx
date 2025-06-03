
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, TrendingDown, Calendar, Target } from "lucide-react";

const SleepAnalytics = () => {
  // Mock weekly sleep data
  const weeklyData = [
    { day: 'Mon', hours: 7.2, quality: 82, efficiency: 88 },
    { day: 'Tue', hours: 6.8, quality: 78, efficiency: 85 },
    { day: 'Wed', hours: 7.5, quality: 87, efficiency: 92 },
    { day: 'Thu', hours: 7.1, quality: 85, efficiency: 89 },
    { day: 'Fri', hours: 6.9, quality: 79, efficiency: 86 },
    { day: 'Sat', hours: 8.2, quality: 91, efficiency: 94 },
    { day: 'Sun', hours: 7.8, quality: 88, efficiency: 91 },
  ];

  // Mock monthly trends
  const monthlyTrends = [
    { week: 'Week 1', avgSleep: 7.2, avgQuality: 85 },
    { week: 'Week 2', avgSleep: 6.9, avgQuality: 82 },
    { week: 'Week 3', avgSleep: 7.4, avgQuality: 87 },
    { week: 'Week 4', avgSleep: 7.6, avgQuality: 89 },
  ];

  const averages = {
    sleepDuration: 7.4,
    sleepQuality: 84,
    sleepEfficiency: 89,
    bedtimeConsistency: 78
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Avg Sleep</p>
                <p className="text-xl font-bold">{averages.sleepDuration}h</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-xs text-green-500">+0.3h</span>
                </div>
              </div>
              <Calendar className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Avg Quality</p>
                <p className="text-xl font-bold">{averages.sleepQuality}</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-xs text-green-500">+2</span>
                </div>
              </div>
              <Target className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sleep Efficiency</p>
                <p className="text-xl font-bold">{averages.sleepEfficiency}%</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-xs text-green-500">+1%</span>
                </div>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Consistency</p>
                <p className="text-xl font-bold">{averages.bedtimeConsistency}%</p>
                <div className="flex items-center space-x-1 mt-1">
                  <TrendingDown className="h-3 w-3 text-red-500" />
                  <span className="text-xs text-red-500">-3%</span>
                </div>
              </div>
              <Calendar className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Sleep Pattern */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Sleep Pattern</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" />
                <YAxis />
                <Line 
                  type="monotone" 
                  dataKey="hours" 
                  stroke="#8b5cf6" 
                  strokeWidth={3}
                  dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 6 }}
                  name="Sleep Hours"
                />
                <Line 
                  type="monotone" 
                  dataKey="quality" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                  name="Quality Score"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center space-x-6 mt-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded"></div>
              <span>Sleep Hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span>Quality Score</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Trends and Sleep Efficiency */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Bar dataKey="avgSleep" fill="#3b82f6" name="Avg Sleep Hours" />
                  <Bar dataKey="avgQuality" fill="#8b5cf6" name="Avg Quality" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sleep Goals Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Sleep Duration Goal (8h)</span>
                <span className="text-sm font-semibold">92%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Quality Goal (85+)</span>
                <span className="text-sm font-semibold">84%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '84%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Consistency Goal (90%)</span>
                <span className="text-sm font-semibold">78%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Tip:</strong> Try to maintain a consistent bedtime routine to improve your sleep consistency score. Consider setting a bedtime reminder.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SleepAnalytics;
