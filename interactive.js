$(document).ready(function() {
  
    var $input = $("#newtask"),
        $list = $("#tasks");
    
    function addListItem(e) {
      if(e.type==="keydown" && e.which !== 13) return;
      e.preventDefault(); // Don't submit form
      $list.append("<li id='message_row'><div id='test'class='input-group'><span class='input-group-addon' ><input type='checkbox' id='checks'></span><i class='form-control'>" + $input.val() + "</i></div></li>");
      $input.val(""); // Reset input field
    }
    $("#btn1").click(addListItem);
    $("#newtask").keydown(addListItem);
      
  });


  $(document).on('change', '#checks', function(e) {
    isChecked = $('#checks').prop('checked');
    if (isChecked) {
      $('i').css('text-decoration', 'line-through');
      $('body').css('background', 'lightblue');
    } else {
     
      $('i').css('text-decoration', 'none');
      $('body').css('background', 'brown');
    }
  })

  $(document).on('change', '#checks', function(e){
    isChecked = $('#checks').prop('checked');
    if (isChecked) {
        $("#btn2").attr('disabled', false);
        $("#btn2").click(function(e) {
            $("#btn2").attr('disabled', true);
            e.preventDefault();
            $('li').fadeOut();
        })
        
      }
    else
    {
        $("#btn2").attr('disabled', true);
    }
      
  })
