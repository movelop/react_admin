import React from "react";
import ReactDOM from "react-dom/client";
import { registerLicense } from '@syncfusion/ej2-base';

import { ContextProvider } from "./context/ContextProvider";
import App from "./App";
import './index.css';


registerLicense('ORg4AjUWIQA/Gnt2VVhhQlFac1pJW3xLeEx0RWFbb1l6dlxMYFlBNQtUQF1hS35WdEJjXntddHNWQGdf');


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>
);