module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], 
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@babel|babel-jest|cheerio)/)"
  ],
  moduleNameMapper: {
    "\\.(css|scss|less)$": "<rootDir>/src/_mocks_/styleMock.js",
    "\\.(jpg|jpeg|png|gif|svg|webp)$": "<rootDir>/src/_mocks_/fileMock.js"
  },
  globals: {
    "react-router-dom": {
      future: {
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }
    }
  },
};
