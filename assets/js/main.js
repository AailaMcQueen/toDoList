
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed")
});
$("ul").on("click", "span", function(event){
  $(this).parent().slideUp("500", function(){
    $(this).remove();

  })
  event.stopPropagation();

});

$("input").on("keypress", function(event){
  if(event.which===13){
    var i= $(this).val();
    $(this).val("");
    if($("li").length<=1){
      $("ul").html("<li><span><i class='fa fa-trash'></i></span>" + i+"</li>");
    }
    if($("li").length>1){
      $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + i+"</li>")
    }
  }
});
$(".fa-plus").on("click", function(){
  $("input").slideToggle()
})
