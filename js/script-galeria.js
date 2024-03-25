const fullImgBox = document.getElementById("fullImgBox"), 
    imgElement = document.getElementById("img-element"),
    rightBtn = document.getElementById("right-btn"),
    leftBtn = document.getElementById("left-btn"),
    closeImg = document.getElementById("closeImg"),
    listaImg = [...document.querySelectorAll(".img")];

let indexImg = 0;



listaImg.forEach((img, i) => {
    img.addEventListener("click", (e) => {
        clicked(i)
        fullImgBox.style.display = "flex";
        imgElement.src = img.src
    })
});
function clicked(position){
    indexImg = position;
    imgElement.src = listaImg[indexImg].src;
}   

rightBtn.addEventListener("click", e =>{
    if(indexImg >= listaImg.length-1){
        indexImg = -1;
        console.log(indexImg);
        
    }
    indexImg++;
    console.log(indexImg);
    
    imgElement.src = listaImg[indexImg].src
})
leftBtn.addEventListener("click", e =>{
    if(indexImg <= 0){
        indexImg = listaImg.length;
    }
    
    indexImg--;
    imgElement.src = listaImg[indexImg].src
})

closeImg.addEventListener("click", e =>{
    fullImgBox.style.display = "none";
})
fullImgBox.addEventListener("click", e =>{
    if (e.target.classList.contains("full-img")){
        fullImgBox.style.display = "none"
    }
    
})
