export const validateMatrix = ( matrix ) => {
    let rows = matrix.length;	
    for(let i=0;i<rows;++i) {
    
        let rowsum = getRowSum(matrix,i);
        let colsum = getColSum(matrix,i);
        let ldsum = getLDSum(matrix);
        let rdsum = getRDSum(matrix);
        
        if( rowsum === -3 || colsum ===-3 || ldsum === -3 || rdsum === -3 ) {
            return("O Wins");
        }else if( rowsum === 3 || colsum === 3 || ldsum === 3 || rdsum === 3 ) {
            return("X Wins");
        }        
    }
    return("Draw");
}

const getRDSum = (matrix) => {
    let sum = 0 , len = matrix[0].length-1;
    for(let j=len;j>=0;--j) {
        sum = sum + (matrix[len-j][j] === 'O' ? -1 : (matrix[len-j][j] === '#' ? 0 : 1));
    }
    return sum;
}

const getLDSum = (matrix) => {
    let sum = 0;
    for(let j=0;j<matrix[0].length;++j) {
        sum = sum + (matrix[j][j] === 'O' ? -1 : (matrix[j][j] === '#' ? 0 : 1));
    }
    return sum;
}

const getColSum = (matrix,i) => {
    let sum = 0;
    for(let j=0;j<matrix[i].length;++j) {
        sum = sum + (matrix[j][i] === 'O' ? -1 :(matrix[j][i] === '#' ? 0 : 1));
    }
    return sum;
}

const getRowSum = (matrix, i) => {

    let row = matrix[i] , sum = 0;
    for(let j=0;j<row.length;++j) {
        sum = sum + (row[j] === 'O' ? -1 : (row[j] === '#' ? 0 : 1));
    }
    return sum;
    
}