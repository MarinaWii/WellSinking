window.addEventListener('load',(e)=>{
    document.querySelector('body').style=`--scroll:${window.scrollY}px`
})
window.addEventListener('scroll',(e)=>{
    const body = document.querySelector('body');
    let maxScroll=Number(body.style.getPropertyValue("--scroll").slice(0,-2))
    let currentScroll=window.scrollY;
    if(currentScroll>maxScroll){
        document.querySelector('body').style=`--scroll:${currentScroll}px`;
    }
    
    
})