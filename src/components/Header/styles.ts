import { NavLink as BaseNavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem;
    transition: all ease .2s;

    nav{
        display: flex;
        gap: 0.75rem;

    }

    @media (max-width: 520px) {
        padding: 2rem 1rem;
    }

`

const BaseNav = styled(BaseNavLink)`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;

    
    text-decoration: none;
`

export const NavLocation = styled(BaseNav)`
    background-color: ${props => props.theme["purple-100"]};
    color: ${props => props.theme["purple-700"]}; 
`

export const NavCart = styled(BaseNav)`
    background-color: ${props => props.theme["yellow-100"]};
    color: ${props => props.theme["yellow-700"]}; 
    position: relative;
    padding: 0;
    justify-content: center;

    width: 2.375rem;
    height: 2.375rem;

    span{
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 99px;
        background-color: ${props => props.theme["yellow-700"]};
        color: ${props => props.theme["white-100"]};

        font-size: 0.75rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        margin-top: -2rem;
        right: -8px;
    }
`