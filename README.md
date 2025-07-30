# EAC Bill Calculator

A simple web calculator for Electricity Authority of Cyprus (EAC) electricity bills with bilingual support (Russian/English).

## 🚀 Features

- **📊 Two input modes**: Meter readings or direct consumption
- **🌍 Bilingual**: Russian and English interface  
- **⚙️ Adjustable rates**: Edit all tariffs to match current EAC prices
- **💾 Auto-save**: Your inputs and rate changes are automatically saved
- **🔄 Smart reset**: Reset rates to defaults (only shows when changed)
- **📱 Responsive**: Works on desktop and mobile

## 🌐 Live Demo

**[Try it here: https://idsulik.github.io/eac-calc](https://idsulik.github.io/eac-calc)**

## 🛠️ Quick Start

```bash
# Clone the project
git clone https://github.com/idsulik/eac-calc.git
cd eac-calc

# Install dependencies
npm install

# Run locally
npm start
```

Visit `http://localhost:3000` to see it running.

## 📖 How to Use

1. **Choose input method**: Meter readings or direct consumption
2. **Enter your data**: Previous/current readings or kWh consumed
3. **Adjust rates** (optional): Click "Adjust Rates" to modify tariffs
4. **View results**: See detailed bill breakdown automatically

Your inputs are automatically saved and restored when you reload the page.

## 🚀 Deploy to GitHub Pages

```bash
npm run deploy
```

## 🏗️ Built With

- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **localStorage** - Data persistence

## ⚠️ Disclaimer

This calculator is for estimation purposes. Always verify with official EAC documentation for accurate billing.
