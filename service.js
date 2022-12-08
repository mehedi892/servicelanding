//navbar toggle

const bars = document.getElementById('bars');
const serviceLinkDiv = document.getElementById('serviceLinkDiv');

bars.addEventListener('click',()=>{
    serviceLinkDiv.classList.toggle('show');
});



  $(document).ready(function(){
    $('.carousel-inner').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
      });
  });

  // scroll down to sticky nav
  const serviceNav = document.getElementById('serviceNav');
  const scrollTotopbutton = document.getElementById('scrollTotopbutton');
  window.addEventListener('scroll',()=>{
    if(window.pageYOffset >= 190){
        serviceNav.classList.add('navbar-fixed');
        scrollTotopbutton.classList.add('show');
    }else if(window.pageYOffset <= 190){
        serviceNav.classList.remove('navbar-fixed');
        scrollTotopbutton.classList.remove('show');
    }
  });

  scrollTotopbutton.addEventListener('click',()=>{
    document.getElementById('home').scrollIntoView();
  });

