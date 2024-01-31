/*
Pragti sharma
January 30,2024
ICE-3 PART 2
*/
conxole.log("selector.js loaded");
$(function(){
    console.log("DOM is ready");
});
/**
 * 
 * @param {*} element 
 */
function highlight(element){
    element.css('background color',"#fcf30040");
}
function cssSelector(){
    //updating by tag (<p></p>)
    $('p').css('background color',"#2a9d8f");
    //updating by class(class="red box")
    $('.red-box').css('background-color',"2a9d8f");
    //updating by id
    $('#list').css('font-size','40px');
    $('li:even').css('background-color',"#fcf30040") ;
    $('li:odd').css('background-color',"#fcf30040") ;

}
function tranversingTheDOM(){
    //$('#LIST').prev().css('background-color',"2a9d8f")
    //$('#LIST').next().css('background-color',"2a9d8f")
    //$('#LIST').prev().next().css('background-color',"2a9d8f")
    $('#LIST').find('li').css('background-color',"2a9d8f");
    //transverse up 1 level
    $('#LIST').parent('div').css('font-size','24px');
    //transverse all the way up of the body
    $('#LIST').parents('body').css('font-size','24px');

}
function filtering(){
   console.log( $('#LIST').find('li').filter(':even'));
    $('#LIST').find('li').filter(function (i){
        return i%2 ==0;
    }).css('background-color',"red");

}
//cssSelectors();
//tranversingTheDOM();
filtering();