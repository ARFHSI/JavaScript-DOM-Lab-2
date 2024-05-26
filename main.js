
let container = document.getElementById("container")
container.style.bottom="0px"



  setInterval(()=>{
container.style.top = `${Math.random()*100}px`
container.style.right=`${Math.random()*400}px`
container.style.backgroundColor ="#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
container.style.height= `${Math.random()*200}px`
container.style.width= `${Math.random()*200}px`
container.style.opacity=`${Math.random()}`



  },2000)