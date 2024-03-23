// Function to handle rendering /pages/home
exports.homeView = (req, res) => {
    res.render('home'); 
};

// Function to handle rendering /pages/about
exports.aboutView = (req, res) => {
    res.render('about'); 
};
//https://expressjs.com/en/guide/routing.html