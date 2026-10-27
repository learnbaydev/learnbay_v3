import { createContext } from "react";

/**
 * Set by Popup when it renders the lead-form design, so the shared Form inside
 * it can switch to the matching field layout. Outside a popup it stays null and
 * inline forms keep their own markup.
 */
const PopupDesignContext = createContext(null);

export default PopupDesignContext;
