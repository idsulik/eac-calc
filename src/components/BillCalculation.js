import React from 'react';
import { FileText, Euro } from 'lucide-react';

const BillCalculation = ({ t, calculations, rates }) => {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-blue-600 text-white p-6">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-6 h-6" />
            <h2 className="text-xl font-semibold">{t.calculation}</h2>
          </div>
          <div className="text-blue-100">
            {t.consumptionLabel} {calculations.consumption?.toFixed(1)} kWh
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 pb-2 border-b">
                {t.chargesTitle}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{t.electricityGeneration} {`{${calculations.consumption?.toFixed(0)} kWh x €${rates.electricityGeneration}}`}</span>
                  <span className="font-mono">€{calculations.electricityGeneration?.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.networkUsage} {`{${calculations.consumption?.toFixed(0)} kWh x €${rates.networkUsage}}`}</span>
                  <span className="font-mono">€{calculations.networkUsage?.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.ancillaryServices} {`{${calculations.consumption?.toFixed(0)} kWh x €${rates.ancillaryServices}}`}</span>
                  <span className="font-mono">€{calculations.ancillaryServices?.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.meterDataManagement}</span>
                  <span className="font-mono">€{calculations.meterDataManagement?.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.electricitySupply}</span>
                  <span className="font-mono">€{calculations.electricitySupply?.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-dashed">
                <div className="flex justify-between font-semibold">
                  <span>{t.totalBasicPrice}</span>
                  <span className="font-mono">€{calculations.totalBasicPrice?.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>{t.fuelAdjustment} {`{${calculations.consumption?.toFixed(0)}kWh x €${rates.fuelAdjustment}}`}</span>
                <span className="font-mono">€{calculations.fuelAdjustment?.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>{t.publicServiceObligations} {`{${calculations.consumption?.toFixed(0)}kWh x €${rates.publicServiceObligations}}`}</span>
                <span className="font-mono">€{calculations.publicServiceObligations?.toFixed(2)}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-dashed">
              <div className="flex justify-between font-semibold">
                <span>{t.totalSubjectToVAT} ({(rates.vatRate * 100).toFixed(0)}%)</span>
                <span className="font-mono">€{calculations.totalSubjectToVAT?.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>{t.resESFund} {`{${calculations.consumption?.toFixed(0)}kWh x €${rates.resESFund}}`}</span>
                <span className="font-mono">€{calculations.resESFund?.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>{t.vat} ({(rates.vatRate * 100).toFixed(0)}%)</span>
                <span className="font-mono">€{calculations.vat?.toFixed(2)}</span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t-2 border-blue-600">
              <div className="flex justify-between items-center text-lg">
                <span className="font-semibold text-gray-800">{t.totalCharges}</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                    <Euro className="w-6 h-6" />
                    €{calculations.totalAmount?.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-6 border-t">
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-1">{t.amountDue}</div>
            <div className="text-3xl font-bold text-green-600">
              €{calculations.totalAmount?.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillCalculation;
