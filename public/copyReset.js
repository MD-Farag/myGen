resetBtn.addEventListener("click", function () {
    resetAll()
});

updateBtn.addEventListener("click", function () {
    regenerate()
});

copyToClip.addEventListener("click", function (e) {
    navigator.clipboard.writeText(document.querySelector("#output").value);
    copyMsg = document.getElementById("copyMessage");
    copyMsg.className = "show";
    setTimeout(function () { copyMsg.className = copyMsg.className.replace("show", ""); }, 3000);
    e.target.classList.remove("blinking");

});