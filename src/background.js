/**
 * Background
 *
 * Listeners for the extension, executed as backgroud script by chrome
 * @author Bastien Nicoud
 */

// Listen to the click on the extension button in the chrome toolbar
chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create({ url: "src/index.html"})
})
