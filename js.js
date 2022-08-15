$(".title").click(function (){
    var s = $(".title");
    s = this.innerHTML;
   
    $("#title").text(s);


    console.log(s);
   
})

$(".lisha").click(function(){
    
    window.open("registrationDone.html");
});