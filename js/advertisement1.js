document.addEventListener("DOMContentLoaded", function(){
    var advertisement1 = document.querySelector("#advertisement1");
    setTimeout(function (){
        advertisement1.style.display = "block";
    },3000);
    var closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", function(){
        advertisement1.style.display = "none";
    });
    var goOn = document.querySelector(".go-on");
    goOn.addEventListener("click", function(){
        //跳转到login
        // window.location.href = "login.html";
    });
})
