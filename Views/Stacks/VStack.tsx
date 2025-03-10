import React from "react"
import { HorizontalAlignment, VerticalAlignment } from "../ModifierTypes/Alignment"
import RectangleViewModifiers from "../BaseTypes/RectangleViewModifiers"

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

    function renderChildren(children: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined): React.ReactNode {
        throw new Error("Function not implemented.")
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
            {renderChildren(modifiers.children)}
        </div>
    )
}