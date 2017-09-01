$( document ).ready(function() {
  // Handler for .ready() called.

  $("#tweet-controls").hide();

  $(".tweet-compose").click(function(){
    $('.tweet-compose').css("height", "5em");
    $("#tweet-controls").show();
  });

 $(".tweet-compose").on("keydown", function() {
   var count = 140-$(this).val().length;
   $('#char-count').text(count)
    if(count <= 10){
      $('#char-count').css("color" , "red");
    }
    if( count > 10) {
      $('#char-count').css("color" , "black");
    }
    if (count <= 0 ){
      $('#tweet-submit').attr('disabled', 'disabled')
    }
    if (count >= 0 ){
      $('#tweet-submit').removeAttr('disabled', 'disabled')
    }
  })



$('#tweet-submit').on('click', function(){
  console.log('itsworking')
  var newtweets = $('.test').first().clone();
  newtweets.find(".tweet-text").html($(".tweet-compose").val())
$('#stream').prepend(newtweets);

})








});
