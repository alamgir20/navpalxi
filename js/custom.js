var myVar;
  function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }

  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });





  $(window).on('scroll', function(){
  	if($(window).scrollTop()){
  		$('nav').addClass('black');
  	}else{
  		$('nav').removeClass('black');
  	}
  })

  // counter





  $(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }

    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });

  	// owlcarousel
  $('.mytheme').owlCarousel({
      loop:true,
      autoplay:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })

  // isotope
  $(document).ready(function(){
           $('.portfolio-item').isotope(function(){
           itemSelector:'.item'
           });
           
           
           
           $('.portfolio-menu ul li').click(function(){
           $('.portfolio-menu ul li').removeClass('active');
           $(this).addClass('active');
           
           
           var selector = $(this).attr('data-filter');
           $('.portfolio-item').isotope({
           filter: selector
           })
           return false;
           });
           });




  