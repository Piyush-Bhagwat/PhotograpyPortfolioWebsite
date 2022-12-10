const images = $(".images");
const popUp = $(".imgPopUp");
const popUpImage = $(".imgPopUp img");
const closeButton = $(".imgPopUp button");

const html = $("html");

images.click(function () {
    popUp.css("display", "flex");
    html.addClass("stuck");
    popUp.css("pointer-events", "all");
    popUp.css("animation", 'popFadeIn 0.1s ease');

    let imageToShow = $(this).attr("src");
    popUpImage.attr("src", imageToShow);
    popUpImage.css('animation', 'imagePopIn 0.2s ease-in');
    console.log(imageToShow);
});

closeButton.click(function () {
    popUp.css('animation', 'popFadeOut 0.2s ease');
    popUp.css("pointer-events", "none");
    html.removeClass("stuck");

    setTimeout(function(){
        popUp.css("display", "none");
    }, 180);
});

