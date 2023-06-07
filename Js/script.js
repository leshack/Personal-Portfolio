// tooggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}


//scroll section
let section= document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        //activate navbar Links

        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

        });

        // active sections for animation on scroll
        sec.classList.add('show-animate');
    }
    // if you want to use animation that repeats on scroll use this
    else {
        sec.classList.remove('show-animate');

    }

  }); 
   

    //sticky header

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation projects on scroll
    // let testimonial-container = document.querySelector('testimonial-container');
    // testimonial-container.classList.toggle('show-animate', this.innerHeight + this.scrollY  >= document.scrollingElement.
    // scrollHeight);

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY  >= document.scrollingElement.
    scrollHeight);
}

//!-- Initialize Swiper -->
  
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      grabCursor:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
 