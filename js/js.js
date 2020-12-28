let modal = document.getElementById("modal"),
body = document.getElementById("body"),
modal2 = document.getElementById("modal2");
let ber = document.querySelectorAll(".start__free");
console.log(ber)


for(let butt = 0; butt<ber.length;butt++){
    ber[butt].onclick = function(){
      if(modal.style.display == "flex"){
              modal.style.display = 'none';
            
          }else {
            modal.style.display = "flex";
          }
          window.onclick=function(e){
            if(e.target == modal){
              modal.style.display='none';
            }
          }
  }
}




const animItems = document.querySelectorAll('.anime');
if(animItems.length>0){
  window.addEventListener('scroll',animOnScroll);
  function animOnScroll(){
    for(let index; index < animItems.length; index++){
      const animItems = animItems[index];
      const animItemHeight = animItems.offsetHeight;
      const animItemOffset = offset(animItem).top;
      console.log(animItems[index].top)
    }
  }
}