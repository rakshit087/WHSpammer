function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("btn").addEventListener("click",async (e) => {
  const n_element = document.getElementById("number");
  const message_element = document.getElementById("message");
  const n = n_element.value ? n_element.value : 1;
  const message = message_element.value
    ? message_element.value
    : "This Message Was Sent Bot!";
  const form = document.querySelector("form");
  form.classList.add("noDisplay");
  const status = document.getElementById("status");
  for(let i = n; i>=0; i--) {
    status.innerHTML = "Sending " +  i + " Messages";
    await sleep(100);
  }
  status.innerHTML = "Sent <strong>" +  n + "</strong> Messages";
  const reset = document.getElementById("reset");
  reset.classList.remove("noDisplay");
  reset.addEventListener("click",(e)=>{
      e.srcElement.classList.add("noDisplay");
      form.classList.remove("noDisplay");
      status.innerHTML = ""
  })
});
