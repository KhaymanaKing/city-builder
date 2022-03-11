// import functions and grab DOM elements
const lakeDropDown = document.getElementById('lake-dropdown');
const forestDropDown = document.getElementById('forest-dropdown');
const treehouseDropDown = document.getElementById('treehouse-dropdown');

const lakeEl  = document.getElementById('lake-image');
const forestEl  = document.getElementById('forest-image');
const treehouseEl  = document.getElementById('treehouse-image');

const sloganEl = document.getElementById('slogans');
const sloganInputEl = document.getElementById('slogans-input');
const sloganButtonEl = document.getElementById('slogan-button');
// let state

let lakeCount = 0;
let forestCount = 0;
let treehouseCount = 0;

let slogans = [];
// set event listeners 
lakeDropDown.addEventListener('change', () => {
    const id = lakeDropDown.value;
    lakeCount++;
    lakeEl.src = `./assets/lake${id}.jpg`;
    displayStats();
});

forestDropDown.addEventListener('change', () => {
    const id = forestDropDown.value;
    forestCount++;
    forestEl.src = `./assets/forest${id}.jpg`;
    displayStats();

});

treehouseDropDown.addEventListener('change', () => {
    const id = treehouseDropDown.value;
    treehouseCount++;
    treehouseEl.src = `./assets/treehouse${id}.jpg`;
    displayStats();
});

sloganButtonEl.addEventListener('click', () =>{
    const newSlogan = sloganInputEl.value;

    slogans.push(newSlogan);
    displaySlogan();
    sloganInputEl.value = '';
});
  // get user input
function displaySlogan(){
    sloganEl.textContent = '';
    for (let slogan of slogans){

        const pTag = document.createElement('p');
        pTag.textContent = slogan;
        pTag.classList.add('sloganList');
        sloganEl.append(pTag); 
    }
}
  // use user input to update state 
  // update DOM to reflect the new state
