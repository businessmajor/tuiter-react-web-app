import React, { useState } from "react";

function Exam() {
    let qwe = [123, 234, 345, 456, 567];

    const wer = (tyu) => {
        qwe = tyu;
    };

    const handleClick = (rty) => {
        const filteredArray = qwe.filter((yui) => yui !== rty);
        wer(filteredArray);
        console.log(qwe);
    };


    return (
        <div>
            <button onClick={() => handleClick(345)}>BUTTON</button>
        </div>
    );
}

export default Exam;

