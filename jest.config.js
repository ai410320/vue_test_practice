module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  "moduleFileExtensions": [
    "js",
    "jsx",
    "json",
    "node",
    "ts"
  ]

}
