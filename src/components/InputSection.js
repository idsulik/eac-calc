import React from 'react';
import { Calculator, Settings } from 'lucide-react';

const InputSection = ({ 
  t, 
  inputType, 
  setInputType, 
  previousReading, 
  setPreviousReading, 
  currentReading, 
  setCurrentReading, 
  consumption, 
  setConsumption, 
  calculations, 
  showSettings, 
  setShowSettings 
}) => {
  return (
    <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          {t.inputData}
        </h2>

        <div className="mb-4">
          <div className="flex bg-white rounded-lg p-1 border">
            <button
              onClick={() => setInputType('readings')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                inputType === 'readings' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {t.meterReadings}
            </button>
            <button
              onClick={() => setInputType('consumption')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                inputType === 'consumption' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {t.consumptionInput}
            </button>
          </div>
        </div>

        {inputType === 'readings' ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.previousReading}
              </label>
              <input
                type="number"
                step="0.1"
                value={previousReading}
                onChange={(e) => setPreviousReading(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="44681"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.currentReading}
              </label>
              <input
                type="number"
                step="0.1"
                value={currentReading}
                onChange={(e) => setCurrentReading(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="45291.1"
              />
            </div>
            <div className="bg-white p-3 rounded border border-blue-200">
              <div className="text-sm text-gray-600">{t.consumptionResult}</div>
              <div className="text-2xl font-bold text-blue-600">
                {calculations.consumption?.toFixed(1) || '0.0'} kWh
              </div>
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.consumption}
            </label>
            <input
              type="number"
              step="0.1"
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="610.1"
            />
          </div>
        )}

        <button
          onClick={() => setShowSettings(!showSettings)}
          className="w-full mt-6 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg transition-colors"
        >
          <Settings className="w-4 h-4" />
          {showSettings ? t.hideRates : t.adjustRates}
        </button>
    </div>
  );
};

export default InputSection;
