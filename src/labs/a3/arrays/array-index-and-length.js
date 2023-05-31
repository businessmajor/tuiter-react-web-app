// array-index-and-length.js

function ArrayIndexAndLength(){ 
    let numberArray1 = [1, 2, 3, 4, 5];
    const length1 = numberArray1.length;
    const index1 = numberArray1.indexOf(3);
    
    console.log("Array Index and Length");
    console.log("numberArray1:", numberArray1);
    console.log("length1:", length1);
    console.log("index1:", index1);
    
    return (
        <div>
            <h2>Array index and length</h2>
            length1 = {length1}<br />
            index1 = {index1}<br />   
        </div>
    );
}


export default ArrayIndexAndLength;
