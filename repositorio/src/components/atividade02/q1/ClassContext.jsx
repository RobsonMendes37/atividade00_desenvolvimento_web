import React from "react";
import ColorTheme from "./MyColorContext";

class ClassA extends React.Component {
    render() {
        const cores = { bkgA: "green", bkgB: "white", bkgC: "yellow", bkgD: "blue" };
        return (
            <ColorTheme.Provider value={cores}>
            </ColorTheme.Provider>
        );
    }
}

export default ClassA;
