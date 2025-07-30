import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { translations } from '../utils/translations';
import { loadRates, saveRates, loadInputs, saveInputs, resetRates, hasRatesChanged, isRateChanged } from '../utils/localStorage';
import LanguageSwitcher from './LanguageSwitcher';
import InputSection from './InputSection';
import RateSettings from './RateSettings';
import BillCalculation from './BillCalculation';

const EACBillCalculator = () => {
  const [language, setLanguage] = useState('ru');
  const [rates, setRates] = useState(() => loadRates());
  
  // Load inputs once to avoid multiple localStorage calls
  const savedInputs = loadInputs();
  const [inputType, setInputType] = useState(savedInputs.inputType);
  const [previousReading, setPreviousReading] = useState(savedInputs.previousReading);
  const [currentReading, setCurrentReading] = useState(savedInputs.currentReading);
  const [consumption, setConsumption] = useState(savedInputs.consumption);
  const [showSettings, setShowSettings] = useState(false);
  
  const [calculations, setCalculations] = useState({});

  const t = translations[language];

  // Save inputs when they change
  useEffect(() => {
    const inputs = {
      inputType,
      previousReading,
      currentReading,
      consumption
    };
    saveInputs(inputs);
  }, [inputType, previousReading, currentReading, consumption]);

  // Save rates when they change
  useEffect(() => {
    saveRates(rates);
  }, [rates]);

  useEffect(() => {
    const getConsumption = () => {
      if (inputType === 'consumption') {
        return parseFloat(consumption) || 0;
      } else {
        const prev = parseFloat(previousReading) || 0;
        const curr = parseFloat(currentReading) || 0;
        return Math.max(0, curr - prev);
      }
    };

    const kWh = getConsumption();
    
    const electricityGen = kWh * rates.electricityGeneration;
    const networkUsage = kWh * rates.networkUsage;
    const ancillaryServices = kWh * rates.ancillaryServices;
    const totalBasicPrice = electricityGen + networkUsage + ancillaryServices + rates.meterDataManagement + rates.electricitySupply;
    
    const fuelAdjustment = kWh * rates.fuelAdjustment;
    const publicServiceObl = kWh * rates.publicServiceObligations;
    const totalSubjectToVAT = totalBasicPrice + fuelAdjustment + publicServiceObl;
    
    const resESFund = kWh * rates.resESFund;
    const vat = totalSubjectToVAT * rates.vatRate;
    const totalAmount = totalSubjectToVAT + resESFund + vat;

    setCalculations({
      consumption: kWh,
      electricityGeneration: electricityGen,
      networkUsage: networkUsage,
      ancillaryServices: ancillaryServices,
      meterDataManagement: rates.meterDataManagement,
      electricitySupply: rates.electricitySupply,
      totalBasicPrice: totalBasicPrice,
      fuelAdjustment: fuelAdjustment,
      publicServiceObligations: publicServiceObl,
      totalSubjectToVAT: totalSubjectToVAT,
      resESFund: resESFund,
      vat: vat,
      totalAmount: totalAmount
    });
  }, [inputType, previousReading, currentReading, consumption, rates]);

  const updateRate = (key, value) => {
    setRates(prev => ({
      ...prev,
      [key]: parseFloat(value) || 0
    }));
  };

  const handleResetRates = () => {
    const defaultRates = resetRates();
    setRates(defaultRates);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <LanguageSwitcher language={language} setLanguage={setLanguage} />

      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-blue-500 text-white p-3 rounded-full">
            <Zap className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">{t.title}</h1>
        </div>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <InputSection
            t={t}
            inputType={inputType}
            setInputType={setInputType}
            previousReading={previousReading}
            setPreviousReading={setPreviousReading}
            currentReading={currentReading}
            setCurrentReading={setCurrentReading}
            consumption={consumption}
            setConsumption={setConsumption}
            calculations={calculations}
            showSettings={showSettings}
            setShowSettings={setShowSettings}
          />

          <RateSettings
            t={t}
            rates={rates}
            updateRate={updateRate}
            showSettings={showSettings}
            onReset={handleResetRates}
            hasRatesChanged={hasRatesChanged}
            isRateChanged={isRateChanged}
          />
        </div>

        <BillCalculation
          t={t}
          calculations={calculations}
          rates={rates}
        />
      </div>

      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>{t.note}</strong> {t.noteText}
        </p>
      </div>
    </div>
  );
};

export default EACBillCalculator; 
