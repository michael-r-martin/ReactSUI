import React from "react";

const renderChildrenHStack = (children: React.ReactNode): React.ReactNode => {
    return Array.isArray(children)
        ? children.map((child, index) => (
            <React.Fragment key={`hstack-item-${index}`}>{child}</React.Fragment>
        ))
        : children;
}

const renderChildrenZStack = (children: React.ReactNode): React.ReactNode => {
    return Array.isArray(children) 
        ? children.map((child, index) => (
            <div key={`zstack-item-${index}`} style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {child}
            </div>
        ))
        : children;
}

const renderChildrenVStack = (children: React.ReactNode): React.ReactNode => {
    return Array.isArray(children)
        ? children.map((child, index) => (
            <React.Fragment key={`vstack-item-${index}`}>{child}</React.Fragment>
        ))
        : children;
}

export { renderChildrenHStack, renderChildrenZStack, renderChildrenVStack };