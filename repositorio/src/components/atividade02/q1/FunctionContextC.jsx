
import React from "react";
import ColorTheme from "./MyColorContext";
import FunctionContextD from "./FunctionContextD";

const FunctionContextC = () => {
    return (
        <ColorTheme.Consumer>
            {value => (
                <div>
                    <h1 style={{ backgroundColor: value.bkgC }}>
                        Contexto C
                    </h1>
                    <FunctionContextD />
                </div>
            )}
        </ColorTheme.Consumer>
    );
};

export default FunctionContextC;
