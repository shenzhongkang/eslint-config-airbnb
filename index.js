module.exports = {
  env: {
    node: false, // `airbnb-base` sets this to true. We reset it here to make the config extend logic clearer
  },
  extends: [
    'airbnb-base', // `eslint-config-airbnb-base` rules
  ],
  rules: {}
}