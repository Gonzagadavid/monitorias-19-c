const grid = document.getElementById('grid')
const nLines = 9
const nCol = 9


for(let i = 0; i < nLines; i += 1) {
  const line = document.createElement('div')
  line.className = 'line'
  grid.style.width = (nCol * 52) + 'px'
  grid.style.height = (nLines * 52) + 'px'
  line.style.width = (nCol * 52) + 'px'
  for( let j = 0; j < nCol ; j += 1) {
    const col = document.createElement('div')
    col.className = 'col'
    line.appendChild(col)
  }
    
  grid.appendChild(line)
}




/*
<div#grid>
  <div.line>
   <div.col></div>
   <div.col></div>
   <div.col></div>
   <div.col></div>
  </div.line>
  <div.line>
   <div.col></div>
   <div.col></div>
   <div.col></div>
   <div.col></div>
  </div.line>
  <div.line>
   <div.col></div>
   <div.col></div>
   <div.col></div>
   <div.col></div>
  </div.line>
  <div.line>
   <div.col></div>
   <div.col></div>
   <div.col></div>
   <div.col></div>
  </div.line>
</div>
*/