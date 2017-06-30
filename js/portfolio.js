function seasonsList(){
	console.log("Winter\n\nWinter/Spring\n\nSpring\n\nSummer\n\nAutumn");
}

function seasons(season){
	switch(season){
		case "Winter":
			backC = "#f0f5fb";
			borderC = "#d2d2d2";
			submitC = "#a3cdff";
			hoverAni = "seasonPulseWinter";
		break;
		case "Winter/Spring":
			backC = "#e35e8d";
			backCGrad = "#a3cdff";
			borderC = "rgba(23,88,167,0.5)";
			submitC = "#87dd84";
			hoverAni = "seasonPulseWS";
		break;
		case "Spring":
			backC = "#012c71";
			backCGrad = "#95bfe7";
			borderC = "#c8fc0c";
			submitC = "#7ce800";
			hoverAni = "seasonPulseSpring";
		break;
		case "Summer":
			backC = "#95bfe7";
			backCGrad = "#fffa85";
			borderC = "#d2d2d2";
			submitC = "#55a50b";
			hoverAni = "seasonPulseSummer";
		break;
		case "Autumn":
			backC = "#fcd62b";
			backCGrad = "#c33333";
			borderC = "#4852db";
			submitC = "#d36f19";
			hoverAni = "seasonPulseAutumn";
		break;
	}
	contactButton = $('#contactButton');
	contactBox = $('#contactBox');
	if (season == "Spring"){
		contactButton.css({'background':backC,"border-top":"0.2vw solid "+borderC,"border-right":"0.2vw solid "+borderC,"color":"white"});
		contactBox.css({'background':'linear-gradient(to bottom,'+backC+','+backCGrad+')'});
		$('#profile').css({'background':'linear-gradient(to bottom,'+backC+','+backCGrad+')'});
	} else if(season == "Summer" || season == "Autumn" || season == "Winter/Spring"){
		contactButton.css({'background':backC,"border-top":"0.2vw solid "+borderC,"border-right":"0.2vw solid "+borderC,"color":"black"});
		contactBox.css({'background':'linear-gradient(to bottom,'+backC+','+backCGrad+')'});
		$('#profile').css({'background':'linear-gradient(to bottom,'+backC+','+backCGrad+')'});
	} else{
		contactButton.css({'background':backC,"border-top":"0.2vw solid "+borderC,"border-right":"0.2vw solid "+borderC,"color":"black"});
		contactBox.css({'background':backC});
		$('#profile').css({'background':backC});
	}
	if (window.innerHeight < window.innerWidth && window.innerWidth > 1000){
		console.log("desktop");
		$('#contactButton').hover(function() {
			$('#contactButton').css({"border-top":"0.2vw solid black","border-right":"0.2vw solid black"});
		}, function() {
			$('#contactButton').css({"border-top":"0.2vw solid "+borderC,"border-right":"0.2vw solid "+borderC});
		});
	}
	$('#contactSubmit').css({
		"background-color": submitC
	});
	$('#contactSubmit, #profile').hover(function() {
		$(this).css({
			"-webkit-animation": hoverAni+' 2s infinite',
			"animation": hoverAni+' 2s infinite',
			"-webkit-animation-timing-function": "ease-in-out",
			"animation-timing-function": "ease-in-out"
		});
	}, function() {
		$(this).css({
			"-webkit-animation": 'none',
			"animation": 'none'
		});
	});

	$('#themeName').html(season+" Theme");

	if (window.introTrigger == false){
		$('body').fadeIn(500, function() {
			window.introTrigger = true;
			// if (window.innerHeight < window.innerWidth){
			// 	// introText();
			// }
			console.clear();
			console.log("Welcome! I'm currently looking for work, and I'd love to hear from you about working on your project. \n \nFor some fun, I do have my Contact and Current Work sections styled in relation to the current annual season. Feel free to play around with the color schemes by executing: seasons('season') \n\nFor a list of the possible seasons you can execute: seasonsList()");
		});
	}

	return {"border":borderC};
}

function introText(){
	$('#bioIBox').animate({"height": "4vh","opacity": "1"},1800, "linear", function() { // 1800        total time: 45000
		$(this).animate({"height": "90vh"},38700, "linear", function() { // 38700
			$(this).animate({"height": "100.1vh"},4500, "linear", function(){ // 4500
				if (window.innerHeight < window.innerWidth && window.innerWidth > 1000){
					$('#contactButton').hover(function() {
						$(this).css({"border-top":"0.2vw solid white","border-right":"0.2vw solid white"});
					}, function() {
						$(this).css({"border-top":"0.2vw solid "+season.border,"border-right":"0.2vw solid "+season.border});
					});
				}
				$(".bioI").animate({"opacity": "0.05"}, 1000, "linear", function(){
					$('#skills').fadeIn(1000);
					$('#profile').addClass('profileActive');
				});
			});
		});
	});
}

