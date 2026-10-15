function loadResults() {
  let votes = JSON.parse(localStorage.getItem("votes")) || {
    "Amit Sharma": 0,
    "Priya Singh": 0,
    "Rahul Verma": 0
  };
  let total = Object.values(votes).reduce((a, b) => a + b, 0);
  let max = Math.max(...Object.values(votes), 1);

  let html = "";
  for (let c in votes) {
    let width = (votes[c] / max) * 100;
    html += `<div class="result-row"><b>${c}</b> - ${votes[c]} votes<div class="bar" style="width:${width}%"></div></div>`;
  }
  document.getElementById("results").innerHTML = html;
  document.getElementById("total").innerText = "Total Votes Cast: " + total;
}

function resetVotes() {
  if (confirm("Saare votes delete karne hain?")) {
    localStorage.clear();
    loadResults();
    alert("Reset done");
  }
}

loadResults();