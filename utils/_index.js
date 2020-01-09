module.exports = () => {
    return {
        "currentDay": require('./formatters').currentDay(),
         "usd": require('./formatters').usd(),
    }
}