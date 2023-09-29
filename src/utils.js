export function initializeMatrix(nR,nC) {
  
    const matrix = Array(nR).fill(Array(nC).fill(0));
    
    for (let r = 0; r < nR; r++) {
      for (let c = 0; c< nC; c++) {
        matrix[r][c] = Math.round(Math.random() * 1000) % 3 === 0? 0 : 1;
      }
    }
  
    return matrix;
}

export function cloneMatrix(){
  
}

export function printMatrix(matrix){
  console.warn("M-----------------------")
  matrix.forEach(element => {
      console.log(element,"\n")
  })
  console.warn("M-----------------------")
}