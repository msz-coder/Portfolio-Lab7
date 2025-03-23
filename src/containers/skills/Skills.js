import React, { useState, useContext, useEffect, useRef } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { illustration, skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null); // Ref for the dropdown container

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Add data-theme attribute to the root element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  if (!skillsSection.display) {
    return null;
  }

  // Get unique categories from skills
  const uniqueCategories = [
    "All",
    ...new Set(skillsSection.softwareSkills.map((skill) => skill.category)),
  ];

  // Filter skills based on search query and selected category
  const filteredSkills = skillsSection.softwareSkills.filter((skill) => {
    const matchesSearch =
      skill.skillName.toLowerCase().includes(searchQuery.toLowerCase()) || // Match skill name
      skill.category.toLowerCase().includes(searchQuery.toLowerCase()); // Match category
    const matchesCategory =
      selectedCategory === "All" || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Debugging: Log the filtered skills
  console.log("Filtered Skills:", filteredSkills);

  // Clear search and category
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
      />
      <div className={isDark ? "dark-mode main" : "main"} id="skills">
        <div className="skills-main-div">
          <Fade left duration={1000}>
            <div className="skills-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={codingPerson} />
              ) : (
                <img
                  alt="Man Working"
                  src={require("../../assets/images/developerActivity.svg")}
                />
              )}
            </div>
          </Fade>
          <Fade right duration={1000}>
            <div className="skills-text-div">
              <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
                {skillsSection.title}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode subTitle skills-text-subtitle"
                    : "subTitle skills-text-subtitle"
                }
              >
                {skillsSection.subTitle}
              </p>

              {/* Search Bar with Category Dropdown */}
              <div className="search-bar">
                <div
                  ref={dropdownRef}
                  className="category-dropdown"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span>{selectedCategory}</span>
                  <i className={`fas fa-chevron-${dropdownOpen ? "up" : "down"}`}></i>
                  {dropdownOpen && (
                    <ul className="dropdown-list">
                      {uniqueCategories.map((category, index) => (
                        <li
                          key={index}
                          onClick={() => {
                            setSelectedCategory(category);
                            setDropdownOpen(false);
                          }}
                          className={selectedCategory === category ? "selected" : ""}
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <i className="fas fa-search"></i>
                <button className="clear-button" onClick={clearFilters}>
                  Clear
                </button>
              </div>

              {/* Display Filtered Skills */}
              <SoftwareSkill filteredSkills={filteredSkills} />
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}