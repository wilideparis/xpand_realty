
var e =document.querySelector('.one')

const {height} = window
gsap.registerPlugin(ScrollTrigger);
 var tl = gsap.timeline();
 tl.to(".one", {scrollTrigger:{
     trigger: ".one",
     start:"center center",
      end:'top -2000%',
     scrub:1,
 },
 delay:0,
 scale:1200,
 duration:3,
 
},);

tl.to(".show", {scrollTrigger:{
  trigger: ".p2",
  start:"top 90%",
   end:'top 60%',
   pin:".p1",
  scrub:1,
},
delay:0,
opacity:1,
duration:3,

},);

tl.to(".hide", {scrollTrigger:{
  trigger: ".p2",
  start:"top 60%",
   end:'+=1000',


   pin:".p1",
  scrub:3,
},
opacity:0.6,
duration:3,
 
},);


// this is the animation of the second paragraph

const btn = document.querySelector('.btn')

btn.addEventListener('click', function(){
 
 document.querySelector('.slide-two').classList.remove("hidden1")

 gsap.to('.btn', {y: '-600', duration: 3})
 gsap.to('.slide-two', {y: '-400', duration: 3})
 document.querySelector('body').style.overflow = 'hidden';
})

document.querySelector('.slide-two').addEventListener('keyup', function(e){
 console.log(e)
 if(e.keyCode != 13){
  return ;
 }
  document.querySelector('body').style.removeProperty('overflow')
 document.querySelector('.slide-three').classList.remove("hidden2")

 const neymar = gsap.timeline()

 neymar
     .to('.slide-two', {y: '-1000', duration: 3})
     .to('.slide-three', {y: '-900', duration: 3}, '<')
  document.querySelector('body').style.overflow = 'hidden';
})

var allowedNumbers =[48,49,50,51,52,53,54,55,56,57];
 var entry = document.querySelectorAll('input');

  
  for(let k=0;k<entry.length;k++){ 
       
   
    entry[k].addEventListener('keyup',(e)=>{  
      
          var a =e.keyCode;console.log(a);
          for(let i=0;i<allowedNumbers.length;i++){
                if(a == allowedNumbers[i]){
                 
                  k++;
                entry[k].focus();
                }
               
                }
                 if(a==8){
                  k=k-1;
                  entry[k].focus();
                }
        }) 
 
   
 }
windowH=window.innerHeight
console.log(windowH)
 var p2 = document.querySelector('.p2')
 

    gsap.registerPlugin(ScrollTrigger)
    gsap.from('.p2',{
      scrollTrigger:{
        
        trigger:'.p2',
        start:'center center',
        scrub:1,
        pin:'.p2',
        pinSpacing:true,
      },
      fontSize:250,
      duration:3,
      opacity:0,
       }) 

         let k = 0.2;

        window.addEventListener('scroll',()=>{

          var both = document.querySelectorAll('#both');
          for(let i=0;i < both.length ; i++){
          var p2 = document.querySelector('.p2');
       var   top = p2.getBoundingClientRect().top;             
       
       if(top<30){
        
        both[i].style.fontSize=( top+30)+"px";
     
       }
        
      }
           console.log(top)

// this part will be responsible for making the word Expaand to scroll up slowly
var p1 = document.querySelector('.p1');
var hide = document.querySelector('.hide')       
var W = window.scrollY 
       var rate = W *0.3;
      
       if(hide.style.opacity== 0.6){
        // alert('slow')
       p1.style.transform ='translate3d(0px,'+rate+'px,0px)'
       }

  var disTop =p2.getBoundingClientRect().top;
  var p3 = document.querySelector('.p3');
  if(W>=1000 && W<=1800)
  {
   
  var t = -((W-100)*1.27);
    
    setTimeout(()=>{
      p3.style.transform = `translate3d(0px,${  -((W-1000)*0.75)}px,0px)`;
    },500)
    
  
  }
  count=0;
  var btn = document.querySelector('.btn');
  var btnTop = btn.getBoundingClientRect().top/window.innerHeight * 100;
 
 if(btnTop>=80){
 count++;
   for(let i=0;i<both.length;i++){
  
    }
 }

 var text3 = document.querySelector('.black > h6');
 var text3Position = text3.getBoundingClientRect().top;
numberEntry = document.querySelector('#link')



numberEntry.addEventListener('keyup',()=>{
  
  if(text3Position==0){
      setInterval(()=>{
      if(e.style.opacity==1){

      gsap.to('.black',{color:'000',duration:3})
      gsap.to('.one',{opacity:0,duration:3})
      
     
       }else if(e.style.opacity==0){
        gsap.to('.one',{opacity:1,duration:3})
      
        gsap.to('.black',{color:'fff',duration:3})
       }
      
        },6000)
     }
  })
} )
// this will help me to make the stars

/*function getRandomCoordinates(){
  var x=Math.floor(Math.random().window.innerWidth);

  var y=Math.floor(Math.random().window.innerHeight);

  return [x,y];

}

var numstar = 100;

for(let i=0;i< numstar.length;i++){     

  var star = document.createElement('span');

  var Xy = getRandomCoordinates();
  star.style.top = xy[1] + "px";

  star.style.left = xy[0] + "px";

  document.body.appendChild(star);

}

*/



