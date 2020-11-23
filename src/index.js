let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(data => console.log(data))
});

function createAndAppendToy(object){
  let toyCollection = document.getElementById("toy-collection");
  let toyCard = document.createElement("div");
  toyCard.classList.add("card");
  toyCard.innerText += object.name;
};