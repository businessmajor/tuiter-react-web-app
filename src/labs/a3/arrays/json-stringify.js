const squares = [1, 4, 16, 25, 36];
console.log("JSON Stringify");
console.log("squares:", squares);
console.log("JSON.stringify(squares):", JSON.stringify(squares));


function Stringify(){ 
    const squares = [1, 4, 16, 25, 36];
    
    return (
        <div>
            <h3>JSON Stringify</h3>
            squares = { JSON.stringify(squares) } <br />
        </div>
    );
}


export default Stringify;
