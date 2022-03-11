// import functions and grab DOM elements
const lakeDropDown = document.getElementById('lake-dropdown');
const forestDropDown = document.getElementById('forest-dropdown');
const treehouseDropDown = document.getElementById('treehouse-dropdown');

const lakeEl = document.getElementById('lake-image');
const forestEl = document.getElementById('forest-image');
const treehouseEl = document.getElementById('treehouse-image');

// need to add Stats dom for tracking everything that I do 

const sloganEl = document.getElementById('slogans');
const sloganInputEl = document.getElementById('slogans-input');
const sloganButtonEl = document.getElementById('slogan-button');
const sloganList = document.getElementById('report');
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

sloganButtonEl.addEventListener('click', ()=>{
    
    const newSlogan = sloganInputEl.value;

    sloganEl.push(newSlogan);
    
    displaySlogan();
    sloganInputEl.value = '';
});

  // get user input

  //need to fix displaySlogan function so it actually works. I think my syntax may be wrong? 


function displaySlogan() {
    
    sloganEl.textContent = '';
        
    for (let slogan of slogans) {
        
        const pTag = document.createElement('p');
    
        pTag.textContent = slogan;
        pTag.classList.add('sloganList');
        
        sloganEl.append(pTag);
        
    }
}
    


function displayStats() {
    sloganList.textContent = `You have changed the lake ${lakeCount} times.
    You have changed the forest ${forestCount} times.
    You have changed the tree house ${treehouseCount} times.`;
}
