import { CSSProperties } from "react"

interface BaseViewModifiers {
    width?: number
    height?: number
    backgroundColor?: CSSProperties["backgroundColor"]
    cornerRadius?: number
}

export default BaseViewModifiers;