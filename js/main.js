const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);

// After update OptimizedHTML5
let cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree

	// Custom JS

const body = document.querySelector('body')
const homesection = document.querySelector('.home-section')
	cx = window.innerWidth / 2
	cy = window.innerHeight / 2

	body.addEventListener('mousemove', e => {

		clientX = e.pageX
		clientY = e.pageY

		request = requestAnimationFrame(updateMe)

		mouseCoords(e)
		cursor.classList.remove('hidden')
		follower.classList.remove('hidden')
	})
	

	function updateMe() {

		dx     = clientX - cx
		dy     = clientY - cy
		tiltx  = dy / cy
		tilty  = dx / cx
		radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
		degree = radius * 25
		gsap.to('.content', 1, { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )` })

	}
	parallaxMouse({ elements: '.cherry', moveFactor: 170, wrap: 'body'})
	parallaxMouse({ elements: '.pic', moveFactor: 70, wrap: 'body'})

const cursor = document.getElementById('cursor'),
			follower = document.getElementById('aura'),
			links = document.getElementsByTagName('a'),
			button = document.getElementsByTagName('button')
			mouseX = 0, mouseY = 0, posX = 0, posY = 0

			function mouseCoords(e) {

				mouseX = e.pageX
				mouseY = e.pageY
		
			}
		
			gsap.to({}, .01, {
		
				repeat: -1,
		
				onRepeat: () => {
		
					posX += (mouseX - posX) / 5
					posY += (mouseY - posY) / 5
		
					gsap.set(cursor, {
						css: {
							left: mouseX,
							top: mouseY
						}
					})
		
					gsap.set(follower, {
						css: {
							left: posX - 24,
							top: posY - 24
						}
					})
		
				}
		
			})
			for(let i = 0; i < links.length; i++) {

				links[i].addEventListener('mouseover', () => {
					cursor.classList.add('active')
					follower.classList.add('active')
				})
		
				links[i].addEventListener('mouseout', () => {
					cursor.classList.remove('active')
					follower.classList.remove('active')
				})
		
			}

			for(let i = 0; i < button.length; i++) {

				button[i].addEventListener('mouseover', () => {
					cursor.classList.add('active')
					follower.classList.add('active')
				})
		
				button[i].addEventListener('mouseout', () => {
					cursor.classList.remove('active')
					follower.classList.remove('active')
				})
		
			}

			body.addEventListener('mouseout', () => {
				cursor.classList.add('hidden')
				follower.classList.add('hidden')
			})

			$('.burger-btn').on('click', function(){
				$('.burger-btn,.burger').toggleClass('active');
			})

			$(function () {
				$(window).scroll(function() {
						$('.benefits__title').each(function(){
								var imagePos = $(this).offset().top;
			
								var topOfWindow = $(window).scrollTop();
								if (imagePos < topOfWindow+750) {
										$(this).addClass("fadeInLeft");
								}
						});
				});
				$(window).scroll(function() {
					$('.benefit__item').each(function(){
							var imagePos = $(this).offset().top;
		
							var topOfWindow = $(window).scrollTop();
							if (imagePos < topOfWindow+800) {
									$(this).addClass("fadeInLeft");
							}
					});
			});
			$(window).scroll(function() {
				$('.portfolio__title').each(function(){
						var imagePos = $(this).offset().top;
	
						var topOfWindow = $(window).scrollTop();
						if (imagePos < topOfWindow+800) {
								$(this).addClass("fadeInUp");
						}
				});
		});
		$(window).scroll(function() {
			$('.portfolio__item_1').each(function(){
					var imagePos = $(this).offset().top;

					var topOfWindow = $(window).scrollTop();
					if (imagePos < topOfWindow+850) {
							$(this).addClass("fadeInLeft");
					}
			});
	});
	$(window).scroll(function() {
		$('.portfolio__item_5').each(function(){
				var imagePos = $(this).offset().top;

				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+850) {
						$(this).addClass("fadeInRight");
				}
		});
});
$(window).scroll(function() {
	$('.portfolio__btn').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+850) {
					$(this).addClass("fadeInDown");
			}
	});
});
$(window).scroll(function() {
	$('.technology__item').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+850) {
					$(this).addClass("fadeInLeft");
			}
	});
});
$(window).scroll(function() {
	$('.input').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
					$(this).addClass("tada");
			}
	});
});
			})

			//validate
$.validator.addMethod("regex", function(value, element, regexp) {
  let regExsp = new RegExp(regexp);
  return regExsp.test(value);
},"Please check your input."
);

$(".input").validate({
rules: {
  firstName: {
      required: true,
      regex : "[A-Za-z]{1,32}"   
  },
  phoneNumber: { 
      digits : true,
      required: true,
      minlength: 10,
      maxlength: 11,
      regex: "[0-9]+"
  }
},
messages: {
  firstName: "Введите ваше имя правильно",
  phoneNumber: "Введите ваш номер",
  email: "Введите Email"
}
});

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});