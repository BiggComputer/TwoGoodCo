const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function videoconAnimation () {
    var videocon = document.querySelector("#video-container")
    var playbtn =document.querySelector("#play")
    videocon.addEventListener("mouseenter",function(){
        gsap.to(playbtn,{
            opacity:1,
            scale:1
        })
    })
    
    videocon.addEventListener("mouseleave",function(){
        gsap.to(playbtn,{
            opacity:0,
            scale:0
        })
    })
    
    videocon.addEventListener("mousemove",function(dets){
        gsap.to(playbtn,{
            left:dets.x,
            top:dets.y
        })
    })
}
videoconAnimation()



function loadingAniamtion(){
    gsap.from("#page1 h1",{
        y:110,
        opacity:0,
        delay:0.3,
        duration:0.6,
        stagger:0.3,
    
    })    
    gsap.from("#page1 #video-container",{
        scale:0.9,
        opacity:0,
        delay:0.9,
        duration:0.3,
    
    })    
}
loadingAniamtion ()

document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })

})

document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(1)'
    })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(0)'
        })
        })
})