//Get the button: 
//https://www.youtube.com/watch?v=nw7I1vfOzzw bu abimden baktım
const mybutton = document.getElementById("myBtn");

mybutton.addEventListener("click", () => {
    // When the user clicks on the button, scroll to the top of the document
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

});
// When the user scrolls down 0px from the top of the document, show the button
document.addEventListener("scroll", (e) => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }

})