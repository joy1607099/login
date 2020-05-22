// $("h1").addClass("big-title margin-50");
// $("button").html("<em>Don't click</em>");
// $("a").attr("href","https://www.youtube.com");

// $("button").click(function (){
//   $("h1").css("color","purple");
// });
// $("body").keydown(function(event){
//   $("h1").text(event.key);
//
//
// // });
// $("h1").on("mouseover",function (){
//   $("h1").css("color","red");
// });
// $("h1").before("<button>joy</button>");
// $("h1").after("<button>joy</button>");
// $("h1").prepend("<button>joy</button>");
// $("h1").append("<button>joy</button>");
// $("button").remove();
// $("button").on("click",function (){
//   $("h1").toggle();
// });
// $("button").on("click",function (){
//   $("h1").fadeToggle();
// });
// $("button").on("click",function (){
//   $("h1").slideToggle();
// });
$("button").on("click",function (){
  $("h1").animate({opacity: 0.5});
});
