function method2(){
    var btnValue = document.getElementById("button")
    if (btnValue.innerHTML === "ON")
{
    btnValue.innerHTML = "OFF";
    document.getElementById("image2").src="images/on.gif"
}
else{
    btnValue.innerHTML = "ON"
    document.getElementById("image2").src="images/off.gif"
}
}

function on(){
    document.getElementById("img1").src="images/on.gif";
    document.getElementById("img2").src=""
}
function off(){
    document.getElementById("img2").src="images/off.gif"
    document.getElementById("img1").src=""
}

function changeimage(){
    var a = document.getElementById("change")
    if(a.src.match("on")){
        document.getElementById("change").src = "images/off.gif"
    }
    else{
        document.getElementById("change").src = "images/on.gif"
    }
   
}