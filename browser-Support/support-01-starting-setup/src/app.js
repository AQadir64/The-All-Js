// import "core-js/features/promise";

const button = document.querySelector("button");
const text = document.querySelector("p").textContent;
button.addEventListener("click", () => {
  const promise = new Promise();
  console.log(promise);
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log(text);
      })
      .catch(() => {
        console.log("SOME ERROR OCCURS ----:::::");
      });
  } else {
    alert("FEATURE DOESNOT SUPPORT IN YOUR BROWSER VERSION");
  }
});
