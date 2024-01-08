function showText(imageNumber) {
  const allRules = document.getElementsByClassName("rules");
  switch (imageNumber) {
    case 1:
      const boggleText = document.getElementById("boggle-rules");
      const boggleDisplay = boggleText.style.display;
      for (let i = 0; i < allRules.length; i++) {
        allRules[i].style.display = "none";
      }
      if (boggleDisplay === "block") {
          boggleText.style.display = "none"
        } else {
        boggleText.style.display = "block";
        }
      break;
    case 2:
      const fishingText = document.getElementById("fishing-rules");
      const fishingDisplay = fishingText.style.display;
      for (let i = 0; i < allRules.length; i++) {
        allRules[i].style.display = "none";
      }
      if (fishingDisplay === "block") {
        fishingText.style.display = "none"
      } else {
      fishingText.style.display = "block";
      }
      break;
    case 3:
      const twirlingText = document.getElementById("twirling-rules");
      const twirlingDisplay = twirlingText.style.display;
      for (let i = 0; i < allRules.length; i++) {
        allRules[i].style.display = "none";
      }
      if (twirlingDisplay === "block") {
        twirlingText.style.display = "none"
      } else {
      twirlingText.style.display = "block";
      }
      break;
    case 4:
      const boardText = document.getElementById("board-rules");
      const boardDisplay = boardText.style.display;
      for (let i = 0; i < allRules.length; i++) {
        allRules[i].style.display = "none";
      }
      if (boardDisplay === "block") {
        boardText.style.display = "none"
      } else {
      boardText.style.display = "block";
      }
      break;
    case 5:
      const skeeballText = document.getElementById("skeeball-rules");
      const skeeballDisplay = skeeballText.style.display;
      for (let i = 0; i < allRules.length; i++) {
        allRules[i].style.display = "none";
      }
      if (skeeballDisplay === "block") {
        skeeballText.style.display = "none"
      } else {
      skeeballText.style.display = "block";
      }
      break;
    case 6:
      const spinText = document.getElementById("spin-rules");
      const spinDisplay = spinText.style.display;
      for (let i = 0; i < allRules.length; i++) {
        allRules[i].style.display = "none";
      }
      if (spinDisplay === "block") {
        spinText.style.display = "none"
      } else {
        spinText.style.display = "block";
      }
      break;
  }
}