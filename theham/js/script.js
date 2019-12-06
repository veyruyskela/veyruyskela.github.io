// This part of code responds for
// dynamically displaying section depending on which tab has been clicked in section `Our Services`

let serviceTabs = document.querySelectorAll(".service");
let blocksToShow = document.querySelectorAll(".services-box-bottom");

for ( let i = 0; i < serviceTabs.length; i++ ) {
  serviceTabs[i].addEventListener("click", function(event){
    for ( let j = 0; j < serviceTabs.length; j++ ) {
      serviceTabs[j].classList.remove("service-active");
      blocksToShow[j].style.display = "none";
    }
    event.target.classList.add("service-active");
    if ( blocksToShow[i].getAttribute("data-service") === event.target.getAttribute("data-service") ) {
      blocksToShow[i].style.display = "flex";
    }
  });
}

let categoryNames = document.querySelectorAll(".works-item");
let workToShow = document.querySelectorAll(".grid-item");
let loadMoreButton = document.querySelector("#loadMore");


for ( let i = 0; i < categoryNames.length; i++ ) {
  categoryNames[i].addEventListener("click", function() {
    for ( let j = 0; j < categoryNames.length; j++ ) {
      categoryNames[j].classList.remove("works-item-active");
    }
    event.target.classList.add("works-item-active");
  });
}

function showFirstTwelve() {
  for ( let i = 0; i < workToShow.length; i++ ) {
    workToShow[i].style.display = "none";
    for ( let j = 0; j < 12; j++ ) {
      workToShow[j].style.display = "block";
    }
  }
}

showFirstTwelve();

// This part is for sorting works by categories

function showFirstTwelve() {
  for ( let i = 0; i < workToShow.length; i++ ) {
    workToShow[i].style.display = "none";
    for ( let j = 0; j < 12; j++ ) {
      workToShow[j].style.display = "block";
    }
  }
}

showFirstTwelve();

for ( let i = 0; i < categoryNames.length; i++ ) {
  categoryNames[i].addEventListener("click", function(event) {
    for ( let j = 0; j < categoryNames.length; j++ ) {
      categoryNames[j].classList.remove("works-item-active");
    }
    event.target.classList.add("works-item-active");
    for (let k = 0; k < workToShow.length; k++) {
      workToShow[k].style.display = "none";
      if ( event.target.getAttribute("data-categoryName") === "all" ) {
        showFirstTwelve();
      } else if ( workToShow[k].getAttribute("data-categoryName") === event.target.getAttribute("data-categoryName") ) {
        workToShow[k].style.display = "block";
        loadMoreButton.style.display = "none";
      }
    }
  });
}

// This part is for loading additional `Our works` items
//let loadMoreButton = document.querySelector("#loadMore");

let startItem = 12;
let endItem = 23;

loadMoreButton.addEventListener("click", function(event) {
  for ( let i = startItem; i <= endItem; i++ ) {
    workToShow[i].style.display = "block";
  }
  startItem += 12;
  endItem += 12;
  if ( endItem > 35 ) {
    loadMoreButton.style.display = "none";
  }
});

// This part is for carousel
$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    initialSlide: 2
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: false,
    draggable: false,
    centerMode: true,
    centerPadding: '0px',
    initialSlide: 2,
  });
});