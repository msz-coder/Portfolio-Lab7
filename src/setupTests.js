import '@testing-library/jest-dom/extend-expect';
import "jest-canvas-mock";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

// Suppress React Router v7 deprecation warnings during tests
const originalWarn = console.warn;
console.warn = (...args) => {
  if (
    args[0].includes('React Router Future Flag Warning') || 
    args[0].includes('Relative route resolution within Splat routes')
  ) {
    return; // Ignore these specific warnings
  }
  originalWarn(...args); // Log other warnings normally
};

// Suppress other known warnings that don’t affect tests
const originalError = console.error;
console.error = (...args) => {
  if (args[0].includes('act(...) is not supported') || args[0].includes('Warning:')) {
    return; // Ignore known act() and generic React warnings
  }
  originalError(...args);
};