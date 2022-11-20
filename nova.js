let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  var x = document.getElementsByClassName("tekst");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block"
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
  
}

//
let slideIndexx = 1;
showSlidess(slideIndexx);

// Next/previous controls
function plusSlidess(n) {
  showSlidess(slideIndexx += n);
}

// Thumbnail image controls
function currentSlidess(n) {
  showSlides(slideIndexx = n);
}



function showSlidess(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  var x = document.getElementsByClassName("tekst23");
  if (n > x.length) {slideIndexx = 1}
  if (n < 1) {slideIndexx = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexx-1].style.display = "block"
  if (n > slides.length) {slideIndexx = 1}
  if (n < 1) {slideIndexx = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndexx-1].style.display = "block";
  
}



// DONJI TEKST


let slideIndex2 = 1;
showDivs(slideIndex2)

function plusDivs(n) {
  showDivs(slideIndex2 += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("text2");
  if (n > x.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex2-1].style.display = "block";
}

// DONJI TEKST2

let slideIndex3 = 1;
showDivss(slideIndex3)

function plusDivss(n) {
  showDivss(slideIndex3 += n);
}

function showDivss(n) {
  var i;
  var x = document.getElementsByClassName("text3");
  if (n > x.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex3-1].style.display = "block";
  }



