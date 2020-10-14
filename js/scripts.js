function openNav() {
    document.getElementById("slidingnav").style.width = "750px";
    document.getElementById("bars").style.display = "none";
    document.getElementById("closebtn").style.display = "block";
}
function closeNav() {
    document.getElementById("slidingnav").style.width = "0";
    document.getElementById("bars").style.display = "block";
    document.getElementById("closebtn").style.display = "none";
}
function shift() {
    document.getElementById("arrows").style.top = "1325px";
    document.getElementById("arrows").style.color = "gray";
}
function shift2() {
    document.getElementById("arrows2").style.marginTop = "725px";
    document.getElementById("arrows2").style.color = "gray";
}
function shift3() {
    document.getElementById("arrows3").style.marginTop = "425px";
    document.getElementById("arrows3").style.color = "gray";
}
function shiftback() {
    document.getElementById("arrows").style.top = "1300px";
    document.getElementById("arrows").style.color = "white";
}
function shiftback2() {
    document.getElementById("arrows2").style.marginTop = "700px";
    document.getElementById("arrows2").style.color = "white";
}
function shiftback3() {
    document.getElementById("arrows3").style.marginTop = "400px";
    document.getElementById("arrows3").style.color = "white";
}
function scrollDown() {
    window.scrollBy(0, innerHeight);
}
function fadein() {
    document.getElementById("intro").style.color = "white";
}
function fadeout() {
    document.getElementById("intro").style.color = "gray";
}
function fadebarsin() {
    document.getElementById("bars").style.color="white";
}
function fadebarsout() {
    document.getElementById("bars").style.color="gray";
}