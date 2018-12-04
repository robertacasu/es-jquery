$(function () {

    var amici = ["luca", "paolo", "francesco"]
    console.log("ciaone")
    $(".btn").click(function () {
        $(this).toggleClass("btn-danger")
        $(this).toggleClass("btn-dark")
    })
    $(".btn").hover(function () {
        $(this).toggleClass("btn-success")
        $(this).toggleClass("btn-dark")
    })
    $("p").click(function () {
        $(this).fadeOut()
    })
    $("#bottone").click(function () {
        amici.forEach(function (el) {
            $("#ul").append("<li>" + el + "</li>")
        })   
    })
   $("#draggable").draggable() 
});

