$('#row1').hide();
$('#row2').hide();
//$('#row3').hide();
$('#intro-title').hide();
$('#intro-title').fadeToggle(1000,"swing");
$('#row1').toggle("slide",1500);
if(!isTouchScreen){
    $('#row2').show("slide",{direction:'right'},1500);
    //$('#row3').show("slide",1500);
}

var isTouchScreen = false;



document.querySelector("#floatingToggle").addEventListener("click", function () {


    document.querySelector("#nav-toggler").classList.toggle("active");
    $('#navToggleContent').slideToggle()
    $('#navbar').toggleClass("back-color-black")


});

window.onscroll = function(){
    if(this.document.getElementById("main-content").getBoundingClientRect().y < 0){
        $('#navbar').addClass("back-color")
        
        
    }else{
        $('#navbar').removeClass("back-color")
    }
    if(isTouchScreen){
        if(this.document.getElementById("row1").getBoundingClientRect().y < 0){
            $('#row2').show("slide",{direction:'right'},1500);
        }
    
        if(this.document.getElementById("row2").getBoundingClientRect().y < 0){
           // $('#row3').show("slide",1500);
        }
    }

}

//In case the device is a touchscreen
document.addEventListener('touchstart', function () {
    isTouchScreen = true;
})



