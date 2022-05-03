jQuery(document).ready(function($) {

	var baseUrl = $("#device").attr("data-url");
	var device = $("#device").attr("data-device");

	// if in viewport

	$.fn.isInViewport = function() {
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();
		var viewportTop = $(window).scrollTop() - 250;
		var viewportBottom = viewportTop + $(window).height();
		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	// define easeInOutQuint

	$.easing.jswing = $.easing.swing;
	$.extend($.easing, {
		easeInOutQuint: function(x, t, b, c, d) {
			if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
			return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
		}
	});

	// wow

	new WOW().init();

	//

	function openPopup(target) {
	    $("body").addClass("overflow");
        $("#popup-"+target).show();
        setTimeout(function(){
            $("#popup-"+target).addClass("show");
        }, 50);
    }

    function closePopup(target) {
        $("body").removeClass("overflow");
        $("#popup-"+target).removeClass("show");
        setTimeout(function(){
            $("#popup-"+target).hide();
		}, 300);
		if (target == "contact") {
			setTimeout(function(){
				$("#contact-content").removeClass("go-down");
				$("#contact-thanks").addClass("go-down");
				$("#form-wrapper").find("label").removeClass("go-up");
			}, 1000);
		}
		if (target == "video") {
			setTimeout(function(){
				$("#yt-iframe").attr("src", "");
			}, 1000);
		}
		if (target == "team") {
			history.pushState("member", null, baseUrl + "/company/");
		}
	}

	$(".open-popup").click(function(){
		var target = $(this).attr("data-target");
		openPopup(target);
	})

	$("body").on("click", ".close-popup" ,function(){
		var target = $(this).attr("data-target");
		closePopup(target);
	})

	//

	if ($("#hero-anim").length>0) {
		if (device == "comp") {
			var heroAnimParams = ({
				container: document.getElementById('hero-anim'),
				renderer: 'svg',
				loop: false,
				autoplay: false,
				path: baseUrl + '/wp-content/themes/aggrx startex llc/anims/hero.json'
			})
		} else {
			var heroAnimParams = ({
				container: document.getElementById('hero-anim'),
				renderer: 'svg',
				loop: false,
				autoplay: false,
				path: baseUrl + '/wp-content/themes/aggrx startex llc/anims/hero-mobile.json'
			})
		}
		var heroAnim = lottie.loadAnimation(heroAnimParams);
		heroAnim.play();
	} 

	//

	$window = $(window);
	var windowHeight = $window.height();

	//

	if ($("#point-1-anim").length > 0) {
		var pointOne = $("#point-1-anim");
		var pointOnePos = pointOne.offset().top-windowHeight;
	}

	if ($("#point-2-anim").length > 0) {
		var pointTwo = $("#point-2-anim");
		var pointTwoPos = pointTwo.offset().top-windowHeight;
	}

	if ($("#point-3-anim").length > 0) {
		var pointThree = $("#point-3-anim");
		var pointThreePos = pointThree.offset().top-windowHeight;
	}
	
	//
	if ($("#features").length > 0) {
		var features = $("#features");
		var featuresPos = features.offset().top-windowHeight;
	}

	if ($("#f-0-image").length > 0) {
		var featureOneImage = $("#f-0-image");
		var featureOneImagePos = featureOneImage.offset().top-windowHeight;
	}

	if ($("#f-0-text").length > 0) {
		var featureOneText = $("#f-0-text");
		var featureOneTextPos = featureOneText.offset().top-windowHeight;
	}

	if ($("#f-1-image").length > 0) {
		var featureTwoImage = $("#f-1-image");
		var featureTwoImagePos = featureTwoImage.offset().top-windowHeight;
	}

	if ($("#f-1-text").length > 0) {
		var featureTwoText = $("#f-1-text");
		var featureTwoTextPos = featureTwoText.offset().top-windowHeight;
	}
	
	if ($("#f-2-image").length > 0) {
		var featureThreeImage = $("#f-2-image");
		var featureThreeImagePos = featureThreeImage.offset().top-windowHeight;
	}
	
	if ($("#f-2-text").length > 0) {
		var featureThreeText = $("#f-2-text");
		var featureThreeTextPos = featureThreeText.offset().top-windowHeight;
	}
	
	if ($("#f-3-image").length > 0) {
		var featureFourImage = $("#f-3-image");
		var featureFourImagePos = featureFourImage.offset().top-windowHeight;
	}
	
	if ($("#f-3-text").length > 0) {
		var featureFourText = $("#f-3-text");
		var featureFourTextPos = featureFourText.offset().top-windowHeight;
	}
	
	//
	if ($("#sit-wrapper").length > 0) {
		var sit = $("#sit-wrapper");
		var sitPos = sit.offset().top-windowHeight;
	}
	
	//
	$window.on('resize', function(){
		windowHeight = $window.height();
		//
		if (pointOne){
			pointOnePos = pointOne.offset().top-windowHeight;
		}
		if (pointTwo){
			pointTwoPos = pointTwo.offset().top-windowHeight;
		}
		if (pointThree){
			pointThreePos = pointThree.offset().top-windowHeight;
		}
		//
		if (features){
			featuresPos = features.offset().top-windowHeight;
		}
		if (featureOneImage){
			featureOneImagePos = featureOneImage.offset().top-windowHeight;
		}
		if (featureTwoImage){
			featureTwoImagePos = featureTwoImage.offset().top-windowHeight;
		}
		if (featureThreeImage){
			featureThreeImagePos = featureThreeImage.offset().top-windowHeight;
		}
		if (featureFourImage){
			featureFourImagePos = featureFourImage.offset().top-windowHeight;
		}
		//
		if (sit){
			sitPos = sit.offset().top-windowHeight;
		}
	});

	//
	if (device == "comp") {
		if ($("#point-1-anim").length>0) {
			var pointOneAnimParams = ({
				container: document.getElementById('point-1-anim'),
				renderer: 'svg',
				loop: false,
				autoplay: false,
				path: baseUrl + '/wp-content/themes/aggrx startex llc/anims/point1.json'
			})
		}
	} else {
		if ($("#point-1-anim").length>0) {
			var pointOneAnimParams = ({
				container: document.getElementById('point-1-anim'),
				renderer: 'svg',
				loop: false,
				autoplay: false,
				path: baseUrl + '/wp-content/themes/aggrx startex llc/anims/point1-mobile.json'
			})
		}
	}
	
	if (pointOneAnimParams) {
		var pointOneAnim = lottie.loadAnimation(pointOneAnimParams);
		var pointOneAnimFlag = true;
	}
	
	if (device == "comp") {
		if ($("#point-2-anim").length>0) {
			var pointTwoAnimParams = ({
				container: document.getElementById('point-2-anim'),
				renderer: 'svg',
				loop: false,
				autoplay: false,
				path: baseUrl + '/wp-content/themes/aggrx startex llc/anims/point2.json'
			})
		}
	} else {
		if ($("#point-2-anim").length>0) {
			var pointTwoAnimParams = ({
				container: document.getElementById('point-2-anim'),
				renderer: 'svg',
				loop: false,
				autoplay: false,
				path: baseUrl + '/wp-content/themes/aggrx startex llc/anims/point2-mobile.json'
			})
		}
	}
	
	if (pointTwoAnimParams) {
		var pointTwoAnim = lottie.loadAnimation(pointTwoAnimParams);
		var pointTwoAnimFlag = true;
	}

	if (device == "comp") {
		if ($("#point-3-anim").length>0) {
			var pointThreeAnimParams = ({
				container: document.getElementById('point-3-anim'),
				renderer: 'svg',
				loop: false,
				autoplay: false,
				path: baseUrl + '/wp-content/themes/aggrx startex llc/anims/point3.json'
			})
		}
	} else {
		if ($("#point-3-anim").length>0) {
			var pointThreeAnimParams = ({
				container: document.getElementById('point-3-anim'),
				renderer: 'svg',
				loop: false,
				autoplay: false,
				path: baseUrl + '/wp-content/themes/aggrx startex llc/anims/point3-mobile.json'
			})
		}
	}

	if (pointThreeAnimParams) {
		var pointThreeAnim = lottie.loadAnimation(pointThreeAnimParams);
		var pointThreeAnimFlag = true;
	}

	//

	$window.scroll(function () {	
		var h = $window.height();
		var y = $(this).scrollTop();
		//
		if (y > 1) {
			$("#header").addClass("go-up");
		} else {
			$("#header").removeClass("go-up");
		}
		if ($("#hero").length>0) {
			if (y > 130) {
				if (device == "comp") {
					$("#hero").addClass("hide");
					$("#hero-anim").addClass("hide");
				}	
			} else {
				if (device == "comp") {
					$("#hero").removeClass("hide");
					$("#hero-anim").removeClass("hide");
				}
			}
		}
		//
		if (device == "comp") {
			if (pointOneAnim && pointTwoAnim && pointThreeAnim) {
				if (y >= pointOnePos + 200) {
					if (pointOneAnimFlag == true) {
						pointOneAnim.setDirection(1);
						pointOneAnim.setSpeed(1);
						pointOneAnim.play();
						pointOneAnimFlag = false;
					}
				} else {
					pointOneAnim.setDirection(-1);
					pointOneAnim.setSpeed(3);
					pointOneAnim.play();
					pointOneAnimFlag = true;
					pointTwoAnim.setDirection(-1);
					pointTwoAnim.setSpeed(3);
					pointTwoAnim.play();
					pointTwoAnimFlag = true;
					pointThreeAnim.setDirection(-1);
					pointThreeAnim.setSpeed(3);
					pointThreeAnim.play();
					pointThreeAnimFlag = true;
				}
				if (y >= pointTwoPos + 200) {
					if (pointTwoAnimFlag == true) {
						pointTwoAnim.setDirection(1);
						pointTwoAnim.setSpeed(1);
						pointTwoAnim.play();
						pointTwoAnimFlag = false;
					}
				}
				if (y >= pointThreePos + 200) {
					if (pointThreeAnimFlag == true) {
						pointThreeAnim.setDirection(1);
						pointThreeAnim.setSpeed(1);
						pointThreeAnim.play();
						pointThreeAnimFlag = false;
					}
				}
			}
		} else {
			if (pointOneAnim && pointTwoAnim && pointThreeAnim) {
				if (y >= pointOnePos) {
					if (pointOneAnimFlag == true) {
						pointOneAnim.setDirection(1);
						pointOneAnim.setSpeed(1);
						pointOneAnim.play();
						pointOneAnimFlag = false;
					}
				} else {
					pointOneAnim.setDirection(-1);
					pointOneAnim.setSpeed(3);
					pointOneAnim.play();
					pointOneAnimFlag = true;
					pointTwoAnim.setDirection(-1);
					pointTwoAnim.setSpeed(3);
					pointTwoAnim.play();
					pointTwoAnimFlag = true;
					pointThreeAnim.setDirection(-1);
					pointThreeAnim.setSpeed(3);
					pointThreeAnim.play();
					pointThreeAnimFlag = true;
				}
			}
		}
		//
		//if (featuresPos) {
		if (0) {
			if (y >= featuresPos) {
				$("#content-wrapper").addClass("wide");
			} else {
				$("#content-wrapper").removeClass("wide");
			}
		}
		if (featureOneImage) {
			if (y >= featureOneImagePos + 400) {
				featureOneImage.addClass("to-place");
			} else {
				featureOneImage.removeClass("to-place");
				featureOneText.removeClass("to-place");
				featureTwoImage.removeClass("to-place");
				featureTwoText.removeClass("to-place");
				featureThreeImage.removeClass("to-place");
				featureThreeText.removeClass("to-place");
				featureFourImage.removeClass("to-place");
				featureFourText.removeClass("to-place");
			}
			if (y >= featureOneTextPos + 400) {
				featureOneText.addClass("to-place");
			}
			if (y >= featureTwoImagePos + 400) {
				featureTwoImage.addClass("to-place");
			}
			if (y >= featureTwoTextPos + 400) {
				featureTwoText.addClass("to-place");
			}
			if (y >= featureThreeImagePos + 400) {
				featureThreeImage.addClass("to-place");
			}
			if (y >= featureThreeTextPos + 400) {
				featureThreeText.addClass("to-place");
			}
			if (y >= featureFourImagePos + 400) {
				featureFourImage.addClass("to-place");
			}
			if (y >= featureFourTextPos + 400) {
				featureFourText.addClass("to-place");
			}
		}
		//
		if (sitPos) {
			if (y >= sitPos + 400) {
				sit.addClass("active");
			}
		}
		//
		if ($("#technology-phone").length>0) {
			if (y > 400) {
				$(".h-line").addClass("show");
				setTimeout(function(){
					$(".v-line").addClass("show");
				}, 1000);
			}
		}
	});

	if ($("#svg-road").length>0) {
		const vivusRoad = new Vivus('svg-road', {start: "manual"});
		const vivusCircles = new Vivus('svg-circles', {start: "manual"});
		const vivusLines = new Vivus('svg-lines', {start: "manual"});
		$(window).scroll(function () {	
			if ($("#svg-road").isInViewport()) {
				$("#svg-road").addClass("show");
				vivusRoad.play();
			}
			if ($("#svg-circles").isInViewport()) {
				$("#svg-circles").addClass("show");
				vivusCircles.play();
			}
			if ($("#svg-lines").isInViewport()) {
				$("#svg-lines").addClass("show");
				vivusLines.play();
			}
		});
	}

	// quotes

	if ($("#quotes").length>0) {

		$("#quotes").slick({
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			asNavFor: '#quotes-links',
			responsive: [
				{
				  breakpoint: 1024,
					settings: {
						dots: true,
					}
				},
			]
		});

		$("#quotes-links").slick({
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			fade: true,
			speed: 0,
		});

		$(".quote-logo").click(function(){
			$(".quote-logo").removeClass("active");
			$(this).addClass("active");
			var target = $(this).attr("data-target");
			//console.log(target)
			$("#quotes").slick('slickGoTo', target);
		})

	}

	// points

	if ($("#points").length>0) {
		if (device == "mobile") {
			$("#points").slick({
				arrows: false,
				slidesToShow: 1,
				dots: true
			});
			$("#points").on("afterChange", function (event, slick, currentSlide, nextSlide){
				curr = slick.currentSlide;
				if (curr == 1) {
					if (pointTwoAnimFlag == true) {
						pointTwoAnim.setDirection(1);
						pointTwoAnim.setSpeed(1);
						pointTwoAnim.play();
						pointTwoAnimFlag = false;
					}
				} else if (curr == 2) {
					if (pointThreeAnimFlag == true) {
						pointThreeAnim.setDirection(1);
						pointThreeAnim.setSpeed(1);
						pointThreeAnim.play();
						pointThreeAnimFlag = false;
					}
				}
			})
		}
	}

	// features

	if ($("#features-slider").length>0) {
		if (device == "mobile") {
			$("#features-slider").slick({
				arrows: false,
				slidesToShow: 1,
				dots: true
			});
		}
	}

	// forms

	$(".form-wrapper").find("input").focus(function(){		
		$(this).parents(".part").find("label").addClass("go-up");
	});
	$(".form-wrapper").find("input").focusout(function(){
		var val = $(this).val();
		if (val == "") {
			$(this).parents(".part").find("label").removeClass("go-up");
		}
	});

	$(".form-wrapper").find("textarea").focus(function(){		
		$(this).parents(".form-row").find("label").addClass("go-up");
	});
	$(".form-wrapper").find("textarea").focusout(function(){
		var val = $(this).val();
		if (val == "") {
			$(this).parents(".form-row").find("label").removeClass("go-up");
		}
	});

	document.addEventListener( 'wpcf7mailsent', function(event) {
		//$("#contact-content").addClass("go-down");
		$("#apply-content").addClass("go-down");
		setTimeout(function(){
			//$("#contact-thanks").removeClass("go-down");
			$("#apply-thanks").removeClass("go-down");
		}, 450);
	}, false );

	$('.ajax-loader').after('<i class="fa fa-circle-o-notch fa-spin wpcf7-spinner" style="visibility: hidden"></i>');
	
	$('.wpcf7-submit').on('click', function () {
		$('.wpcf7-spinner').css({ visibility: 'visible' });
	});
	
	$('div.wpcf7').on('wpcf7:invalid wpcf7:spam wpcf7:mailsent wpcf7:mailfailed', function () {
		$('.wpcf7-spinner').css({ visibility: 'hidden' });
	});

	//

	if ($("#contact-thanks").hasClass("active")) {
		setTimeout(function(){
			closePopup("contact");
		}, 2000);
	}

	//

	function openVideo(srcId) {
		$("#yt-iframe").attr("src", "https://www.youtube.com/embed/"+srcId+"?rel=0&amp;showinfo=0&autoplay=1");
		openPopup("video");
	}

	$(".open-video").on("click", function() {
		var srcId = $(this).attr("data-id");
		openVideo(srcId);
	});

	//

	function getTeamMember(id) {
		$.ajax({
			url: one_member.ajaxurl,
			type: 'post',
			data: {
				action: 'one_member',
				'id': id,
			},
			success: function( response ) {
				//console.log(response);
				$("#popup-team-content").empty();
				$("#popup-team-content").html(response);
				openPopup("team");
			}
		});
	}

	$("body").on("click", ".open-team", function(e){
		e.preventDefault();
		var id = $(this).attr("data-target");
		var url = $(this).attr("href");
		getTeamMember(id);
		history.pushState("team", null, url);
	})

	window.onpopstate = function(event) {
		location.reload();
	}

	//

	if ($("#map-us").length>0 || $("#map-israel").length>0) {

		if ($("#map-us").length > 0) {
			function initializeUs() {
				var myLatlng = new google.maps.LatLng(37.787796, -122.452186);
				var map_canvas = document.getElementById('map-us');
				var map_options = {
					scrollwheel: false,
					center: myLatlng,
					zoom: 17,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					disableDefaultUI: true
				}
				var map = new google.maps.Map(map_canvas, map_options);
				var marker = new google.maps.Marker({
					position: myLatlng,
					map: map,
				});
	
			}
			google.maps.event.addDomListener(window, 'load', initializeUs);
		}

		if ($("#map-israel").length > 0) {
			function initializeIsrael() {
				var myLatlng = new google.maps.LatLng(32.275505, 34.860014);
				var map_canvas = document.getElementById('map-israel');
				var map_options = {
					scrollwheel: false,
					center: myLatlng,
					zoom: 17,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					disableDefaultUI: true
				}
				var map = new google.maps.Map(map_canvas, map_options);
				var marker = new google.maps.Marker({
					position: myLatlng,
					map: map,
				});
	
			}
			google.maps.event.addDomListener(window, 'load', initializeIsrael);
		}

	}

	//

	$("#kb-sidebar .group .title").click(function(e){
		e.preventDefault();
		var targetUrl = $(this).attr("href");
		history.pushState("", null, targetUrl);
		//
		var view = $(this).parents(".group").attr("data-target");
		//
		var topicsHeight = $(this).siblings(".topics").find(".inner").outerHeight();
		$(this).parents(".group").siblings(".group").removeClass("active").find(".topics").css("max-height", "0");
		$(this).parents(".group").addClass("active");
		$(this).siblings(".topics").css("max-height", (topicsHeight+30)+"px");
		//
		$("#kb-views").addClass("go-down");
		setTimeout(function(){
			$("#kb-views .view").removeClass("active");
			$("#view-"+view).addClass("active");
		}, 450);
		setTimeout(function(){
			$("#kb-views").removeClass("go-down");
		}, 500);
	})

	if (device == "mobile") {
		$(".knowledge-wrapper .content-wrapper .sidebar .group.active .topics").click(function(){
			$(this).find(".inner").toggleClass("active");
		})
	}

	$("#kb-sidebar .group .topics .topic").click(function(e){
		e.preventDefault();
		var targetUrl = $(this).attr("href");
		history.pushState("", null, targetUrl);
		//
		var view = $(this).parents(".group").attr("data-target");
		var target = $(this).attr("data-target");
		if (device == "mobile") {
			var text = $(this).text();
			$(this).parents(".inner").siblings(".main").find("span").text(text);
		}
		//
		$(this).siblings(".topic").removeClass("active");
		$(this).addClass("active");
		//
		$("#view-"+view).addClass("go-down");
		setTimeout(function(){
			$("."+view+"-group").removeClass("active");
			$("#"+view+"-group-"+target).addClass("active");
		}, 450);
		setTimeout(function(){
			$("#view-"+view).removeClass("go-down");
		}, 500);
	})

	$(".question").click(function(){
		$(this).parents(".qa").toggleClass("active");
	})
	
	//

	if ($("#position-sidebar").length>0 && device == "comp") {
		setTimeout(function(){
			$("#position-sidebar").addClass("go-in");
		}, 400);
	}

	$("#m-apply").click(function(){
		$("#position-sidebar").addClass("show");
	})

	$("#menu-button").click(function(){
		var state = $(this).attr("data-state");
		if (state == "closed") {
			$("#menu-button").attr("data-state", "opened");
			$("#menu-button").addClass("rotate");
			$("#side-menu").addClass("show");
			$("#header").addClass("super-up");
		} else {
			$("#menu-button").attr("data-state", "closed");
			$("#menu-button").removeClass("rotate");
			$("#side-menu").removeClass("show");
			$("#header").removeClass("super-up");
		}
	})

	//

	$(".w-dropdown").click(function(){
		$(this).toggleClass("active");
	})

	//

	if ($("#position-headline").length>0) {
		var title = $("#position-headline").attr("data-title");
		//console.log(title);
		setTimeout(function(){
			if (title) {
				//console.log(title);
				$("#job-title-hide").val(title);
			} else {
				$("#job-title-hide").val("none");
			}
		}, 1000);
	}

});
