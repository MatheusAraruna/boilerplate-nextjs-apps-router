const buildEslintCommand = (filenames) => [
  `prettier --write ${filenames.join(' ')}`,
  `npm run lint --fix . ${filenames.join(' --file')}`,
  `npm test -- --findRelatedTests ${filenames.join(' ')}`
]

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand]
}
