export const DEFAULT_RATES = {
  electricityGeneration: 0.1035,
  networkUsage: 0.0305,
  ancillaryServices: 0.0065,
  meterDataManagement: 0.98,
  electricitySupply: 6.08,
  fuelAdjustment: 0.106249,
  publicServiceObligations: 0.00051,
  resESFund: 0.005,
  vatRate: 0.09
};

export const DEFAULT_INPUTS = {
  previousReading: '44681',
  currentReading: '45291.1',
  consumption: '610.1',
  inputType: 'readings'
};

const STORAGE_KEYS = {
  RATES: 'eac-calc-rates',
  INPUTS: 'eac-calc-inputs'
};

export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.warn('Failed to save to localStorage:', error);
  }
};

export const loadFromLocalStorage = (key, defaultValue) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn('Failed to load from localStorage:', error);
    return defaultValue;
  }
};

export const saveRates = (rates) => {
  saveToLocalStorage(STORAGE_KEYS.RATES, rates);
};

export const loadRates = () => {
  return loadFromLocalStorage(STORAGE_KEYS.RATES, DEFAULT_RATES);
};

export const saveInputs = (inputs) => {
  saveToLocalStorage(STORAGE_KEYS.INPUTS, inputs);
};

export const loadInputs = () => {
  return loadFromLocalStorage(STORAGE_KEYS.INPUTS, DEFAULT_INPUTS);
};

export const resetRates = () => {
  saveRates(DEFAULT_RATES);
  return DEFAULT_RATES;
};

export const hasRatesChanged = (currentRates) => {
  return Object.keys(DEFAULT_RATES).some(key => {
    return Math.abs(currentRates[key] - DEFAULT_RATES[key]) > 0.000001;
  });
};

export const isRateChanged = (key, value) => {
  return Math.abs(value - DEFAULT_RATES[key]) > 0.000001;
};
