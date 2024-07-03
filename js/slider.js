let slideIndex = 1;
let slideIndex2 = 1;
showSlides(slideIndex, "mySlides");
showSlides(slideIndex, "mySlides2");

// Next/previous controls
function plusSlides(n, b) {
    if(b == "mySlides"){
  showSlides(slideIndex += n, b);
}else{
  showSlides(slideIndex2 += n, b);
}
}

// Thumbnail image controls
function currentSlide(n, b) {
    if(b == "mySlides"){
        showSlides(slideIndex = n, b);
    }else{
        showSlides(slideIndex2 = n, b);
    }
}

function showSlides(n, b) {
  let i;
  let slides = document.getElementsByClassName(b);
  let dots = document.getElementsByClassName((b == "mySlides") ? "dot" : "dot2");
  if(b == "mySlides"){
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
   }else{
    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2-1].style.display = "block";
    dots[slideIndex2-1].className += " active";
   }
}

setInterval(()=>{
    plusSlides(1, "mySlides")
    plusSlides(1, "mySlides2")
}, 2500)