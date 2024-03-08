/**
 * PRAGTI SHARMA
 * 07-03-2024
 */
console.log('pixabay.js loaded');

// API Key for Pixabay
const PIXABAY_API_KEY = '42757423-581cc2252fdd93337af871b5a'; // normally we would load a key through the .env file
// URL for Pixbay request
const PIXABAY_URL = 'https://pixabay.com/api/?key=<42757423-581cc2252fdd93337af871b5a>';
// Constant for image count
const IMAGE_COUNT = 30;

/**
 * makePosts
 * Creates posts for pictures.
 */
const makePosts = () => 
{
    // make HTML elements for posts using jQuery, same number as images retrieving
        // use bootstrap cards and append to
        // i.e. https://getbootstrap.com/docs/5.2/components/card/#about
        // create card
        const card = $(<div class="card" style="width: 18rem;"></div>);
        // card body 
       const body=$( <div class="card-body"></div>);
        // card title
       const title=$( <h5 class="card-title">Card title</h5>);
        // image
        const image=$(<img src="..." class="card-img-top" alt="..."></img>);
        // card text
       const text=( <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>);

};

/**
 * getPictures
 * retrieves the pictures from Pixabay API
 */
 // Use fetch to get the pictures from the API
 fetch(PIXABAY_URL)
 .then(response => response.json())
 .then(data => {
     // Process the data as needed
     console.log(data);
 })
 .catch(error => {
     // Handle errors
     console.error('Error fetching pictures:', error);
 });


 getPictures();
makePosts();
