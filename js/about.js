function changeImageR()
{
    var img = document.getElementById("right");
    img.src = imagesR[x];
    x++;

    if(x >= imagesR.length){
        x = 0;
    }

    //fadeImg(img, 100, true);
    setTimeout("changeImageR()", 2000);
}

function changeImageL()
{
    var img = document.getElementById("left");
    img.src = imagesL[y];
    y++;

    if(y >= imagesL.length){
        y = 0;
    }

    //fadeImg(img, 100, true);
    setTimeout("changeImageL()", 2000);
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
y = 0;

imagesL[0] = "js/images/chick-pair.png";
imagesL[1] = "js/images/cricket-pair.png";
imagesL[2] = "js/images/cheese-pair.png";
imagesR[0] = "js/images/eggfree-pair.png";
imagesR[1] = "js/images/salmon-pair.png";
imagesR[2] = "js/images/tofu-pair.png";
setTimeout("changeImageL()", 2000);
setTimeout("changeImageR()", 2000);
