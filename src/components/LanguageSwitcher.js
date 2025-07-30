import React from 'react';
import { Globe } from 'lucide-react';

const LanguageSwitcher = ({ language, setLanguage }) => {
  return (
    <div className="flex justify-end mb-4">
      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
        <Globe className="w-4 h-4 text-gray-600" />
        <button
          onClick={() => setLanguage('ru')}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            language === 'ru' 
              ? 'bg-blue-500 text-white' 
              : 'text-gray-600 hover:bg-gray-200'
          }`}
        >
          RU
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            language === 'en' 
              ? 'bg-blue-500 text-white' 
              : 'text-gray-600 hover:bg-gray-200'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
