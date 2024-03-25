

import React from "react";
import ColorTheme from "./MyColorContext";

const FunctionContextD = () => {
    return (
        <ColorTheme.Consumer>
            {value => (
                <div>
                    <h1 style={{ backgroundColor: value.bkgD }}>
                        Contexto D
                    </h1>
                </div>
            )}
        </ColorTheme.Consumer>
    );
};

export default FunctionContextD;