import styled from "styled-components";

export const SuccessCheckoutContainer = styled.section`
    display: grid ;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10%;

    align-items: end;
    padding: 2rem;
    transition: all ease .2s;

    @media (max-width: 940px) {
        grid-template-columns: 1fr;

        img {
            width: 25rem;
            margin: 2.5rem auto;
        }
    }

    @media (max-width: 520px) {
        padding: 2rem 1rem;

        img {
            width: 18rem;
        }
    }
`

export const SuccessCheckoutContent = styled.div`
    
    h1{
        color: ${props => props.theme["yellow-700"]};
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        line-height: 130%;
    }
    p{
        font-size: 1.25rem;
        color: ${props => props.theme["gray-700"]};
        line-height: 130%;

    }
`

export const OrderInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2.5rem;
    margin-top: 2.5rem;
    min-width: 22.5rem;

    
    border: 1px solid transparent;
    border-radius: 6px 36px 6px 36px;
    
    background: 
        linear-gradient(
            ${(props) => props.theme["white-200"]},
            ${(props) => props.theme["white-200"]}
        ) padding-box,
        linear-gradient(
            63deg, 
            ${(props) => props.theme["yellow-500"]} 0%, 
            ${(props) => props.theme["purple-500"]} 100%
        ) border-box;
    border-image-slice: 1;

    @media (max-width: 940px) {
        max-width: 32rem;
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 450px) {
        min-width: 10rem;
    }
`
const ITEM_COLOR = {
    local: "purple-500",
    time: "yellow-500", 
    payment: "yellow-700", 
}

interface DeliverySummaryItemProps{
    orderInfoType: keyof typeof ITEM_COLOR
}

export const OrderInfoItem = styled.div<DeliverySummaryItemProps>`
    display: flex;
    gap: 0.75rem;

    div:first-child{
        min-width: 2rem;
        height: 2rem;
        border-radius: 99px;
        background-color: ${(props) => props.theme[ITEM_COLOR[props.orderInfoType]]};
        color: ${(props) => props.theme["white-100"]};

        display: flex;
        align-items: center;
        justify-content: center;
    }

    div:last-child{
        display: flex;
        flex-direction: column;
    }
`