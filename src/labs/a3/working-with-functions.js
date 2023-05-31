import ES5Functions from "./es5-functions";
import VariableTypes from "./variable-types";
import BooleanVariables from "./boolean-variables";
import IfElse from "./if-else";
import TernaryOperator from "./ternary-operator";

function WorkingWithFunctions() {
    console.log('Working with functions');
    return (
        <div>
            <h1>Working With Functions</h1>
            <ES5Functions />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <WorkingWithFunctions />
        </div>
    );
}
export default WorkingWithFunctions