let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let tree=document.getElementById('tree');
let plant=document.getElementById('plant');

window.addEventListener("scroll",function(){
    let value=this.window.scrollY
    hill1.style.top=value*0.25+'px';
    hill5.style.left=value+'px';
    hill4.style.left='-'+value+'px';
    leaf.style.left=value+'px';
    leaf.style.top='-'+value+'px';
    text.style.top=value+'px';
    tree.style.top='-'+value*0.25+'px';

    let zoomValue = 1 + value * 0.001; 
    
    tree.style.transform = 'scale(' + zoomValue + ')';
    text.style.transform = 'scale(' + zoomValue + ')';
    hill2.style.transform = 'scale(' + zoomValue + ')';
    hill3.style.transform = 'scale(' + zoomValue + ')';
})
window.addEventListener("scroll", function () {
    let value = this.window.scrollY;
  
    // Adjusting the top property with a minimum value of 30%
    // let topValue = Math.max(value * 0.25, 0.3 * window.innerHeight);
  
    // Applying zoom effect to the text
    // Adjust the multiplier for the desired zoom effect
  
    // Applying styles to elements
    hill1.style.top = text.style.top = topValue + 'px';
    hill5.style.left = leaf.style.left = value + 'px';
    hill4.style.left = '-' + value + 'px';
  
    // Applying the zoom effect to the text
    tree.style.transform = 'scale(' + zoomValue + ')';
  });
  