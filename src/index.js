import {refs} from './js/query';
import {onFormInputChangeHandler} from './js/query';
import debounce from 'lodash.debounce';


//console.log(refs.filterInput);
//console.log(refs.inputList);

refs.filterInput.addEventListener('input', debounce(onFormInputChangeHandler,500));

refs.filterInput.onfocus = function () {
  refs.inputList.style.display = 'block';
  refs.filterInput.style.borderRadius = "5px 5px 0 0";  
};
for (let option of refs.inputList.options) {
  option.onclick = function () {
    refs.filterInput.value = option.value;
    refs.inputList.style.display = 'none';
    refs.filterInput.style.borderRadius = "5px";
  }
};

refs.filterInput.oninput = function() {
  currentFocus = -1;
  var text = refs.filterInput.value.toUpperCase();
  for (let option of refs.inputList.options) {
    if(option.value.toUpperCase().indexOf(text) > -1){
      option.style.display = "block";
  }else{
    option.style.display = "none";
    }
  };
}
var currentFocus = -1;
refs.filterInput.onkeydown = function(e) {
  if(e.keyCode == 40){
    currentFocus++
   addActive(refs.inputList.options);
  }
  else if(e.keyCode == 38){
    currentFocus--
   addActive(refs.inputList.options);
  }
  else if(e.keyCode == 13){
    e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (refs.inputList.options) refs.inputList.options[currentFocus].click();
        }
  }
}

function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }
  }

