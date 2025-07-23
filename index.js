let homeScore = 0;
let guestScore = 0;
let homeScorePara = document.getElementById("homeScoreP");
let guestScorePara = document.getElementById("guestScoreP");

function incrementHomeScore(score) {
  homeScore += score;
  homeScorePara.textContent = homeScore;
}

function incrementGuestScore(score) {
  guestScore += score;
  guestScorePara.textContent = guestScore;
}

function resetScore(option = 0) {
  switch (option) {
    case 1:
      homeScore = 0;
      homeScorePara.textContent = homeScore;
      break;
    case 2:
      guestScore = 0;
      guestScorePara.textContent = guestScore;
      break;
    default:
      homeScore = 0;
      guestScore = 0;
      homeScorePara.textContent = homeScore;
      guestScorePara.textContent = guestScore;
  }
}
