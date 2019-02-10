  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i=0; i < slides.length ; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");

  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.navigation-mobile').toggleClass('navigation-mobile_active');
  });



var slideWIndex = 1;
showSlidesW(slideWIndex);

function plusWSliders(nw) {
  showSlidesW(slideWIndex += nw);
}

function currentWSlide(nw) {
  showSlidesW(slideWIndex = nw);
}

function showSlidesW(nw) {
  var iw;
  var slidesW = document.getElementsByClassName('mysliders-w');
  var dotWs = document.getElementsByClassName('dot-w');

  if (nw > slidesW.length) {
    slideWIndex = 1;
  }
  if (nw < 1) {
    slideWIndex = slidesW.length;
  }

  for (iw = 0; iw < slidesW.length; iw++) {
    slidesW[iw].style.display = "none";
  }

  for (iw = 0; iw < dotWs.length; iw++) {
    dotWs[iw].className = dotWs[iw].className.replace("active-w", "");
  }

  slidesW[slideWIndex-1].style.display = "block";
  dotWs[slideWIndex-1].className += " active-w";
}
