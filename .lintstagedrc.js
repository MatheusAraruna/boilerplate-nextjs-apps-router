const buildEslintCommand = (filenames) => [
  `prettier --write ${filenames.join(' ')}`,
  `npm run lint --fix . ${filenames.join(' --file')}`
]

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand]
}
