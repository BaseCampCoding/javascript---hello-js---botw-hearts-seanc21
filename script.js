const heartsContainer = document.querySelector("#hearts-container");
const controlsContainer = document.querySelector("#controls-container");
const hitButton = controlsContainer.querySelector("#hit-button");
const hitDamageInput = controlsContainer.querySelector("#hit-damage-input");

const healButton =  controlsContainer.querySelector("#heal-button");
const healAmountInput = controlsContainer.querySelector("#heal-amount-input");

const addHeartButton = controlsContainer.querySelector("#add-heart-container-button");

let health = 35;
let maxHealth = 40;

function randint(lo, hi) {
  return Math.floor(Math.random() * (hi - lo) + lo);
}

function updateHeartsDisplay() {
  let quartersToFill = health;
  for (const heart of heartsContainer.querySelectorAll(".heart")) {
    if (quartersToFill) {
      let quarters = Math.min(quartersToFill, 4);
      heart.dataset.quarters = quarters;
      quartersToFill -= quarters;
    } else {
      heart.dataset.quarters = 0;
    }
  }
}

hitButton.addEventListener("click", function () {
  let damage = Number(hitDamageInput.value);
  health = Math.max(0, health - damage);
  updateHeartsDisplay();
});

healButton.addEventListener("click", function() {
  let heal = Number(healAmountInput.value);
  health = Math.min(health + heal, maxHealth + 4);
  updateHeartsDisplay();
});

// addHeartButton.addEventListener("click", () => {
//   maxHealth += 4;
//   health = Math.max(health + 4, maxHealth);
//   updateHeartsDisplay();
// });