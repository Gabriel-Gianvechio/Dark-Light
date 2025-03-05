import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { ThemeProvider, useTheme } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <ThemeApp />
    </ThemeProvider>
  );
}

function ThemeApp() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <div className={`h-screen w-screen flex flex-col ${isDarkTheme ? 'dark' : ''}`}>
      {/* Cabeçalho */}
      <header 
        className={`h-[7vh] w-full flex items-center justify-between px-4 
        ${isDarkTheme ? 'bg-black' : 'bg-white'}`}
      >
        {/* Espaço em branco para manter o justify-between */}
        <div></div>

        {/* Botões de Login, Signup e Tema */}
        <div className="flex items-center space-x-4">
          <button 
            className={`px-3 py-1 rounded-full border text-sm transition-all duration-300 
            ${isDarkTheme 
              ? 'text-white border-white hover:bg-white/10 hover:scale-105' 
              : 'text-gray-800 border-gray-800 hover:bg-gray-800/10 hover:scale-105'
            }`}
          >
            Log In
          </button>
          <button 
            className={`px-3 py-1 rounded-full text-sm transition-all duration-300 
            ${isDarkTheme 
              ? 'bg-white text-gray-800 hover:bg-white/80 hover:scale-105' 
              : 'bg-gray-800 text-white hover:bg-gray-800/80 hover:scale-105'
            }`}
          >
            Sign Up
          </button>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            {isDarkTheme ? (
              <Sun size={24} className="text-white" />
            ) : (
              <Moon size={24} className="text-gray-800" />
            )}
          </button>
        </div>
      </header>
      
      {/* Corpo */}
      <main 
        className={`h-[93vh] w-full flex items-center justify-center p-4 
        ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-claude-beige text-black'}`}
      >
        <h1 className="text-2xl font-bold text-center">
          {isDarkTheme ? 'Dark Theme' : 'Light Theme'}
        </h1>
      </main>
    </div>
  );
}

export default App;