import "jest-location-mock";
import mockConsole from "jest-mock-console";
mockConsole();
// Object.defineProperty(global, "localStorage", {
//   value: {
//     store: {} as Record<string, string>,
//     setItem(key: string, value: string) {
//       this.store[key] = value;
//     },
//     getItem(key: string) {
//       return this.store[key];
//     },
//     removeItem(key: string) {
//       delete this.store[key];
//     },
//     clear() {
//       this.store = {};
//     },
//   },
//   configurable: true,
// });

// jest.spyOn(console, "log").mockReturnValue();
// jest.spyOn(console, "info").mockReturnValue();
// jest.spyOn(console, "warn").mockReturnValue();
// jest.spyOn(console, "error").mockReturnValue();