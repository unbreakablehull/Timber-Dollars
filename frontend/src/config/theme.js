// Theme Configuration - Easy switch between color schemes
// Uncomment the theme you want to use and comment out the others

// Option 1: Timber Dollars Brand (Lime Green/Black/Timber Brown) - ACTIVE
export const theme = {
  name: 'Timber Dollars Brand',
  colors: {
    primary: '#C5F542',       // Lime/Chartreuse Green (logo background)
    primaryHover: '#B8E83D',  // Slightly darker lime
    primaryDark: '#9ACC2C',   // Darker for contrast
    secondary: '#000000',     // Pure Black (logo border/text)
    secondaryHover: '#1A1A1A', // Near Black
    accent: '#8B5A2B',        // Timber Brown (saddle brown)
    accentHover: '#6B4423',   // Darker timber brown
    accentLight: '#A67C52',   // Lighter wood tone
    background: '#FFFFFF',    // White
    backgroundAlt: '#F5FDE8', // Very light lime tint
    backgroundDark: '#1A1A1A', // Dark background for sections
    text: '#111827',          // Dark text
    textMuted: '#4B5563',     // Muted Gray
    textOnPrimary: '#000000', // Black text on lime background
    border: '#E5E7EB',        // Light border
    borderDark: '#000000',    // Black border
    error: '#EF4444',         // Error Red
    success: '#10B981',       // Success Green
  },
  gradients: {
    hero: 'bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D]',
    button: 'bg-gradient-to-r from-[#C5F542] to-[#B8E83D]',
    accent: 'bg-gradient-to-r from-[#8B5A2B] to-[#6B4423]',
  }
};

// Option 2: Trust & Professional (Navy/Teal/Gray)

// export const theme = {
//   name: 'Trust & Professional',
//   colors: {
//     primary: '#1E3A8A',       // Navy Blue
//     primaryHover: '#1E40AF',  // Brighter Navy
//     secondary: '#0891B2',     // Teal
//     secondaryHover: '#0E7490', // Darker Teal
//     accent: '#10B981',        // Emerald
//     accentHover: '#059669',   // Darker Emerald
//     background: '#F8FAFC',    // Off-white
//     backgroundAlt: '#E2E8F0', // Light Slate
//     text: '#1E293B',          // Slate
//     textMuted: '#64748B',     // Muted Slate
//     border: '#CBD5E1',        // Slate Border
//     error: '#EF4444',         // Error Red
//     success: '#10B981',       // Success Green
//   },
//   gradients: {
//     hero: 'bg-gradient-to-br from-blue-900 to-cyan-600',
//     button: 'bg-gradient-to-r from-blue-900 to-blue-700',
//     accent: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
//   }
// };


// Option 3: Modern & Sophisticated (Purple/Indigo/Silver)

// export const theme = {
//   name: 'Modern & Sophisticated',
//   colors: {
//     primary: '#7C3AED',       // Purple
//     primaryHover: '#6D28D9',  // Darker Purple
//     secondary: '#4F46E5',     // Indigo
//     secondaryHover: '#4338CA', // Darker Indigo
//     accent: '#EC4899',        // Pink
//     accentHover: '#DB2777',   // Darker Pink
//     background: '#FAFAFA',    // Near White
//     backgroundAlt: '#F3F4F6', // Light Gray
//     text: '#1F2937',          // Gray-900
//     textMuted: '#6B7280',     // Gray-500
//     border: '#D1D5DB',        // Gray Border
//     error: '#EF4444',         // Error Red
//     success: '#10B981',       // Success Green
//   },
//   gradients: {
//     hero: 'bg-gradient-to-br from-purple-600 to-indigo-600',
//     button: 'bg-gradient-to-r from-purple-600 to-purple-700',
//     accent: 'bg-gradient-to-r from-pink-500 to-pink-600',
//   }
// };


export default theme;