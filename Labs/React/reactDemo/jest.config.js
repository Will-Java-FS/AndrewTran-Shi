module.exports = {
	// Specifies the environments that Jest will simulate
	testEnvironment: "jsdom",

	// Specifies how different file types should be transformed
	transform: {
		// Use babel-jest to transform JavaScript/TypeScript and JSX/TSX files
		"^.+\\.(ts|tsx|js|jsx)$": "babel-jest"
	},

	// Specify which files Jest should include when running tests
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

	// Automatically clear mock calls and instances between every test
	clearMocks: true,

	// Set up files to be executed before test suites are run (optional)
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

	// Coverage settings (optional)
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],

	// Specify directories Jest should ignore for testing (optional)
	testPathIgnorePatterns: ["/node_modules/", "/dist/"],

	// Resolve modules correctly for TypeScript path mapping
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1"
	}
};
