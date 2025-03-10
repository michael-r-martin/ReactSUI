import React from "react"
import { HorizontalAlignment, VerticalAlignment } from "../ModifierTypes/Alignment"
import RectangleViewModifiers from "../BaseTypes/RectangleViewModifiers"
import { renderChildrenVStack } from "../Utils/RenderChildren"

interface VStackModifiers extends RectangleViewModifiers {
    spacing?: number
    verticalAlignment?: VerticalAlignment
    horizontalAlignment?: HorizontalAlignment
    children: React.ReactNode
}

const VStack = (modifiers: VStackModifiers) => {
    const verticalAlignment = () => {
        switch (modifiers.verticalAlignment) {
            case VerticalAlignment.TOP:
                return "flex-start"
            case VerticalAlignment.BOTTOM:
                return "flex-end"
            case VerticalAlignment.CENTER:
                return "center"
            default:
                return "center"
        }
    }

    const horizontalAlignment = () => {
        switch (modifiers.horizontalAlignment) {
            case HorizontalAlignment.LEADING:
                return "flex-start"
            case HorizontalAlignment.TRAILING:
                return "flex-end"
            case HorizontalAlignment.CENTER:
                return "center"
            default:
                return "flex-start"
        }
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: verticalAlignment(),
            alignItems: horizontalAlignment(),
            gap: modifiers.spacing ?? 8,
            width: modifiers.width ?? 0,
            height: modifiers.height ?? 0,
            backgroundColor: modifiers.backgroundColor ?? "clear",
            borderRadius: modifiers.cornerRadius ?? 20
        }}>
            {renderChildrenVStack(modifiers.children)}
        </div>
    )
}

export default VStack