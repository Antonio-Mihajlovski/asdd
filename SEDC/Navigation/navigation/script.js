const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  event.stopPropagation();
});

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function() {
  const query = searchInput.value;

  // Save the search query to local storage
  localStorage.setItem('searchQuery', query);

  // Redirect to the search results page
  window.location.href = '/search-results.html';
});

// Retrieve the search query from local storage
const searchQuery = localStorage.getItem('searchQuery');

if (searchQuery) {
  // Display the search query on the page
  const searchResultsContainer = document.getElementById('search-results');
  searchResultsContainer.textContent = `Showing results for: ${searchQuery}`;

  // Perform further operations like fetching and displaying the search results
  // You can use AJAX requests, manipulate the DOM, or use any other method to display the search results dynamically
}


console.log('conected')
const cartButton = document.querySelectorAll('.cartButton') 
const product = document.getElementsByClassName('product')[0]

cartButton.forEach(button => {
    button.addEventListener('click', (e) => {
        const elementSelected = []
        elementSelected.push(e.target.parentElement.innerText)
        console.log(elementSelected)
    })
    
});

product.addEventListener('click', (e) => {
    
    const srcOfPicture = e.srcElement

    console.log(srcOfPicture)

})



fetch('products.json')
  .then(response => response.json())
  .then(data => {

    const products = data.products;
    const productContainer = document.getElementById('product-container');

    products.forEach(product => {
      const productCard = createProductCard(product);
      productContainer.appendChild(productCard);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });


function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product';
  
  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.name;
  card.appendChild(image);
  
  const name = document.createElement('h3');
  name.textContent = product.name;
  card.appendChild(name);
  
  const description = document.createElement('p');
  description.textContent = product.description;
  card.appendChild(description);
  
  const price = document.createElement('span');
  price.className = 'price';
  price.textContent = '$' + product.price;
  card.appendChild(price);
  
  const buyButton = document.createElement('a');
  buyButton.href = product.link;
  buyButton.className = 'buy-btn';
  buyButton.textContent = 'Buy Now';
  card.appendChild(buyButton);
  
  return card;
}


const inputedSize = document.getElementById('inputGroupSelect01')

const addToCart = document.getElementById('addToCart')
console.log(addToCart)

addToCart.addEventListener('click', () => {
    const value = inputedSize.value
    const size = inputedSize.options[inputedSize.selectedIndex].innerHTML
    console.log(size)

})



