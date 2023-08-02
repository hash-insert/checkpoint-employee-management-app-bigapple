import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { EmployeeProvider } from "./context/employeeDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <EmployeeProvider>
          <App />
        </EmployeeProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
