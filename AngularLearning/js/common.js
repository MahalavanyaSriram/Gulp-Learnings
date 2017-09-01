 customUI = function() {
	var Tab = function() {
		$('#tab a:first').tab('show');
		$('#tab a').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		})	
	}
	
	var sideNav = function () {
        $(document).on("click", '.sub-menu a', function () {
            $(this).parents('.sub-menu').css('display', 'none');
        });

        $(document).on("mouseenter", '.left-menu li.hasChild', function () {
            $('.left-menu li').find('.sub-menu').css('display', 'none');
            $(this).find('.sub-menu').css('display', 'inherit');
            
        });

        $(document).on("mouseleave", '.left-menu li.hasChild', function () {
        	$('.left-menu li').find('.sub-menu').css('display', 'none');
        	$(this).find('.sub-menu').css('display', 'none');
        });
        
        $(document).on('click','.close-menu',function (e)  {
			e.preventDefault();
			$('.sub-menu').css('display', 'none');
			$('.close-menu').toggleClass('collapse');
			if ($('.close-menu').hasClass('collapse')) {
				$('.close-menu').next().css('visibility', 'hidden');
				$('#menu').prop('title','Open'); 
			  	$('.left-menu').toggleClass('collapse1');
			  	$('.left-menu li').find('.menu-icon').next().fadeOut(100);
			  	$('li.hasChild > a').toggleClass('noarrow');   
				$('aside.left-sidebar').animate({'width':'59px'},{ duration: 500, queue: false });
				$('.left-sidebar').find('footer').fadeOut(100);
				$('.left-sidebar').parent().animate({'padding-left':'60px'},{ duration: 500, queue: false });
				$('.widgets-notifications').animate({'width': ($(window).width()-160)},500);

			}
			else {
				$('.left-menu').toggleClass('collapse1');
				$('#menu').prop('title','Close'); 
				$('aside.left-sidebar').animate({'width':'250px'},{ duration: 500, queue: false ,complete:function(){ $('.close-menu').next().css('visibility', 'visible');$('.left-sidebar').find('footer').fadeIn(200);$('.left-menu li').find('.menu-icon').next().fadeIn(100);}});      
				$('li.hasChild > a').toggleClass('noarrow');   
				$('.left-sidebar').parent().animate({'padding-left':'250px'},{ duration: 500, queue: false });
				$('.widgets-notifications').animate({'width': ($(window).width()-350)},500);

			}		 
        })
    }
	
	var init = function() {	
		$(document).ready(function() {
			setTimeout(function() {
				$('.left-sidebar').delay( 5000 ).css('height', ($(window).height() - ($('header').innerHeight() + 1)));
				$('.widgets-notifications').css('width', $('.right-inner-content').innerWidth());
				$(window).resize(function(){
					$('.left-sidebar').delay( 5000 ).css('height', ($(window).height() - ($('header').innerHeight() + 1)));
				});
				Tab();
				sideNav();
				var s = $(".left-sidebar");
		        var pos = s.position();
		        $(window).scroll(function () {
		            var windowpos = $(window).scrollTop();
		            if (windowpos > 113) {
		                s.addClass("stick");
		                $('.left-sidebar').css('height', ($(window).height()));
		               
		            } else {
		                s.removeClass("stick");
		                 $('.left-sidebar').css('height', ($(window).height() - ($('header').innerHeight() + 1)));
		                 
		            }
		            if (windowpos > 83)  $('.widgets-notifications').css('top', '0')
		            else $('.widgets-notifications').css('top', '84px');
		        });

			}, 100);		
		})	
	}
	
	init();
	return {
		init : init
	}
}();		







