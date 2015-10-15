 $(document).ready(function(){
 
     //$('.rounded').corner();

 	$('#topTab').click(function(){
	  if ($(this).is('.closed'))
	    {
		  $(this).animate({ top:"0" }, 1500);
	      $(this).removeClass('closed');
		}
	  else
	    {
		  $(this).animate({ top:"-150px" }, 1500);
	      $(this).addClass('closed');
	    }	
	});
	
	$('#leftTab').click(function(){
	  if ($(this).is('.closed'))
	    {
		  $(this).animate({ left:"0" }, 1500);
	      $(this).removeClass('closed');
		}
	  else
	    {
		  $(this).animate({ left:"-150px" }, 1500);
	      $(this).addClass('closed');
	    }	
	});
	
	$('#bottomTab').click(function(){
	  if ($(this).is('.closed'))
	    {
		  $(this).animate({ height:"600px" }, 1500);
	      $(this).removeClass('closed');
		}
	  else
	    {
		  $(this).animate({ height:"300px" }, 1500);
	      $(this).addClass('closed');
	    }	 
	});
	
	$('#rightTab').click(function(){
	  if ($(this).is('.closed'))
	    {
		  $(this).animate({ right:"0" }, 1500);
	      $(this).removeClass('closed');
		}
	  else
	    {
		  $(this).animate({ right:"-350px" }, 1500);
	      $(this).addClass('closed');
	    }	
	});
 });