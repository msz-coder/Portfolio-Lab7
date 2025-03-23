import React from "react";  
import { render, screen } from "@testing-library/react";
import ExperienceCard from "../components/experienceCard/ExperienceCard";

test("ExperienceCard renders with props", () => {
    const mockProps = {
        cardInfo: {
            company: "Example Inc.",
            role: "Software Engineer",
            companylogo: "https://via.placeholder.com/150", 
            date: "Jan 2023 - Present",
            desc: "Worked on various frontend projects",
            descBullets: ["Developed new UI features", "Fixed bugs"]
        },
        isDark: false,  
    };

    render(<ExperienceCard {...mockProps} />);
    
    expect(screen.getByText(/Example Inc./i)).toBeInTheDocument();
    expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
});
