const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// YOUR CODE HERE
const TOYS_URL = "http://localhost:3000/toys"

fetch(TOYS_URL)
  .then(function(res){
    return res.json()
  })
  .then(function(toys){
      toys.map(displayToys)
  })

  // {
  //   "id": 1,
  //   "name": "Woody",
  //   "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
  //   "likes": 5
  // }

function displayToys(toy){
  let toy_container = document.querySelector("#toy-collection")
  toy_container.innerHTML += `
    <div class="card" toy-id="${toy.id}">
      <h1>Toy Name: ${toy.name}</h1>
      <img class="toy-avatar" src="${toy.image}">
      <p>Toy Likes: ${toy.likes}</p>
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
