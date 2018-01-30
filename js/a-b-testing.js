function toggleAB(){
  let toggleOff = false;
  let bodyTag = document.getElementsByTagName('body');
  let aBButton = document.getElementsByClassName('a-b-button');
  aBButton[0].addEventListener('click', function() {
    toggleOff = !toggleOff;
    //Remove the a-b-testing class
    if(toggleOff){
      console.log(true);
      bodyTag[0].classList.remove('a-b-testing');
    }
    //Add the a-b-testing-class
    else {
      console.log(false);
      bodyTag[0].classList.add('a-b-testing');
    }
  });
}

toggleAB();