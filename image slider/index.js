var photos=["images1/chandan1.png","images1/chandan2.jpg","images1/chandan3.jpg"];
var imgTag=document.querySelector("img");
var count=0;

function next(){
    count++;

    if(count>=photos.length){
        count=0;
        imgTag.src=photos[count];
    }else{
        imgTag.src=photos[count];
    }
    

}

function prev(){
    count--;

    if(count<0){
        count=photos.length-1;
        imgTag.src=photos[count];
    }else{
        imgTag.src=photos[count];
    }

}