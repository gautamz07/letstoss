document.getElementById('tossIt').addEventListener('click', () => {
  document.getElementById('coin-wrapper').classList.add('tossed')
});


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}