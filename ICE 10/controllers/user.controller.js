/**
 * Controller for handling user views
 */
const userModel=('../models/user');
function loaddata(req,res){
    userModel.User.find({}).then(function(userList)
    
    {
        res.render('',{pageTitle:"INFT:2202: USER LIST",users:userList})
        users=userList
    })
}
// Function to render user view
function userView(req, res) {
    //  render the user view here
    res.render('../pages/user',{
        pageTitle:"INFT 2202- UserView"
    }); 
}

// Exporting the function so it can be used in other files
module.exports = {
    userView: userView
};
