const navBar= document.getElementById('navbar');
const navbar= document.getElementsByClassName('navbar');
const toggleMenuLines= document.getElementsByClassName('toggleMenu');
const toggleLine1=document.getElementById('line1');
const toggleLine2=document.getElementById('line2');



function showContent(contentId,number) {
    
    
    const side=document.getElementById('side'+contentId);
    const toggle=document.getElementById('toggleMenu'+number);

    navBar.classList.toggle('active');
    toggleLine1.classList.toggle('active');
    toggleLine2.classList.toggle('active');
    if(toggle!==toggleMenu1){

        toggle.style.visibility=(toggle.style.visibility=='visible')?'hidden':'visible';
    }
    
    side.classList.toggle('active');

}
