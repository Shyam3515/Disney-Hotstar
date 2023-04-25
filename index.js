// carousel sliders
const carousel = document.getElementById('carousel')
let sliders = [];
let slideIndex = 0;

let movies = [
    {
        name: 'falcon and the winter soldier',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: './images/slider 2.png'
    },
    {
        name: 'loki',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: './images/slider 1.png'
    },
    {
        name: 'wanda vision',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: './images/slider 3.png'
    },
    {
        name: 'raya and the last dragon',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: './images/slider 1.png'
    },
    {
        name: 'luca',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: './images/slider 5.png'
    }
]

// function createSlide(){
//     movies.forEach( movie =>{
//         const {name,des,image} = movie;
//         if(slideIndex >= movies.length){
//             slideIndex = 0;
//         };
    
//         const div = document.createElement('div');
        
//         div.innerHTML = `
//         <div class="slide-content">
//             <h1 class="movie-title">${name}</h1>
//             <p class="movie-des">${des}</p>
//         </div>
//         <img src="${image}" alt="">
//        `;
//        div.className = "slider";
//        carousel.appendChild(div);
//        sliders.push(div);
//        slideIndex++;
       
//        //Sliding
//        if(sliders.length){
//         sliders[0].style.marginLeft = `calc(-${100 * (sliders.length -2)}% - ${30 * (sliders.length - 2)}px)`;
//        }
//     });
// };


const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    // Create DOM Elements
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    // setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };

createSlide();
// for(let i=0;i<3;i++){
//      createSlide();
// }
setInterval(()=>{
    createSlide();
},3000)


// Video Cards
let cardContainers = document.querySelectorAll('.card-container');
let preButtons = document.querySelectorAll('.pre-button');
let nxtButtons = document.querySelectorAll('.nxt-button');

cardContainers.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;

    nxtButtons[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth - 200;
    })

    preButtons[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth + 200;
    })
});

//coupon code
function onLoad(){
    document.getElementById('coupon').style.opacity='1';
    document.getElementById('coupon').style.visibility='visible';
    document.getElementById('body').style.opacity='0.4';
}
function closeCoupon(){
    document.getElementById('coupon').style.visibility='hidden';
    document.getElementById('body').style.opacity='1';
}