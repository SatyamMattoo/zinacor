const navBar= document.getElementById('navbar');
const navbar= document.getElementsByClassName('navbar');
const toggleMenuLines= document.getElementsByClassName('toggleMenu');
const toggleLine1=document.getElementById('line1');
const toggleLine2=document.getElementById('line2');
const sideContact=document.getElementById('sidecontact');


const contentItems = document.getElementsByClassName('contentItem');
const menuItems = document.getElementsByClassName('menuItem');


function showContent(contentId,number) {


    const toggle=document.getElementById('toggleMenu'+number);

    navBar.classList.toggle('active');
    toggleLine1.classList.toggle('active');
    toggleLine2.classList.toggle('active');
    sideContact.classList.toggle('active');
    toggle.style.visibility=(toggle.style.visibility=='visible')?'hidden':'visible';


    // Hide the close button
    // document.getElementById('close-button').style.display = 'none';

    // for (var i = 0; i < contentItems.length; i++) {
    //     contentItems[i].classList.remove('active');
    //     menuItems[i].classList.remove('active');
    // }

    // var content = document.getElementById(contentId);
    // var menuItem = document.getElementById(contentId + '-menu');

    // content.classList.add('active');
    // menuItem.classList.add('active');

    // // Show the close button
    // document.getElementById('close-button').style.display = 'block';

    // // Close the menu after an option is clicked
    // toggleMenu();
}


function toggleMenu() {
    var menu = document.getElementById('menu');
    var menuToggle = document.getElementById('menu-toggle');

    menu.classList.toggle('open');
    menuToggle.classList.toggle('active');
}