import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ToggleSwitch from "../components/ToggleSwitch/ToggleSwitch";
import StyleContext from "../contexts/StyleContext"; 

test("ToggleSwitch renders and toggles state", () => {
    const mockContextValue = {
        isDark: false, 
        changeTheme: jest.fn(), 
    };

    render(
        <StyleContext.Provider value={mockContextValue}>
            <ToggleSwitch />
        </StyleContext.Provider>
    );

    const toggleButton = screen.getByRole("checkbox"); 

    expect(toggleButton).toBeInTheDocument();
    
    fireEvent.click(toggleButton); 

    expect(mockContextValue.changeTheme).toHaveBeenCalledTimes(1); 
});
