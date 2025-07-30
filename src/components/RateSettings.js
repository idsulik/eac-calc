import React from 'react';
import { RotateCcw } from 'lucide-react';

const RateSettings = ({ t, rates, updateRate, showSettings, onReset, hasRatesChanged, isRateChanged }) => {
  if (!showSettings) return null;

  const showResetButton = hasRatesChanged(rates);

  return (
    <div className="mt-4 bg-gray-50 rounded-lg p-4 border">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-700">{t.rates}</h3>
        {showResetButton && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            title={t.resetRates || "Reset to default rates"}
          >
            <RotateCcw className="w-3 h-3" />
            {t.reset || "Reset"}
          </button>
        )}
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between items-center">
          <span className={isRateChanged('electricityGeneration', rates.electricityGeneration) ? 'text-blue-600 font-medium' : ''}>{t.rateNames.electricityGeneration}</span>
          <input
            type="number"
            step="0.0001"
            value={rates.electricityGeneration}
            onChange={(e) => updateRate('electricityGeneration', e.target.value)}
            className={`w-20 px-2 py-1 border rounded text-right ${isRateChanged('electricityGeneration', rates.electricityGeneration) ? 'border-blue-500 bg-blue-50' : ''}`}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className={isRateChanged('networkUsage', rates.networkUsage) ? 'text-blue-600 font-medium' : ''}>{t.rateNames.networkUsage}</span>
          <input
            type="number"
            step="0.0001"
            value={rates.networkUsage}
            onChange={(e) => updateRate('networkUsage', e.target.value)}
            className={`w-20 px-2 py-1 border rounded text-right ${isRateChanged('networkUsage', rates.networkUsage) ? 'border-blue-500 bg-blue-50' : ''}`}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className={isRateChanged('ancillaryServices', rates.ancillaryServices) ? 'text-blue-600 font-medium' : ''}>{t.rateNames.ancillaryServices}</span>
          <input
            type="number"
            step="0.0001"
            value={rates.ancillaryServices}
            onChange={(e) => updateRate('ancillaryServices', e.target.value)}
            className={`w-20 px-2 py-1 border rounded text-right ${isRateChanged('ancillaryServices', rates.ancillaryServices) ? 'border-blue-500 bg-blue-50' : ''}`}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className={isRateChanged('meterDataManagement', rates.meterDataManagement) ? 'text-blue-600 font-medium' : ''}>{t.rateNames.meterDataManagement}</span>
          <input
            type="number"
            step="0.01"
            value={rates.meterDataManagement}
            onChange={(e) => updateRate('meterDataManagement', e.target.value)}
            className={`w-20 px-2 py-1 border rounded text-right ${isRateChanged('meterDataManagement', rates.meterDataManagement) ? 'border-blue-500 bg-blue-50' : ''}`}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className={isRateChanged('electricitySupply', rates.electricitySupply) ? 'text-blue-600 font-medium' : ''}>{t.rateNames.electricitySupply}</span>
          <input
            type="number"
            step="0.01"
            value={rates.electricitySupply}
            onChange={(e) => updateRate('electricitySupply', e.target.value)}
            className={`w-20 px-2 py-1 border rounded text-right ${isRateChanged('electricitySupply', rates.electricitySupply) ? 'border-blue-500 bg-blue-50' : ''}`}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className={isRateChanged('fuelAdjustment', rates.fuelAdjustment) ? 'text-blue-600 font-medium' : ''}>{t.rateNames.fuelAdjustment}</span>
          <input
            type="number"
            step="0.000001"
            value={rates.fuelAdjustment}
            onChange={(e) => updateRate('fuelAdjustment', e.target.value)}
            className={`w-20 px-2 py-1 border rounded text-right ${isRateChanged('fuelAdjustment', rates.fuelAdjustment) ? 'border-blue-500 bg-blue-50' : ''}`}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className={isRateChanged('publicServiceObligations', rates.publicServiceObligations) ? 'text-blue-600 font-medium' : ''}>{t.rateNames.publicServiceObligations}</span>
          <input
            type="number"
            step="0.00001"
            value={rates.publicServiceObligations}
            onChange={(e) => updateRate('publicServiceObligations', e.target.value)}
            className={`w-20 px-2 py-1 border rounded text-right ${isRateChanged('publicServiceObligations', rates.publicServiceObligations) ? 'border-blue-500 bg-blue-50' : ''}`}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className={isRateChanged('resESFund', rates.resESFund) ? 'text-blue-600 font-medium' : ''}>{t.rateNames.resESFund}</span>
          <input
            type="number"
            step="0.001"
            value={rates.resESFund}
            onChange={(e) => updateRate('resESFund', e.target.value)}
            className={`w-20 px-2 py-1 border rounded text-right ${isRateChanged('resESFund', rates.resESFund) ? 'border-blue-500 bg-blue-50' : ''}`}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className={isRateChanged('vatRate', rates.vatRate) ? 'text-blue-600 font-medium' : ''}>{t.rateNames.vatRate}</span>
          <input
            type="number"
            step="0.01"
            value={rates.vatRate * 100}
            onChange={(e) => updateRate('vatRate', e.target.value / 100)}
            className={`w-20 px-2 py-1 border rounded text-right ${isRateChanged('vatRate', rates.vatRate) ? 'border-blue-500 bg-blue-50' : ''}`}
          />
        </div>
      </div>
    </div>
  );
};

export default RateSettings;
