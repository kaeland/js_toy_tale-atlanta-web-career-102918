const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// YOUR CODE HERE
const TOYS_URL = "http://localhost:3000/toys"
document.addEventListener("DOMContentLoaded", initPage)

function initPage(){
    getToys()
    toyHandler()
    // likeHandler()
}

function getToys(){
  fetch(TOYS_URL)
    .then(function(res){
      return res.json()
    })
    .then(function(toys){
        toys.map(displayToys)
    })
}

function displayToys(toy){
  let toy_container = document.querySelector("#toy-collection")
  toy_container.innerHTML += `
    <div class="card" toy-id="${toy.id}">
      <h1>Toy Name: ${toy.name}</h1>
      <img class="toy-avatar" src="${toy.image}">
      <p>Toy Likes: ${toy.likes}</p>
      <button class="like-btn">Like <3</button>
    </div>`
}

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})

// OR HERE!
function toyHandler(){
  const addToyForm = document.querySelector(".add-toy-form")
    addToyForm.addEventListener('submit', submitToy)
}

function submitToy(event) {
  event.preventDefault()
  let name = event.target.elements.name.value
  let image = event.target.elements.image.value

  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: name,
        image: image,
        likes: 0
    })
  }

  fetch(TOYS_URL, options)
  .then(function(response) {
    return response.json()
  })
  .then(displayToys)
}
