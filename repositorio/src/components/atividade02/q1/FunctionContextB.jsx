
import React from "react";
import ColorTheme from "./MyColorContext";

const FunctionContextB = () => {
    return (
        <ColorTheme.Consumer>
            {value => (
                <div>
                    <h1 style={{ backgroundColor: value.bkgA }}>
                        Contexto B
                    </h1>
                </div>
            )}
        </ColorTheme.Consumer>
    );
};

export default FunctionContextB;
