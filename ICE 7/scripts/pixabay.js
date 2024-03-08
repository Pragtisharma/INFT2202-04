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
        // card body 
        // card title
        // image
        // card text

};

/**
 * getPictures
 * retrieves the pictures from Pixabay API
 */
const getPictures = () => 
{
    // use fetch to get the pictures from the API
    // handle error(s) with .catch()
};

makePosts();
