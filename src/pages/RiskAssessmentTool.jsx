import React, { useState } from 'react';
import SEO from '../components/SEO';

const RiskAssessmentTool = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    riskName: '',
    occupancy: 'industrial',
    country: '',
    construction: 'fr',
    yearBuilt: '',
    floorArea: '',
    storeys: '',
    buildings: '',
    currency: 'GBP',
    valBuildings: '',
    valContents: '',
    valPlant: '',
    valTurnover: '',
    valGP: '',
    indemnity: 12,
  });
  const [scores, setScores] = useState({});
  const [results, setResults] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleScoreChange = (scoreId, value) => {
    setScores(prev => ({ ...prev, [scoreId]: parseInt(value) }));
  };

  const getTSI = () => {
    return (parseInt(formData.valBuildings) || 0) + 
           (parseInt(formData.valContents) || 0) + 
           (parseInt(formData.valPlant) || 0);
  };

  const formatCurrency = (value) => {
    const sym = formData.currency === 'USD' ? '$' : formData.currency === 'EUR' ? '€' : '£';
    return sym + (value || 0).toLocaleString('en-GB');
  };

  const calculatePerilScore = (perilScores, weights) => {
    let wtSum = 0, wSum = 0;
    perilScores.forEach((score, idx) => {
      wtSum += score * weights[idx];
      wSum += weights[idx];
    });
    const rawAvg = wtSum / wSum;
    return Math.round(((5 - rawAvg) / 4) * 100);
  };

  const calculateResults = () => {
    // Simplified calculation for demo
    const fireScore = 70;
    const natcatScore = 65;
    const floodScore = 60;
    const biScore = 75;
    const overall = Math.round(fireScore * 0.35 + natcatScore * 0.25 + floodScore * 0.20 + biScore * 0.20);
    
    setResults({
      overall,
      grade: overall >= 75 ? 'A' : overall >= 55 ? 'B' : overall >= 35 ? 'C' : 'D',
      fireScore,
      natcatScore,
      floodScore,
      biScore,
      tsi: getTSI(),
    });
    setCurrentStep(5);
  };

  const steps = ['Site Info', 'Fire / Explosion', 'NatCat', 'Flood', 'Bus. Interruption', 'Results'];

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Solar Risk Assessment Tool" 
        description="Evaluate your solar and renewable energy project risks with Kenstane Energy's professional Multi-Peril Risk Assessment engine."
      />
      
      {/* Hero */}
      <section className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight" style={{ lineHeight: '1.1' }}>
              Multi-Peril Risk Assessment Tool
            </h1>
            <div className="w-20 h-1 bg-emerald-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Professional EML/PML assessment engine for comprehensive risk engineering analysis
            </p>
          </div>
        </div>
      </section>

      {/* Tool Interface */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Step Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 bg-slate-50 p-2 rounded-xl">
              {steps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStep(idx)}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                    currentStep === idx
                      ? 'bg-emerald-600 text-white'
                      : currentStep > idx
                      ? 'text-emerald-600 bg-white'
                      : 'text-slate-600 bg-white hover:bg-slate-100'
                  }`}
                >
                  {idx + 1}. {step}
                </button>
              ))}
            </div>

            {/* Step 0: Site Info */}
            {currentStep === 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Site Information</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Risk Name / Reference</label>
                    <input
                      type="text"
                      value={formData.riskName}
                      onChange={(e) => handleInputChange('riskName', e.target.value)}
                      placeholder="e.g. Site A – Manufacturing Plant"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Occupancy Type</label>
                    <select
                      value={formData.occupancy}
                      onChange={(e) => handleInputChange('occupancy', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    >
                      <option value="industrial">Industrial / Manufacturing</option>
                      <option value="warehouse">Warehousing / Logistics</option>
                      <option value="commercial">Commercial / Retail</option>
                      <option value="office">Office / Administrative</option>
                      <option value="chemical">Chemical / Petrochemical</option>
                      <option value="food">Food & Beverage Processing</option>
                      <option value="mixed">Mixed Occupancy</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Country / Territory</label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      placeholder="e.g. Kenya"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Construction Type</label>
                    <select
                      value={formData.construction}
                      onChange={(e) => handleInputChange('construction', e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    >
                      <option value="fr">Fire Resistive (Concrete/Steel)</option>
                      <option value="masonry">Masonry / Brick</option>
                      <option value="steel">Non-combustible Steel Frame</option>
                      <option value="mixed">Mixed Construction</option>
                      <option value="wood">Combustible / Timber Frame</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Year Built</label>
                    <input
                      type="number"
                      value={formData.yearBuilt}
                      onChange={(e) => handleInputChange('yearBuilt', e.target.value)}
                      placeholder="e.g. 2010"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Total Floor Area (m²)</label>
                    <input
                      type="number"
                      value={formData.floorArea}
                      onChange={(e) => handleInputChange('floorArea', e.target.value)}
                      placeholder="e.g. 5000"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">Valuation Details</h4>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Buildings Value</label>
                      <input
                        type="number"
                        value={formData.valBuildings}
                        onChange={(e) => handleInputChange('valBuildings', e.target.value)}
                        placeholder="e.g. 5000000"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Contents / Stock</label>
                      <input
                        type="number"
                        value={formData.valContents}
                        onChange={(e) => handleInputChange('valContents', e.target.value)}
                        placeholder="e.g. 2000000"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Plant & Machinery</label>
                      <input
                        type="number"
                        value={formData.valPlant}
                        onChange={(e) => handleInputChange('valPlant', e.target.value)}
                        placeholder="e.g. 3000000"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Annual Turnover</label>
                      <input
                        type="number"
                        value={formData.valTurnover}
                        onChange={(e) => handleInputChange('valTurnover', e.target.value)}
                        placeholder="e.g. 10000000"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Gross Profit</label>
                      <input
                        type="number"
                        value={formData.valGP}
                        onChange={(e) => handleInputChange('valGP', e.target.value)}
                        placeholder="e.g. 3000000"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Indemnity Period (months)</label>
                      <input
                        type="number"
                        value={formData.indemnity}
                        onChange={(e) => handleInputChange('indemnity', e.target.value)}
                        placeholder="12"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-xl flex justify-between items-center">
                    <span className="text-slate-700 font-semibold">Total Sum Insured (TSI)</span>
                    <span className="text-2xl font-bold text-emerald-600">{formatCurrency(getTSI())}</span>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all"
                  >
                    Next: Fire / Explosion →
                  </button>
                </div>
              </div>
            )}

            {/* Steps 1-4: Scoring (Simplified for demo) */}
            {[1, 2, 3, 4].map((step) => (
              currentStep === step && (
                <div key={step} className="bg-white border border-slate-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    {step === 1 && 'Fire & Explosion Risk Scoring'}
                    {step === 2 && 'Natural Catastrophe Risk Scoring'}
                    {step === 3 && 'Flood Risk Scoring'}
                    {step === 4 && 'Business Interruption Risk Scoring'}
                  </h3>
                  <p className="text-slate-600 mb-8">Score each factor 1-5 (1=Excellent, 5=Poor)</p>
                  
                  <div className="space-y-4 mb-8">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">Risk Factor {item}</div>
                          <div className="text-sm text-slate-600">Description of risk factor goes here</div>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="5"
                          defaultValue="3"
                          className="w-32 accent-emerald-600"
                          onChange={(e) => handleScoreChange(`step${step}_item${item}`, e.target.value)}
                        />
                        <div className="w-12 text-center font-bold text-emerald-600 text-lg">
                          {scores[`step${step}_item${item}`] || 3}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setCurrentStep(step - 1)}
                      className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-3 rounded-xl font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-all"
                    >
                      ← Back
                    </button>
                    {step === 4 ? (
                      <button
                        onClick={calculateResults}
                        className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all"
                      >
                        Calculate Results →
                      </button>
                    ) : (
                      <button
                        onClick={() => setCurrentStep(step + 1)}
                        className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all"
                      >
                        Next →
                      </button>
                    )}
                  </div>
                </div>
              )
            ))}

            {/* Step 5: Results */}
            {currentStep === 5 && results && (
              <div className="bg-white border border-slate-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Risk Assessment Results</h3>
                
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-slate-50 p-6 rounded-xl text-center">
                    <div className="text-sm text-slate-600 mb-2">Overall Score</div>
                    <div className="text-4xl font-bold text-emerald-600">{results.overall}/100</div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl text-center">
                    <div className="text-sm text-slate-600 mb-2">Risk Grade</div>
                    <div className={`text-4xl font-bold ${
                      results.grade === 'A' ? 'text-green-600' :
                      results.grade === 'B' ? 'text-blue-600' :
                      results.grade === 'C' ? 'text-amber-600' : 'text-red-600'
                    }`}>{results.grade}</div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl text-center">
                    <div className="text-sm text-slate-600 mb-2">Total Sum Insured</div>
                    <div className="text-2xl font-bold text-emerald-600">{formatCurrency(results.tsi)}</div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl text-center">
                    <div className="text-sm text-slate-600 mb-2">Fire Score</div>
                    <div className="text-4xl font-bold text-orange-600">{results.fireScore}/100</div>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl mb-6">
                  <h4 className="font-bold text-slate-900 mb-4">Recommendations</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span className="text-slate-700">Continue maintaining current risk management standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span className="text-slate-700">Schedule annual risk engineering surveys</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span className="text-slate-700">Review fire protection systems quarterly</span>
                    </li>
                  </ul>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setCurrentStep(0)}
                    className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-3 rounded-xl font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-all"
                  >
                    ← Start New Assessment
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all"
                  >
                    Print Report
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiskAssessmentTool;
