module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    // Otras configuraciones extendidas si las tienes
  ],
  rules: {
    'no-restricted-globals': ['error', 'fdescribe'], // Excluye 'event' y 'removeEventListener'
  },
};
