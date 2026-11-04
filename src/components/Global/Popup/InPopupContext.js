import { createContext } from "react";

// True for anything rendered inside the Popup frame.
const InPopupContext = createContext(false);

export default InPopupContext;
