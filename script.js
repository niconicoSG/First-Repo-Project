const openModalButtons = document.querySelectorAll("[data-modal-target]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((div) => {
  div.addEventListener("click", () => {
    const modal = document.querySelector(div.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

var textWrapper = document.querySelector(".articleThreeFour .letters");

function move() {
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<div class='letter'>$&</div>"
  );

  anime.timeline({ loop: false }).add({
    targets: ".letter",
    translateY: ["1rem", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  });
}

textWrapper.addEventListener("click", () => {
  move();
});

var textWrapper2 = document.querySelector(" .short");

function move2() {
  textWrapper2.innerHTML = textWrapper2.textContent.replace(
    /\S/g,
    "<div class='letter2'>$&</div>"
  );

  anime.timeline({ loop: false }).add({
    targets: ".letter2",
    translateY: ["1rem", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  });
}

textWrapper2.addEventListener("click", () => {
  move2();
});
