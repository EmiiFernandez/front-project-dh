module.exports = {
  // ... otras configuraciones de ESLint
  rules: {
    // Otras reglas de ESLint
    'no-restricted-globals': ['error', 'event', 'fdescribe'], // Excluye 'removeEventListener'
  },
};
