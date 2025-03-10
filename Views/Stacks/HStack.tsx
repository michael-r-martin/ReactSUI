import React from "react"
import RectangleViewModifiers from "../BaseTypes/RectangleViewModifiers"
import { HorizontalAlignment, VerticalAlignment } from "../ModifierTypes/Alignment"

interface HStackModifiers extends RectangleViewModifiers {
    spacing?: number
    horizontalAlignment?: HorizontalAlignment
    verticalAlignment?: VerticalAlignment
    children: React.ReactNode
}

const HStack = (modifiers: HStackModifiers) => {
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

    function renderChildren(children: string | number | bigint | boolean | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | import("react").ReactPortal | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | null | undefined> | null | undefined): import("react").ReactNode {
        throw new Error("Function not implemented.")
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: horizontalAlignment(),
            alignItems: verticalAlignment(),
            gap: modifiers.spacing ?? 8,
            width: modifiers.width ?? 0,
            height: modifiers.height ?? 0,
            backgroundColor: modifiers.backgroundColor ?? "clear",
            borderRadius: modifiers.cornerRadius ?? 20
        }}>
            {renderChildren(modifiers.children)}
        </div>
    )
}