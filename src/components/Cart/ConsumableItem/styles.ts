import styled from "styled-components";

export const ConsumableItemContainer = styled.div`
    width: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem;
    padding-top: 0;
    background-color: ${props => props.theme["white-300"]};
    border-top-right-radius: 2.25rem;
    border-bottom-left-radius: 2.25rem;
    margin-top: 1.25rem;

    img{
        margin-top: -1.25rem;
    }

    ul{
        display: flex;
        gap: 0.25rem;
        list-style: none;
    }

    h3{
        font-size: 1.25rem;
        font-family: "Baloo 2", sans-serif;
        margin-top: 1rem;
        text-align: center;
    }

    p{
        font-size: 0.875rem;
        color: ${props => props.theme["gray-500"]};
        margin-top: 0.5rem;
        text-align: center;
    }
`


export const BadgeTag = styled.span`
    padding: 0.5rem;
    border-radius: 2rem;
    background-color: ${props => props.theme["yellow-100"]};
    color: ${props => props.theme["yellow-700"]};
    text-transform: uppercase;
    font-style: bold;
    font-size: 0.625rem;
    margin-top: 0.75rem;
    display: block;
`

export const CounterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    width: 100%;
    font-family: "Baloo 2", sans-serif;

    span{
        color: ${props => props.theme["gray-500"]};
        font-size: 1.25rem;
    }

    strong{
        font-size: 1.5rem;
    }

    &>button{
        width: 2.375rem;
        height: 2.375rem;
        border-radius: 6px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${props => props.theme["purple-700"]};
        color: ${props => props.theme["white-100"]};
        border: none;
        cursor: pointer;
    }
`

export const Counter = styled.div`
    background-color: ${props => props.theme["white-500"]};
    color: ${props => props.theme["gray-900"]};
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;

    button{
        border: none;
        background-color: transparent;
        color: ${props => props.theme["purple-500"]};
        cursor: pointer;
    }

    button:hover{
        color: ${props => props.theme["purple-700"]};
    }
`