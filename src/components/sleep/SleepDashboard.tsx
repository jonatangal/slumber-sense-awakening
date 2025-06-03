
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, Moon, Sun, Activity, Heart, Zap } from "lucide-react";
import SleepChart from "./SleepChart";
import SleepStageRing from "./SleepStageRing";

const SleepDashboard = () => {
  // Mock data for today's sleep
  const todaySleep = {
    bedtime: "10:45 PM",
    sleepOnset: "11:12 PM",
    wakeTime: "6:30 AM",
    totalSleep: "7h 18m",
    sleepEfficiency: 89,
    sleepScore: 85,
    stages: {
      awake: 8,
      light: 52,
      deep: 28,
      rem: 12
    },
    heartRate: {
      avg: 58,
      lowest: 52
    },
    disruptions: 2
  };

  const sleepGoal = 8 * 60; // 8 hours in minutes
  const actualSleep = 7 * 60 + 18; // 7h 18m in minutes
  const goalProgress = (actualSleep / sleepGoal) * 100;

  return (
    <div className="space-y-6">
      {/* Sleep Score and Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Sleep Score</p>
                <p className="text-3xl font-bold">{todaySleep.sleepScore}</p>
                <Badge variant="secondary" className="mt-2">
                  Excellent
                </Badge>
              </div>
              <div className="p-3 bg-white/20 rounded-full">
                <Moon className="h-8 w-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Sleep</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{todaySleep.totalSleep}</p>
                <Progress value={goalProgress} className="mt-2 w-full" />
                <p className="text-xs text-gray-500 mt-1">{Math.round(goalProgress)}% of 8h goal</p>
              </div>
              <Clock className="h-8 w-8 text-indigo-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sleep Efficiency</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{todaySleep.sleepEfficiency}%</p>
                <p className="text-xs text-green-600 mt-1">+3% from yesterday</p>
              </div>
              <Activity className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sleep Timeline and Stages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Moon className="h-5 w-5" />
              <span>Last Night's Sleep</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SleepChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sleep Stages</CardTitle>
          </CardHeader>
          <CardContent>
            <SleepStageRing stages={todaySleep.stages} />
          </CardContent>
        </Card>
      </div>

      {/* Sleep Details */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Moon className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Bedtime</p>
                <p className="font-semibold">{todaySleep.bedtime}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <Sun className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Wake Time</p>
                <p className="font-semibold">{todaySleep.wakeTime}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
                <Heart className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Avg Heart Rate</p>
                <p className="font-semibold">{todaySleep.heartRate.avg} bpm</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <Zap className="h-4 w-4 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Disruptions</p>
                <p className="font-semibold">{todaySleep.disruptions}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SleepDashboard;
