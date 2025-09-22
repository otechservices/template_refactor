
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleur principale : bleu-gris foncé
        primary: {
          DEFAULT: '#2C3E50',
          50: '#f2f4f6',
          100: '#d9dee3',
          200: '#b0b8c2',
          300: '#8694a1',
          400: '#5e6f82',
          500: '#2C3E50',
          600: '#263446',
          700: '#1f2a3a',
          800: '#19202e',
          900: '#121623',
        },

        // Couleur secondaire : orange vif
        secondary: {
          DEFAULT: '#E67E22',
          50: '#fde9d9',
          100: '#fbd4b3',
          200: '#f9b886',
          300: '#f79c59',
          400: '#f5822c',
          500: '#E67E22',
          600: '#cc701e',
          700: '#b2631b',
          800: '#995418',
          900: '#803915',
        },

        // Couleur d'accentuation : gris clair
        accent: {
          DEFAULT: '#ECF0F1',
          50: '#ffffff',
          100: '#f9fafb',
          200: '#f2f4f5',
          300: '#ecf0f1',
          400: '#d9dbdc',
          500: '#c5c7c8',
          600: '#a1a3a5',
          700: '#7d7f80',
          800: '#595a5b',
          900: '#363738',
        },

        // Couleur de fond
        background: {
          light: '#FFFFFF',
          section: '#ECF0F1',
        },

        // Couleurs texte
        text: {
          dark: '#2C3E50',
          muted: '#7F8C8D',
        },
      },
    },
  },
  plugins: [],
}
export default config
