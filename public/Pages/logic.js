const images = $(".images");
const popUp = $(".imgPopUp");
const popUpImage = $(".imgPopUp img");
const closeButton = $(".imgPopUp button");
let isPopOpen = false;

const html = $("html");

images.click(function () {
    console.log(popUpImage);
    popUp.css("display", "flex");
    html.addClass("stuck");
    popUp.css("pointer-events", "all");
    popUp.css("animation", 'popFadeIn 0.1s ease');

    let imageToShow = $(this).attr("src");
    popUpImage.attr("src", imageToShow);
    popUpImage.css('animation', 'imagePopIn 0.2s ease-in');
    console.log(imageToShow);
    isPopOpen = true;
});

popUp.click(function (){
    if(isPopOpen){
        closePopUp();
    }
});


function closePopUp(){
    popUp.css('animation', 'popFadeOut 0.2s ease');
    popUp.css("pointer-events", "none");
    html.removeClass("stuck");
    isPopOpen = false;

    setTimeout(function(){
        popUp.css("display", "none");
    }, 180);
}