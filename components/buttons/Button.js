import styled from "styled-components";
import React from "react";

const ButtonWrapper = styled.button`
    position: relative;
    background-color: var(--primary);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    color: white;
    z-index: 20;
    border-radius: 30px;
    font-family: IBM Plex Sans, 'sans-serif';
    letter-spacing: 0.025em;
    font-weight: 500;
    overflow: hidden;
    padding: ${props =>
        props.size === "small" ?
            "0.4rem 1rem"
            :
            props.size === "large" ?
                "0.8rem 2rem"
                :
                "0.6rem 1.5rem"
    };
    font-size: ${props =>
        props.size === "small" ?
            "0.85rem"
            :
            props.size === "large" ?
                "1rem"
                :
                "0.95rem"
    };
    width: ${props =>
        props.fullWidth ?
            "100%"
            :
            "auto"
    };

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--secondary);
        transition: all 300ms cubic-bezier(0.39, 0.58, 0.57, 1);
        transform: translateX(100%);
    }
    &:hover::after {
        transform: translateX(0%)
    }
`
const TextWrapper = styled.span`
    position: relative;
    z-index: 10;
    filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
`

export const Button = ({ size, onClick, disabled, fullWidth, children }) => {
    return (
        <ButtonWrapper
            fullWidth={fullWidth}
            size={size}
            onClick={onClick}
            disabled={disabled}
        >
            <TextWrapper>{children}</TextWrapper>
        </ButtonWrapper>
    )
}