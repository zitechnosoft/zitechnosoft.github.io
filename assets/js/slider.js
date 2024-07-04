let slideIndex = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;
let slideIndex4 = 1;
showSlides(slideIndex, "mySlides");
showSlides(slideIndex, "mySlides2");
// showSlides(slideIndex, "mySlides3");
// showSlides(slideIndex, "mySlides4");

// Next/previous controls
function plusSlides(n, b) {
    if(b == "mySlides"){
  showSlides(slideIndex += n, b);
}else if(b == "mySlides2"){
  showSlides(slideIndex2 += n, b);
}else if(b == "mySlides3"){
    showSlides(slideIndex3 += n, b);
}else if(b == "mySlides4"){
showSlides(slideIndex4 += n, b);
}
}

// Thumbnail image controls
function currentSlide(n, b) {
    if(b == "mySlides"){
        showSlides(slideIndex = n, b);
    }else if(b == "mySlides2"){
    showSlides(slideIndex2 = n, b);
    }else if(b == "mySlides3"){
        showSlides(slideIndex3 = n, b);
    }else if(b == "mySlides4"){
    showSlides(slideIndex4 = n, b);
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
        dots[i].className = dots[i].className.replace(" activeDot", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " activeDot";
   }else if(b == "mySlides2"){
    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "");
    }
    slides[slideIndex2-1].style.display = "block";
    dots[slideIndex2-1].className += " activeDot";
   }
   else if(b == "mySlides3"){
    if (n > slides.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "");
    }
    slides[slideIndex3-1].style.display = "block";
    dots[slideIndex3-1].className += " activeDot";
   }
   else if(b == "mySlides4"){
    if (n > slides.length) {slideIndex4 = 1}
    if (n < 1) {slideIndex4 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeDot", "");
    }
    slides[slideIndex4-1].style.display = "block";
    dots[slideIndex4-1].className += " activeDot";
   }
}

setInterval(()=>{
    plusSlides(1, "mySlides")
    plusSlides(1, "mySlides2")
    // plusSlides(1, "mySlides3")
    // plusSlides(1, "mySlides4")
}, 5000)