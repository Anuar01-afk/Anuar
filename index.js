$(document).ready(function() {
    let hiddenrow = $(".vi");
$(".btnGl").click(function(){
    hiddenrow.toggleClass("vi") 
})
$(".sigmab").click(function(){
    $(".modal__canvas").toggleClass("hidden")
})
$(".modal__close").click(function () {
    $(".modal__canvas").remove()
    
})
});



