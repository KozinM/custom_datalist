import Notiflix from 'notiflix';


const APIKEY = '565e4989d784811de7dff7d665000157';
const APIURL = 'https://api.themoviedb.org/';

export const refs = {
    filterInput: document.querySelector('#input'),
    inputList: document.querySelector('#browsers')

}

/* функция поска ключевого слова */
export async function fetchKeyWordsSearch(token,query){
    const response = await (await fetch(APIURL+`3/search/keyword?api_key=${token}&language=en-US&query=${query}`)).json()
    return response;
  }


export function onFormInputChangeHandler(event) {
    let wordSearch = event.target.value;
    if(!wordSearch||wordSearch===''){
      //refs.filterFormSubmitButton.disabled = false;
      return;
    }
    fetchKeyWordsSearch(APIKEY,wordSearch)
    .then(response=>{return response.results})
    .then(response=>{renderKeyWords(refs.inputList, response)})
    .catch(error=>console.log(error));
    
  }
  
  function renderKeyWords (htmlElem, keyWords){
  
   let stringElement = '';
    htmlElem.innerHTML = '';
    if (!keyWords||keyWords.length==0) {
      Notiflix.Notify.failure('Sorry, it seems there is no such keyword. Please enter a valid key word');
      //refs.filterFormSubmitButton.disabled = true;
    return ;
    }
  
    stringElement = keyWords.map(keyword=>{return `<option value="${keyword.name}" id="${keyword.id}">${keyword.name}</option>`});
    htmlElem.insertAdjacentHTML('beforeend', stringElement.join(''));
    getKeyWordId();
    //console.log(refs.filterInput.value);
   }
  
   function getKeyWordId() {
    
      const datalist = refs.filterInput;
      const inputChildren = refs.inputList.children;
  
      for(let i = 0; i < inputChildren.length; i++){
        //console.log('in get key word id: option '+ inputChildren[i].value+ ' input value  '+  datalist.value+'  equation' + (inputChildren[i].value === datalist.value));
          if (inputChildren[i].value === datalist.value.trim()) {
            //refs.filterFormSubmitButton.disabled = false;
            keyword = inputChildren[i].id;
            return 
          }
      }
      Notiflix.Notify.failure('Please choose from word and phrases in list!');
      //refs.filterFormSubmitButton.disabled = true;
  
   }
  
  