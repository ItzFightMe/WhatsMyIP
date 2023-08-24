function getIpAddress() {
  fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(data => {
      var ipAddress = data.ip;
      document.getElementById("ip-address").innerText = ipAddress;
    })
    .catch(error => {
      console.error("Error fetching IP address:", error);
    });
}

window.addEventListener("DOMContentLoaded", getIpAddress);
