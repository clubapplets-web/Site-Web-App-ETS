$('#navButtons').hide()
$('#navTitle').toggle()
$('#nav-toggler').css('opacity','0')
$('#nav-toggle').css('opacity', '0')
$('#parallax-content').parallax({
    imageSrc: 'images/test.jpg',
    speed:0.1,
    positionY:"top"
});



var y = Number(screen.height / 2) - Number($('#brandImage').position().top) - Number($('#brandImage').height())
document.getElementById("brandImage").style["transform"] = "translateY(" + Math.round(y) + "px" + ")"

$('#navTitle').fadeToggle(1000, "swing", function () {

    document.getElementById("brandImage").classList.add("brandImageTop")

    setTimeout("showNavButtons()", 1000)
})

var showNavButtons = function () {
    $('#nav-toggle').css('opacity', '1')
    $('#nav-toggler').css('opacity','1')
    $('#navButtons').show("slow", "swing", function () {
        $('#link-buttons-container').css('opacity','1')
        $("#typewriter-container").toggleClass("typewriter")
        $('.navbar').css("background-color", "#00000080")
        new Typewriter(90, document.getElementById("typewriter-container"), "Pour ceux qui partagent la passion du développement mobile.", false, null)
    })
}

document.querySelector("#floatingToggle").addEventListener("click", function () {


    document.querySelector("#nav-toggler").classList.toggle("active");
    $('#navToggleContent').slideToggle()
    $('#header').toggleClass("back-color")


});

window.onscroll = function () {

    if(document.getElementById("club-description").getBoundingClientRect().y + document.getElementById("club-description").getBoundingClientRect().height/2 < 3 * window.innerHeight / 4){
        $('#club-description').css("opacity","1")
    }else{
        $('#club-description').css("opacity","0")
    }
    if(document.getElementById("club-description").getBoundingClientRect().y + document.getElementById("club-description").getBoundingClientRect().height/2 < 1 * window.innerHeight / 4){
        $('#club-description').css("opacity","0")
    }

    if(document.getElementById("club-mission").getBoundingClientRect().y + document.getElementById("club-mission").getBoundingClientRect().height/2 < 3 * window.innerHeight / 4){
        $('#club-mission').css("opacity","1")
    }else{
        $('#club-mission').css("opacity","0")
    }
    if(document.getElementById("club-mission").getBoundingClientRect().y + document.getElementById("club-mission").getBoundingClientRect().height/2 < 1 * window.innerHeight / 4){
        $('#club-mission').css("opacity","0")
    }

    if(document.getElementById("club-objectives").getBoundingClientRect().y < 3 * window.innerHeight / 4){
        $('#club-objectives').css("opacity","1")
    }else{
        $('#club-objectives').css("opacity","0")
    }
    if(document.getElementById("club-objectives").getBoundingClientRect().y < 1 * window.innerHeight / 4){
        $('#club-objectives').css("opacity","0")
    }
}

$('#go-to-description-button').on('click',function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#parallax-content").offset().top
    }, 1000);
})
