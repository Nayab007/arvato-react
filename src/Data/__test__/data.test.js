import React from 'react';
import ReactDom from 'react-dom';
import Data from '../data';


it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<Data></Data>, div)
})