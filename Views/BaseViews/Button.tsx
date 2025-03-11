import React, { useState } from "react";
import BaseViewModifiers from "../BaseTypes/BaseViewModifiers";

interface ButtonModifiers extends BaseViewModifiers {
    onPress: () => void;
    children: React.ReactNode;
}

// The button should display the exact view that is passed in.
const Button = (modifiers: ButtonModifiers) => {
    const [opacity, setOpacity] = useState(1);

    return (
        <button
            onClick={modifiers.onPress}
            onMouseEnter={() => setOpacity(0.5)}
            onMouseLeave={() => setOpacity(1)}
            style={{
                backgroundColor: "transparent",
                border: "none",
                padding: 0,
                margin: 0,
                opacity: opacity,
            }}
        >
            {modifiers.children}
        </button>
    )
};

export default Button;