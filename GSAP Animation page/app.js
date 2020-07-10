const button = document.querySelector(".button");
const quotes = document.querySelector(".quotes");
const side = document.querySelector(".side-img img");

const A = new TimelineLite({ paused: true, reversed: true });

A.to(".main-image img", 1, {
  width: "65%",
  ease: Power2.easeOut,
})
  .to(
    ".head",
    1,
    {
      color: "black",
      ease: Power2.easeOut,
    },
    "-=0.5"
  )
  .fromTo(
    ".quotes",
    1,
    {
      opacity: 0,
      y: -100,
      ease: Power2.easeOut,
    },
    {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut,
      done: () => {
        quotes.style.pointerEvents = "auto";
        console.log("done");
      },
    },
    "-=1"
  )
  .fromTo(
    ".side-img img",
    1,
    {
      opacity: 0,
      x: 50,
      ease: Power2.easeOut,
    },
    {
      opacity: 1,
      x: 0,
      ease: Power2.easeOut,
      done: () => {
        quotes.style.pointerEvents = "auto";
        console.log("done");
      },
    }
  );

button.addEventListener("click", (e) => {
  if (A.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }

  back(A);
});

function back(B) {
  B.reversed() ? B.play() : B.reverse();
}
