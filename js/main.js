window.onload = function () {
    var line0 = document.getElementById('line0');
    var line1 = document.getElementById('line1');
    var line2 = document.getElementById('line2');

    var menuBtn = document.querySelector('.menu_btn');
    var menu_box = document.querySelector('.menu_box');


    menuBtn.addEventListener('click', function (){

        if (line1.style.display == 'none') {
            line0.style.transform = 'translateY(0px) translateX(0) rotate(0deg)';
            line1.style.display = 'block';
            line2.style.transform = 'translateY(0px) translateX(0) rotate(0deg)';

            menu_box.style.visibility = 'hidden';
            menu_box.style.transform='translateX(100%)';
        }

        else
        {
            line0.style.transform = 'translateY(7.5px) translateX(0) rotate(45deg)';
            line1.style.display = 'none';
            line2.style.transform = 'translateY(-7.5px) translateX(0) rotate(135deg)';
            
            menu_box.style.visibility = 'visible';
            menu_box.style.transform='translateX(0%)';
            
        }

    });
    
}