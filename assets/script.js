let leftIcon=document.querySelector(".slider .icons .left-icon")
let rightIcon=document.querySelector(".slider .icons .right-icon")
// rightIcon.addEventListener("click",function(){
//     let activeImage=document.querySelector(".active-image")
//     activeImage.classList.remove("active-image")
//     if (activeImage.nextElementSibling!=null) {
//         activeImage.nextElementSibling.classList.add("active-image")
//     }
//     else{
//         this.parentNode.nextElementSibling.firstElementChild.classList.add("active-image")
//     }
// })
// leftIcon.addEventListener("click",function(){
//     let activeImage=document.querySelector(".active-image")
//     activeImage.classList.remove("active-image")
//     if (activeImage.previousElementSibling!=null) {
//         activeImage.previousElementSibling.classList.add("active-image")
//     }
//     else{
//         this.parentNode.nextElementSibling.lastElementChild.classList.add("active-image")
//     }
// })


function rightSlider() {
    let activeImage=document.querySelector(".active-image")
    activeImage.classList.remove("active-image")
    if (activeImage.nextElementSibling!=null) {
        activeImage.nextElementSibling.classList.add("active-image")
    }
    else{
        rightIcon.parentNode.nextElementSibling.firstElementChild.classList.add("active-image")
    }
}
function leftSlider() {
    let activeImage=document.querySelector(".active-image")
    activeImage.classList.remove("active-image")
    if (activeImage.previousElementSibling!=null) {
        activeImage.previousElementSibling.classList.add("active-image")
    }
    else{
        leftIcon.parentNode.nextElementSibling.lastElementChild.classList.add("active-image")
    }
}
rightIcon.addEventListener("click",rightSlider)
leftIcon.addEventListener("click",leftSlider)
// leftIcon.addEventListener("mouseover",leftSlider)
// rightIcon.addEventListener("mouseover",rightSlider)
