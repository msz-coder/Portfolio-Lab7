import { formatFileSizeDisplay } from "../utils";

test("formats file size correctly", () => {
    expect(formatFileSizeDisplay(500)).toBe("500 KB"); // Regular case
    expect(formatFileSizeDisplay(1023)).toBe("1023 KB"); // Upper KB limit
    expect(formatFileSizeDisplay(1024)).toBe("1 MB"); // Exactly 1 MB
    expect(formatFileSizeDisplay(2048)).toBe("2 MB"); // More than 1 MB
    expect(formatFileSizeDisplay(0)).toBe("0 KB"); // Edge case (zero)
    expect(formatFileSizeDisplay(-100)).toBe("-100 KB"); // Negative values
});
