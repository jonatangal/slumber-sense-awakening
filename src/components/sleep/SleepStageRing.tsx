
interface SleepStageRingProps {
  stages: {
    awake: number;
    light: number;
    deep: number;
    rem: number;
  };
}

const SleepStageRing = ({ stages }: SleepStageRingProps) => {
  const total = stages.awake + stages.light + stages.deep + stages.rem;
  
  const percentages = {
    awake: (stages.awake / total) * 100,
    light: (stages.light / total) * 100,
    deep: (stages.deep / total) * 100,
    rem: (stages.rem / total) * 100,
  };

  const radius = 80;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  let currentAngle = 0;

  const createArcPath = (percentage: number, startAngle: number) => {
    const angle = (percentage / 100) * 360;
    const endAngle = startAngle + angle;
    
    const startX = radius + normalizedRadius * Math.cos((startAngle - 90) * Math.PI / 180);
    const startY = radius + normalizedRadius * Math.sin((startAngle - 90) * Math.PI / 180);
    const endX = radius + normalizedRadius * Math.cos((endAngle - 90) * Math.PI / 180);
    const endY = radius + normalizedRadius * Math.sin((endAngle - 90) * Math.PI / 180);
    
    const largeArcFlag = angle > 180 ? 1 : 0;
    
    return `M ${startX} ${startY} A ${normalizedRadius} ${normalizedRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="relative">
        <svg width={radius * 2} height={radius * 2} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
          />
          
          {/* Awake segment */}
          {percentages.awake > 0 && (
            <path
              d={createArcPath(percentages.awake, currentAngle)}
              fill="none"
              stroke="#ef4444"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          )}
          
          {/* Light sleep segment */}
          {percentages.light > 0 && (
            <path
              d={createArcPath(percentages.light, currentAngle += (percentages.awake / 100) * 360)}
              fill="none"
              stroke="#3b82f6"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          )}
          
          {/* Deep sleep segment */}
          {percentages.deep > 0 && (
            <path
              d={createArcPath(percentages.deep, currentAngle += (percentages.light / 100) * 360)}
              fill="none"
              stroke="#8b5cf6"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          )}
          
          {/* REM segment */}
          {percentages.rem > 0 && (
            <path
              d={createArcPath(percentages.rem, currentAngle += (percentages.deep / 100) * 360)}
              fill="none"
              stroke="#10b981"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          )}
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {Math.round(percentages.deep + percentages.rem)}%
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Quality Sleep</p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-4 text-sm w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span>Awake</span>
          </div>
          <span className="font-semibold">{stages.awake}%</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span>Light</span>
          </div>
          <span className="font-semibold">{stages.light}%</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded"></div>
            <span>Deep</span>
          </div>
          <span className="font-semibold">{stages.deep}%</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span>REM</span>
          </div>
          <span className="font-semibold">{stages.rem}%</span>
        </div>
      </div>
    </div>
  );
};

export default SleepStageRing;