function contactAnimate(activeMeasure, inactiveMeasure, viewSize){
	if ($('#contactButton').hasClass('contactActive')){
		contactBox.animate({"bottom": activeMeasure}, 500, function(){
			$('#contactButton').removeClass('contactActive');
			$('#bodyWrapper').not('#skills').off("click");
		});

	} else{
		contactBox.animate({"bottom": inactiveMeasure}, 500, function(){
			$('#contactButton').addClass('contactActive');
			

				$('#contactBox').not('#contactButton').click(function(event) {
					event.stopPropagation();
				});
			
		});
	}
}



//-----------------------------------------------------------------------------------------------------------------------------------------------------//
//////////////////////////////////////////////////////////////////   DOCUMENT READY   ///////////////////////////////////////////////////////////////////
//-----------------------------------------------------------------------------------------------------------------------------------------------------//


$(document).ready(function() {

	$('.js-lazyYT').lazyYT(); 

	date = new Date();
	month = date.getMonth();
	switch(month){
		case 0:
		seasonName = "Winter";
		break;
		case 1:
		seasonName = "Winter/Spring";
		break;
		case 2:
		seasonName = "Winter/Spring";
		break;
		case 3:
		seasonName = "Spring";
		break;
		case 4:
		seasonName = "Spring";
		break;
		case 5:
		seasonName = "Spring";
		break;
		case 6:
		seasonName = "Summer";
		break;
		case 7:
		seasonName = "Summer";
		break;
		case 8:
		seasonName = "Autumn";
		break;
		case 9:
		seasonName = "Autumn";
		break;
		case 10:
		seasonName = "Autumn";
		break;
		case 11:
		seasonName = "Winter";
		break;
	}
	window.introTrigger = false;
	season = seasons(seasonName);

	if (window.innerHeight > window.innerWidth){
		$('#contactButton').css({
			"border-top-width": '0.8vw',
			"border-right-width": '0.8vw'
		});
		$('.bio1').html('I am a self-motivated team-member who has a knack for troubleshooting anything; from electronics and appliances, to coding, applications and generalized life or social challenges.<br><br>My rich background gives me a prismatic viewpoint to see the world in many different aspects. As well, those experiences have given me a powerful toolkit that spans across multiple disciplines.<br><br>I can build a house from scratch, just as efficiently as I can build a computer or create a custom gourmet dish. I also enjoy analyzing designs, as it grants me the opportunity to use my many hats for scrutinizing a subject from multiple viewpoints.');
	} else if (window.innerWidth < 1000){
		$('#contactButton').css({
			"border-top-width": '0.5vw',
			"border-right-width": '0.5vw'
		});
		$('.bio1').html('I am a self-motivated team member who has a knack for');
	}else{
		$('.bio1').html('I am a self-motivated team member who has a knack for');
	}
    
//-----------------------------------------------------------------//   On Form Submit   //------------------------------------------------------------------//
    
    $('form').submit(function(){
        var fd= {
            'name':$('input[name=name]').val(),
            'email':$('input[name=email]').val(),
            'message':$('textarea[name=message]').val()
        };
        
        $.ajax({
            type: 'POST',
            url: 'sendMail.php',
            data: fd,
            dataType: 'json',
            encode: true
        })
        .done(function(data){
            if(data.y == 1){
                if (window.innerHeight > window.innerWidth){
                    contactAnimate("-79.3vh","0vh", 1);

                } else if (window.innerWidth < 1000){
                    contactAnimate("-51.1vw","0vw", 2);

                } else{
                    contactAnimate("-43.15vw","0vw", 3);

                }
                
                $('input[name=name]').val('');
                $('input[name=email]').val('');
                $('textarea[name=message]').val('');
                
                alert("Thanks for the message "+fd.name+"!\n\nJust to double-check, the email I have for you is:\n"+fd.email+"\n\nIf you'd like to speak with me sooner, please give me a call at (360)936-9768.");
            }else{
                alert("Sorry, something went wrong. Please try again, or you could message me directly at:\n\nj.hicklin87@yahoo.com");
            }
        })
        event.preventDefault();
    });



//----------------------------------------------------------//   On Window Resize   //------------------------------------------------------------//


	$(window).resize(function(event) {

		contactBox = $('#contactBox');

		if (window.innerHeight > window.innerWidth){
			contactBox.css('bottom', '-79.3vh');
			$('#contactButton').css({
				"border-top-width": '0.8vw',
				"border-right-width": '0.8vw'
			});
			$('#skills').css('height', '75vh');
			$('.bio1').html('I am a self-motivated team-member who has a knack for troubleshooting anything; from electronics and appliances, to coding, applications and generalized life or social challenges.<br><br>My rich background gives me a prismatic viewpoint to see the world in many different aspects. As well, those experiences have given me a powerful toolkit that spans across multiple disciplines.<br><br>I can build a house from scratch, just as efficiently as I can build a computer or create a custom gourmet dish. I also enjoy analyzing designs, as it grants me the opportunity to use my many hats for scrutinizing a subject from multiple viewpoints.');
		} else if (window.innerWidth < 1000){
			contactBox.css('bottom', '-51.1vw');
			$('#contactButton').css({
				"border-top-width": '0.5vw',
				"border-right-width": '0.5vw'
			});
			$('#skills').css('height', '83vh');
			$('.bio1').html('I am a self-motivated team member who has a knack for');
		} else{
			contactBox.css('bottom', '-43.15vw');
			$('#contactButton').css({
				"border-top-width": '0.2vw',
				"border-right-width": '0.2vw'
			});
			$('#skills').css('height', '83vh');
			$('.bio1').html('I am a self-motivated team member who has a knack for');
		}
	});



//----------------------------------------------------------//   STATBAR CLICK   //----------------------------------------------------------------------------//


	$(".statBox").click(function() {
	if ($(this).find('.statText:first').is(':visible')){ ///// if it's the second click...

		$(this).find('.statText:first').slideUp(500, function(){
			$(this).find('.sharpText:first').css({"opacity":"0"});
		});// close the content
	}
	else{  //-----------------------------// elsewise...

		$('.statText').slideUp(200, function(){
			$('.sharpText').css({"opacity":"0"});
		}); //  close the last open

		currentText = $(this).find('.statText:first');// select

		currentText.find('.sharpText:first').animate({"opacity":"1"}, 800);


		tester = currentText.closest('.statBox').find('.statChevron');
		console.log(tester);
		tester.hide(800);


		currentText.slideDown(500, function(){ //------------// open the current selection, and when done...

			if (window.innerHeight < window.innerWidth){
				if ($(this).offset().top > 400){ //--------// check current location of top-bar
					// console.log($('#skillsBox').scrollTop());

					currentPos = $('#skillsBox').scrollTop(); // current position in scrolling

					if ($(".aeSkillT").is(':visible')){
						currentPos = (currentPos - 150);
					}

					$('#skillsBox').animate({
			        	scrollTop: (currentPos + (currentText.height()*0.7) + 100)
			    	}, 500);
				}
			}
		});
	}
	});



//-------------------------------------------------------//   IMAGE CLICK   //----------------------------------------------------------//


	$('#profile').click(function(event) {
		if ($(this).hasClass('profileActive')){
			$('#skills').slideUp(800);
			$('#bioIBox').animate({"height": "0vh"}, {duration:1000, queue:false});
			if (window.innerHeight < window.innerWidth && window.innerWidth > 1000){
				$('#contactButton').hover(function() {
					$(this).css({"border-top":"0.2vw solid black","border-right":"0.2vw solid black"});
				}, function() {
					$(this).css({"border-top":"0.2vw solid "+season.border,"border-right":"0.2vw solid "+season.border});
				});
			}
			$(this).removeClass('profileActive');
		} else{
			$('.bioI').css('opacity', '1');
			$('#bioIBox').stop().animate({
				"height": "100.1vh",
				"opacity":"1"},
				1000, function() {
				$(".bioI").animate({"opacity": "0.05"}, 800, "swing", function(){
					$('#profile').addClass('profileActive');
				});
				if (window.innerHeight < window.innerWidth && window.innerWidth > 1000){
					$('#contactButton').hover(function() {
						$(this).css({"border-top":"0.2vw solid white","border-right":"0.2vw solid white"});
					}, function() {
						$(this).css({"border-top":"0.2vw solid "+season.border,"border-right":"0.2vw solid "+season.border});
					});
				}
				$('#skills').slideDown(1000);
			});
		}
	});


//------------------------------------------------------//   CONTACT CLICK   //----------------------------------------------------------------------//



	$('#contactButton').not('#bodyWrapper').click(function(event) {

		if (window.innerHeight > window.innerWidth){
			contactAnimate("-79.3vh","0vh", 1);

		} else if (window.innerWidth < 1000){
			contactAnimate("-51.1vw","0vw", 2);

		} else{
			contactAnimate("-43.15vw","0vw", 3);

		}		
	});

}); // document ready end