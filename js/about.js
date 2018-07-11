function changeImageR()
{
    var img = document.getElementById("right");
    img.src = imagesR[x];
    x++;

    if(x >= imagesR.length){
        x = 0;
    }

    //fadeImg(img, 100, true);
    setTimeout("changeImageR()", 5000);
}

function changeImageL()
{
    var img = document.getElementById("left");
    img.src = imagesL[x];
    x++;

    if(x >= imagesL.length){
        x = 0;
    }

    //fadeImg(img, 100, true);
    setTimeout("changeImageL()", 5000);
}

function fadeImg(el, val, fade){
    if(fade === true){
        val--;
    }else{
        val ++;
    }

    if(val > 0 && val < 100){
        el.style.opacity = val / 100;
        setTimeout(function(){fadeImg(el, val, fade);}, 10);
    }
}

var imagesR = [];
var imagesL = [];
x = 0;

imagesL[0] = "js/images/chick-pair.jpg";
imagesL[1] = "js/images/cricket-pair.jpg";
imagesL[2] = "js/images/cheese-pair.jpg";
imagesR[0] = "js/images/eggfree-pair.jpg";
imagesR[1] = "js/images/salmon-pair.jpg";
imagesR[2] = "js/images/tofu-pair.jpg";
setTimeout("changeImageL()", 5000);
setTimeout("changeImageR()", 5000);
