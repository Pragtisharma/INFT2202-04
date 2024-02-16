console.log('xhr_script.js loaded')

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// instantiate the XMLHttpRequest object with the new keyword
const xhr = new XMLHttpRequest();


// create a callback function to fire when the onreadystatechange happens
xhr.onreadystatechange = function () {
    // check that the state is done
    
    if (xhr.readyState === 4 && this.status == 200) {
            // turn into json
            let responseData = JSON.parse(xhr.responseText);
            // console log to see what we have
            console.log(responseData);
            // update the 1st image
            document.getElementById('photo1').src = responseData[0].url;
            // update the 1st figcaption
            document.getElementById('fakeImg_1').getElementsByTagName('figcaption')[0].innerText = responseData[0].title;
            // update the 2nd image
            document.getElementById('photo2').src = responseData[1].url;

            // update the 2nd figcaption
            document.getElementById('fakeImg_2').getElementsByTagName('figcaption')[0].innerText = responseData[1].title;
            
        } else {
            // send error message
            console.error('Error:', xhr.status, xhr.statusText);
        }
    }


// use the .open() method to configure the object
xhr.open('GET', url_photos, true);
// add datatype to header
 xhr.setRequestHeader('Content-type', 'application/json');
// use the .send() method to send the request
xhr.send();