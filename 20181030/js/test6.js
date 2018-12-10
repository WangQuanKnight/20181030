$(document).ready(function () {
    alert("true");
    $(".btn1").click(function () {
        $("h1,h2,p").addClass("blue");
        $("div").addClass("important");
    });

    $(".btn2").click(function () {
        $("h1,h2,p").removeClass("blue");
        $("div").removeClass("important");
    });
});
