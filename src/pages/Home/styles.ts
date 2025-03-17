import styled from "styled-components";

export const IntroSectionContainer = styled.section`

    display: flex;
    flex-wrap: wrap;
    gap: 3.5rem;
    padding: 5.75rem 2rem;
    position: relative;

    div + div{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h1{
            font-family: "Baloo 2", sans-serif;
            font-weight: 900;
            font-size: 48px;
            line-height: 130%;
        }

        p {
            max-width: 423px;
        }

        ul{
            margin-top: 3.125rem;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            row-gap: 1.25rem;
            column-gap: 1.25rem;
        }

        li{
            list-style: none;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        @media (max-width: 560px){
            ul{
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            h1{
                font-size: 32px;
            }
        }
    }

    img{
        width: 476px;
        height: 360px;
        margin: auto;
    }

    @media (max-width: 560px){
        padding-left: 2rem;
        padding-right: 2rem;

        img{
            width: 270px;
            height: 204px;
        }
    }

`
export const IntroSectionBanner = styled.div`
    position: absolute;
    left: 0;
    right: 0;

    height: 100%;
    margin: 0 -160px;
    bottom: 0;
    background-image: url("src/assets/background.png");
    background-size: cover;
`

export const ShopSectionContainer = styled.section`
    h2{
        padding: 0 2rem;
        font-family: "Baloo 2", sans-serif;
        font-size: 32px;
        margin-top: 2.5rem;
    }

    &>ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        margin-top: 3.375rem;

    }

    @media (max-width: 560px){
        h2{
            font-size: 24px;
        }
    }
`


const ITEM_COLOR = {
    "yellow-dark": "yellow-700",
    "yellow-base": "yellow-500", 
    "gray": "gray-500",
    "purple": "purple-500"
}

interface ItemColorProps{
    itemcolor: keyof typeof ITEM_COLOR
}

export const IntroItem = styled.span<ItemColorProps>`
    background-color: ${props => props.theme[ITEM_COLOR[props.itemcolor]]};
    color: ${props => props.theme["white-100"]};
    min-height: 2rem;
    min-width: 2rem;
    border-radius: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
`