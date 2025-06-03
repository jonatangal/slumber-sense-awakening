
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';

const SleepChart = () => {
  // Mock sleep stage data throughout the night
  const sleepData = [
    { time: '22:45', stage: 0, label: 'Awake' },
    { time: '23:00', stage: 0, label: 'Awake' },
    { time: '23:15', stage: 1, label: 'Light' },
    { time: '23:30', stage: 1, label: 'Light' },
    { time: '23:45', stage: 2, label: 'Deep' },
    { time: '00:00', stage: 2, label: 'Deep' },
    { time: '00:15', stage: 2, label: 'Deep' },
    { time: '00:30', stage: 3, label: 'REM' },
    { time: '00:45', stage: 3, label: 'REM' },
    { time: '01:00', stage: 1, label: 'Light' },
    { time: '01:15', stage: 2, label: 'Deep' },
    { time: '01:30', stage: 2, label: 'Deep' },
    { time: '01:45', stage: 1, label: 'Light' },
    { time: '02:00', stage: 3, label: 'REM' },
    { time: '02:15', stage: 3, label: 'REM' },
    { time: '02:30', stage: 1, label: 'Light' },
    { time: '02:45', stage: 2, label: 'Deep' },
    { time: '03:00', stage: 2, label: 'Deep' },
    { time: '03:15', stage: 1, label: 'Light' },
    { time: '03:30', stage: 3, label: 'REM' },
    { time: '03:45', stage: 3, label: 'REM' },
    { time: '04:00', stage: 1, label: 'Light' },
    { time: '04:15', stage: 1, label: 'Light' },
    { time: '04:30', stage: 2, label: 'Deep' },
    { time: '04:45', stage: 1, label: 'Light' },
    { time: '05:00', stage: 3, label: 'REM' },
    { time: '05:15', stage: 3, label: 'REM' },
    { time: '05:30', stage: 1, label: 'Light' },
    { time: '05:45', stage: 1, label: 'Light' },
    { time: '06:00', stage: 1, label: 'Light' },
    { time: '06:15', stage: 0, label: 'Awake' },
    { time: '06:30', stage: 0, label: 'Awake' },
  ];

  const getStageColor = (stage: number) => {
    switch (stage) {
      case 0: return '#ef4444'; // Awake - red
      case 1: return '#3b82f6'; // Light - blue
      case 2: return '#8b5cf6'; // Deep - purple
      case 3: return '#10b981'; // REM - green
      default: return '#6b7280';
    }
  };

  return (
    <div className="space-y-4">
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={sleepData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="time" 
              tick={{ fontSize: 12 }}
              interval="preserveStartEnd"
            />
            <YAxis 
              domain={[0, 3]}
              ticks={[0, 1, 2, 3]}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => {
                const labels = ['Awake', 'Light', 'Deep', 'REM'];
                return labels[value] || '';
              }}
            />
            <Area
              type="stepAfter"
              dataKey="stage"
              stroke="#8b5cf6"
              fill="url(#sleepGradient)"
              strokeWidth={2}
            />
            <defs>
              <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Sleep Stage Legend */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded"></div>
          <span>Awake</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded"></div>
          <span>Light Sleep</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded"></div>
          <span>Deep Sleep</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span>REM Sleep</span>
        </div>
      </div>
    </div>
  );
};

export default SleepChart;
