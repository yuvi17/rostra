new WOW().init();
            $(document).ready(function(){
		        $('.slider').slider({full_width: true,indicators: false});
		    });
        	$(".button-collapse").sideNav();
			   $(document).ready(function(){
				    $(window).scroll(function(){
				    	console.log($(window).scrollTop()+" scroll height ");
				        if($(window).scrollTop() > 550){
				        	
				            $("nav").removeClass("transparent").addClass("teal").addClass("darken-2").addClass('customNav').addClass('z-depth-2').removeClass('z-depth-0');
				        }else {
			        $("nav").removeClass("teal").removeClass("darken-2").addClass("transparent").removeClass('z-depth-2').addClass('z-depth-0');
			       }

				    });
				});
			   $(document).ready(function(){
			    $('.scrollspy').scrollSpy();
			  });
			    $(document).ready(function(){
    				$('.modal-trigger').leanModal();
  				});
  				  var $form = $('#registration-form');
  				$form.on('submit', function() { 
  					 $('.submit').on('click',function() {
    					$(this).prop({disabled:true});
					});           
  					$.post($form.attr('action'), $form.serialize())
  					.done(function(data) {
  						$('.submit').on('click',function() {
    					$(this).prop("disabled",false);
					});
   					$(".message").html("<br><br>You've successfully registered !<br><br>");
  				})
  			.fail(function(jqXHR, textStatus, errorThrown) {
  				$('.submit').on('click',function() {
    					$(this).prop("disabled",false);
					});
    			$(".message").html("<br><br> Something went wrong, please try again.<br><br>");
  			});
  			return false;
			}); 
  			var $form1 = $('#registration-form-yp');
  				$form1.on('submit', function() { 
    					$(this).prop({disabled:true});
				          
  					$.post($form1.attr('action'), $form.serialize())
  					.done(function(data) {
    					$(this).prop("disabled",false);
					   	$(".message-yp").html("<br><br>You've successfully registered for Youth Parliament!<br><br>");
  				})
  			.fail(function(jqXHR, textStatus, errorThrown) {
    					$(this).prop("disabled",false);
					
    			$(".message").html("<br><br> Something went wrong, please try again.<br><br>");
  			});
  			return false;
			}); 
