import React from "react";  
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; 
import { BrowserRouter } from "react-router-dom"; 
import NotFound from "../components/404/NotFound";

test("404 Page renders correctly", () => {
  render(
    <BrowserRouter>  
      <NotFound />  
    </BrowserRouter>
  );

  expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument(); 
  expect(screen.getByRole("link", { name: /Go Back Home/i })).toBeInTheDocument(); 
});
