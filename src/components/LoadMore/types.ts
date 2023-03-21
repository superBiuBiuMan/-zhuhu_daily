import React from "react";
export interface LoadMoreProps {
    onBottom: () => void,
    options:IntersectionObserverInit,
    style:React.CSSProperties
}
