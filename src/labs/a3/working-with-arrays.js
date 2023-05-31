import ArrayIndexAndLength from "./arrays/array-index-and-length"
import AddingAndRemovingDataToFromArrays from "./arrays/adding-and-removing-data-to-from-arrays"
import ForLoops from "./arrays/for-loops"
import MapFunction from "./arrays/map-function"
import Stringify from "./arrays/json-stringify"
import FindFunction from "./arrays/find-function"
import FindIndex from "./arrays/find-index"
import FilterFunction from "./arrays/filter-function"


function WorkingWithArrays() {
    console.log("Working with Arrays");
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    let variableArray1 = [
        functionScoped,   blockScoped,
        constant1,        numberArray1,   stringArray1
    ];

    console.log("functionScoped:", functionScoped);
    console.log("blockScoped:", blockScoped);
    console.log("constant1:", constant1);
    console.log("numberArray1:", numberArray1);
    console.log("stringArray1:", stringArray1);
    console.log("variableArray1:", variableArray1);

    return (
        <div>
            <h1>Working with Arrays</h1>
            numberArray1 = {numberArray1}<br />
            stringArray1 = {stringArray1}<br />
            variableArray1 = {variableArray1}<br />
            <ArrayIndexAndLength />
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops />
            <MapFunction />
            <Stringify />
            <FindFunction />
            <FindIndex />
            <FilterFunction />
        </div>
    );
}
export default WorkingWithArrays