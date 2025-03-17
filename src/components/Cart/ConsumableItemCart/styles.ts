import styled from "styled-components";

export const ConsumableItemCartContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    padding: 2rem 0.25rem;
    
    &:not(:first-child){
        border-top: 1px solid ${(props) => props.theme["white-500"]};
    }
    
    img{
        max-width: 3.75rem;
        max-height: 3.75rem;
        transition: max-width 0.5s ease-in-out, max-height 0.5s ease-in-out;
    }

    @media (max-width: 445px) {
        img{
            max-width: 3rem;
            max-height: 3rem;
        }
    }
`


export const ConsumableDescriptionContainer = styled.div`
    flex: 1;
    
    div{
        padding-top: 0.5rem;
        display: flex;
        gap: 0.5rem;
    }
`

export const RemoveButton = styled.button.attrs({ type: "button" })`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 6px;
    border: none;
    text-transform: uppercase;
    transition: all .2s;
    background-color: ${(props) => props.theme["white-500"]};
    font-size: 0.75rem;

    svg{
        color: ${(props) => props.theme["purple-500"]};
    }
    
    &:hover{
        background-color: ${(props) => props.theme["gray-100"]};
        color: ${(props) => props.theme["gray-700"]};

        svg{
            color: ${(props) => props.theme["purple-700"]};
        }
    }
`