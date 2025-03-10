import React from "react"
import RectangleViewModifiers from "../BaseTypes/RectangleViewModifiers"
import { renderChildrenZStack } from "../Utils/RenderChildren"

interface ZStackModifiers extends RectangleViewModifiers {
    children: React.ReactNode
}

const ZStack = (modifiers: ZStackModifiers) => {
    return (
        <div style={{
            position: "relative",
            width: modifiers.width ?? 0,
            height: modifiers.height ?? 0,
            backgroundColor: modifiers.backgroundColor ?? "clear",
            borderRadius: modifiers.cornerRadius ?? 20
        }}>
            {renderChildrenZStack(modifiers.children)}
        </div>
    )
}