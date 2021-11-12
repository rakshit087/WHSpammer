console.log("Whatsapp Running");
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message);
  var event = new InputEvent("input", {
    bubbles: true,
  });
  var textbox = document.querySelector(
    "#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div._13NKt.copyable-text.selectable-text"
  );
  textbox.textContent = message;
  textbox.dispatchEvent(event);
  document.querySelector("button._4sWnG").click();
});
