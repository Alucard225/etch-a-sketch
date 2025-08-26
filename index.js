
let container = document.querySelector('#container');


function createGrid (x){
    for(let rows = 0; rows < x; rows++){
        for(let cols = 0; cols < x; cols++){
            let cell = document.createElement('div');
            cell.classList.add('grid');
            cell.style.background = 'brown';
            cell.style.width = 600/x + "px";
            cell.style.height = 600/x + "px";
            container.appendChild(cell);

        }
    }
}
container.addEventListener('mouseover', (e)=>{
    e.target.style.background = 'black';
});

createGrid(16);

function removeGrid ()
{
    container.innerHTML = '';
}

let button = document.querySelector("#button");

button.addEventListener('click', ()=>{
    removeGrid();
    createGrid(16);
})

