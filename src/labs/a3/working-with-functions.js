import ES5Functions from "./functions/es5-functions";
import ArrowFunctions from "./functions/arrow-functions";
import ImpliedReturn from "./functions/implied-return";
import ParenthesisAndParameters from "./functions/function-parenthesis-and-parameters";

function WorkingWithFunctions() {
    console.log('Working with functions');
    return (
        <div>
            <h1>Functions</h1>
            <ES5Functions />
            <ArrowFunctions />
            <ImpliedReturn />
            <ParenthesisAndParameters />
        </div>
    );
}
export default WorkingWithFunctions