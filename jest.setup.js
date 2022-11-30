import "@testing-library/jest-dom/extend-expect";

const isProd = process.env.NODE_ENV === "production";

process.env.assetPrefix = isProd ? process.env.REPO_NAME : "";

global.CSS = {
  escape: jest.fn(),
  supports: jest.fn().mockImplementation(() => {
    return false;
  }),
};

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    return null;
  }

  disconnect() {
    return null;
  }

  unobserve() {
    return null;
  }
};
