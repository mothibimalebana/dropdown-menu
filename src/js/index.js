import '../css/styles.css';

//this module will house the drop-down menu
const dropDownMenu = (function () {
  //variable declarations of buttons in the navbar(navButton) and it's menu items(megaMenu)
  const navButtons = document.querySelectorAll('.navLink button');
  const megaMenu = document.querySelectorAll('.megaMenu');
  const dropDownState = false;

  navButtons.forEach((navButton, buttonIndex) => {
    navButtons[buttonIndex].addEventListener('click', () => {
      megaMenu[buttonIndex].classList.add('visible');
    });
  });

  // const dropDownState = navButtons.forEach((navButton, buttonIndex) => {
  //   navButton.addEventListener('click', (navButton, buttonIndex) => {
  //     megaMenu.item(buttonIndex).classList.add('visible');
  //   });
  // });
})();
