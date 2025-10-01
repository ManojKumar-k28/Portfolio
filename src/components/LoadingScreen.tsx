import React from 'react';
import { Code2 } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto mb-4 relative">
            <div className="absolute inset-0 border-4 border-blue-400 rounded-full animate-spin border-t-transparent"></div>
            <div className="absolute inset-2 border-4 border-purple-400 rounded-full animate-spin border-t-transparent" style={{animationDirection: 'reverse', animationDuration: '0.75s'}}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Code2 className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
        </div>
        <p className="text-white text-lg font-medium animate-pulse">Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;