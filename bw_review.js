"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Anthony Arias
   Date:   3.12.19
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
//this runs the init function
window.onload = init;

//this defines the event listeners used in the page
function init() {
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < stars.length; i++) {
            //changes cursor to a pointer
            stars[i].style.cursor = "pointer";
            //  runs the lightStars() function in response to the mouseenter event occurring over each star image.
            stars[i].addEventListener("mouseenter", lightStars);
      }
      //runs the updateCount() function in response to the keyup event
      document.getElementById("comment").addEventListener("keyup", updateCount);
}
//The purpose of this function is to color a star when the user moves the mouse pointer over a star image in order to reflect the user’s rating of the book
function lightStars(e) {
      //stores the rating value of each star image in the img element’s alt attribute.
      var starNumber = e.target.alt;
      var stars = document.querySelectorAll("span#stars img");

      for (var i = 0; i < starNumber; i++) {
            //this lights every star in the page
            stars[i].src = "bw_star2.png";
      }
      for (var i = starNumber; i < 5; i++) {
            //this unlights every star in the page
            stars[i].src = "bw_star.png";
      }
      //put a number in the input box when you hover over the stars
      document.getElementById("rating").value = starNumber + " star(s)";
      //the lit stars are unlit when you move the mouse off the stars
      stars[i].addEventListener("mouseleave", turnOffStars);
      stars[i].addEventListener("mouseleave", function () {
            document.removeEventListener("mouseleave", turnOffStars);
      });
}

function turnOffStars(e) {

}

function updateCount() {

}

function countCharacters(textStr) {

}

/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}