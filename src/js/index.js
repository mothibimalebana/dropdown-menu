import '../css/styles.css';

//this module will house the drop-down menu
const dropDownMenu = (function () {
  //variable declarations of buttons in the navbar(navButton) and it's menu items(megaMenu)
  const navButtons = document.querySelectorAll('.navLink button');
  const megaMenu = document.querySelectorAll('.megaMenu');
  let dropDownState = false;

  navButtons.forEach((navButton, buttonIndex) => {
    navButtons[buttonIndex].addEventListener('click', () => {
      if (dropDownState == false) {
        megaMenu[buttonIndex].classList.add('visible');
        dropDownState = true;
      } else {
        megaMenu[buttonIndex].classList.remove('visible');
        dropDownState = false;
      }
    });
  });

  // const dropDownState = navButtons.forEach((navButton, buttonIndex) => {
  //   navButton.addEventListener('click', (navButton, buttonIndex) => {
  //     megaMenu.item(buttonIndex).classList.add('visible');
  //   });
  // });
})();
