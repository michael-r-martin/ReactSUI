import React from "react";
import RectangleViewModifiers from "./BaseTypes/RectangleViewModifiers";

const Rectangle = (modifiers: RectangleViewModifiers) => {
    return (
        <div style={{
            width: modifiers.width ?? 0,
            height: modifiers.height ?? 0,
            backgroundColor: modifiers.backgroundColor ?? "black"
        }}>
        </div>
    )
}

const RoundedRectangle = (modifiers: RectangleViewModifiers) => {
    return (
        <div style={{
            width: modifiers.width ?? 0,
            height: modifiers.height ?? 0,
            backgroundColor: modifiers.backgroundColor ?? "black",
            borderRadius: modifiers.cornerRadius ?? 20
        }}>
        </div>
    )
}

export { Rectangle, RoundedRectangle };