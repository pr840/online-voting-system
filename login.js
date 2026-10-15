function login() {
  let voterId = document.getElementById("voterId").value.trim();
  let pin = document.getElementById("pin").value.trim();

  if (voterId === "" || pin === "") {
    alert("Voter ID aur PIN bharo!");
    return;
  }
  if (pin.length!== 4 || isNaN(pin)) {
    alert("PIN sirf 4 digit number hona chahiye");
    return;
  }
  if (localStorage.getItem("voted_" + voterId)) {
    alert("⚠️ Aap already vote kar chuke ho! Double voting not allowed.");
    return;
  }
  if (!voterId.startsWith("VOTE")) {
    alert("Voter ID VOTE se start hona chahiye, jaise VOTE101");
    return;
  }

  localStorage.setItem("currentVoter", voterId);
  window.location.href = "vote.html";
}