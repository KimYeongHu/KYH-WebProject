let slide = document.querySelectorAll('.slider > #item_box');
const slider = document.querySelector('.slider');
const btn_next = document.querySelector('.btn_next');
const btn_prev = document.querySelector('.btn_prev');
const realSlideCount = slide.length;




setInterval(() => {
    next_btn();
}, 4000);

//---------------li요소복사부분-----------------
makeClone();

function makeClone()
{
    for(let i=0; i<slide.length; i++)
    {
        let cloneSlide = slide[i].cloneNode(true);
        slider.appendChild(cloneSlide);
        cloneSlide.classList.add('clone');
        
    }

    for(let i=slide.length-1; i>=0; i--)
    {
        let cloneSlide = slide[i].cloneNode(true);
        slider.prepend(cloneSlide);
        cloneSlide.classList.add('clone');
        
        
    }


}

//----------------------------------------------

slide = document.querySelectorAll('.slider > #item_box');

let item_total = slide.length;//아이템의 개수
const itemWidth = document.querySelector('#item_box').offsetWidth;//아이템의 크기
let count = 5;  //카운트 시작위치는 5 1200=4? mola 임 가운데부터 시작하기 때문
let sliderVlaue = 0; //슬라이드 될 값


console.log("아이템갯수:"+item_total);

for(let i=0; i<slide.length; i++)
    {
        slide[i].style.transform = 'translateX(-2000px)';  //-2000px 
    }


const next_btn = () => {//다음버튼

    count = count + 1;
    slideValue = itemWidth * count;

    if (count == item_total-5) {//끝페이지 일때
        count = count - 1;
        console.log(count);
        reset_slideValue();
    }
    else {
        
        next_motion();
    }
}

const prev_btn = () => {//이전버튼
    count = count - 1;
    slideValue = -itemWidth * count;

    if (count == 0) {//끝페이지 일때
        count = count + 1;
        console.log(count);
        reset_slideValue();
        

    }
    else {
        prev_motion();
        
    }
}



function next_motion()
{
    
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.transform = `translateX(-${slideValue}px)`;
        slide[i].style.transition = "0.5s";
        
        console.log("count=" + count, "itemWidth=" + itemWidth, "sliderVlaue=" + slideValue,"item_total="+item_total);

    }
}

function prev_motion()
{
    
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.transform = `translateX(${slideValue}px)`;
        slide[i].style.transition = "0.5s";
        console.log("count=" + count, "itemWidth=" + itemWidth, "sliderVlaue=" + slideValue);
    }
}

function next_end()
{
    for (let i = 0; i < slide.length; i++) {
        
        slide[i].style.transform = `translateX(-${slideValue}px)`;
        setTimeout(function(){
        slide[i].style.transition = "0s";
        count = item_total-10;//끝남으로 이동
        slideValue = itemWidth * count;
        slide[i].style.transform = `translateX(-${slideValue}px)`;
        },500);
        
        console.log("count=" + count, "itemWidth=" + itemWidth, "sliderVlaue=" + slideValue,"item_total="+item_total);

    }
}

function reset_slideValue()
{
    for (let i = 0; i < slide.length; i++) {
        
        slide[i].style.transform = `translateX(-${slideValue}px)`;
        setTimeout(function(){
        slide[i].style.transition = "0s";
        count = item_total-10;//처음으로 이동
        slideValue = itemWidth * count;
        slide[i].style.transform = `translateX(-${slideValue}px)`;
        },500);
        
        console.log("count=" + count, "itemWidth=" + itemWidth, "sliderVlaue=" + slideValue,"item_total="+item_total);

    }
}


btn_next.addEventListener('click', function () {
    next_btn();
});

btn_prev.addEventListener('click', function () {
    prev_btn();
});


 


console.log("실제슬라이드 카운트:"+realSlideCount);
