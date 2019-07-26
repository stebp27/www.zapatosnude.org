document.addEventListener("DOMContentLoaded", function(){
// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modal-img");
var imgs = document.getElementsByTagName("img");
for(let img of imgs)
{
    console.log(img.src);
  img.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
)}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
})