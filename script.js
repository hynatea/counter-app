let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

function decrement() {
  count = count - 1;
  countEl.innerText = count;
}

function reset() {
  count = 0;
  countEl.innerText = count;
}

function save() {
  let countStr = count + " - ";
  document.getElementById("saved-counts").textContent += countStr;
  let savedCount = count;
  reset();
  console.log("Saved counts : " + savedCount);
}
