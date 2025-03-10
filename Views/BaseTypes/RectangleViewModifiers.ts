import { CSSProperties } from "react"

interface RectangleViewModifiers {
    width?: number
    height?: number
    backgroundColor?: CSSProperties["backgroundColor"]
    cornerRadius?: number
}

export default RectangleViewModifiers;