import { createContext } from "react";

const cores = { bkgA: "green", bkgB: "white", bkgC: "yellow", bkgD: "blue" };
const ColorTheme = createContext(cores);

export default ColorTheme;