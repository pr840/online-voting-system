let votes = JSON.parse(localStorage.getItem("votes")) || {
  "Amit Sharma": 0,
  "Priya Singh": 0,
  "Rahul Verma": 0
};

window.onload = function() {
  let voter = localStorage.getItem("currentVoter");
  if (!voter) {
    alert("Pehle login karo!");
    window.location.href = "login.html";
    return;
  }
  document.getElementById("welcome").innerText = "Welcome, " + voter + " - Aapka vote secure hai";
};

function vote(candidateName) {
  let voter = localStorage.getItem("currentVoter");
  if (!voter) return;

  if (!confirm(candidateName + " ko vote dena hai? Confirm karo.")) return;

  votes[candidateName]++;
  localStorage.setItem("votes", JSON.stringify(votes));
  localStorage.setItem("voted_" + voter, "true");
  localStorage.removeItem("currentVoter");

  alert("✅ Thank You! Aapka vote " + candidateName + " ko gaya.");
  window.location.href = "result.html";
}