import styled from "styled-components";

export const CheckoutContainer = styled.main`
    form{
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 2rem;
        max-width: 100%;
        padding: 0 2rem;
        padding-bottom: 5rem;
        max-height: calc(100vh - 6.75rem);
        overflow-y: scroll;
        transition: all .2s ease;

        &::-webkit-scrollbar {
            width: 0;
        }

        @media (max-width: 1000px) {
            column-gap: 1rem;
            grid-template-columns: minmax(400px, 2fr) 1fr;
        }

        @media (max-width: 840px) {
            grid-template-columns: 1fr;
            overflow-x: hidden;
            row-gap: 2rem;
        }
        @media (max-width: 540px) {
            padding: 0 1rem;
        }
    }
`

export const BaseFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h3{
        font-family: "Baloo 2", sans-serif;
        font-size: 1.125rem;
        color: ${props => props.theme["gray-700"]};
    }

    &>div {
        background-color: ${props => props.theme["white-300"]};
        padding: 2.5rem;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        transition: all .2s ease;
    }

    @media (max-width: 1060px) {
        &>div{
            padding: 2rem;
        }
    }

    @media (max-width: 1000px) {
        &>div{
            padding: 1.5rem;
        }
    }

    @media (max-width: 410px) {
        &>div{
            padding: 1rem;
        }
    }
`

export const PaymentFormContainer = styled(BaseFormContainer)``

export const AdressLabel = styled.div`
    display: flex;
    gap: 0.5rem;

    svg{
        color: ${props => props.theme["yellow-700"]}
    }

    span{
        color: ${props => props.theme["gray-700"]}
    } 

    p{
        color: ${props => props.theme["gray-500"]};
        font-size: 0.875rem
    }
`

export const InputGroupContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    transition: all .2s ease;

    @media (max-width: 970px) {
        flex-direction: column;
    }

    @media (max-width: 840px) {
        flex-direction: row;
    }

    @media (max-width: 594px) {
        flex-direction: column;
    }
`
const WIDTH_SIZE = {
    small: "3.75rem",
    medium: "12.5rem",
    full: "100%",
} as const

interface TestProps{
    size?: keyof typeof WIDTH_SIZE
}

const BaseInput = styled.input<TestProps>`
    width: ${props => props.size ? WIDTH_SIZE[props.size] : WIDTH_SIZE.medium};
    height: 2.625rem;
    padding: 0 0.75rem;
    border: 1px solid ${props => props.theme["white-500"]};
    border-radius: 4px;
    background-color: ${props => props.theme["white-400"]};
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-500"]};
    transition: border 0.3s ease;

    &:focus{
        box-shadow: none;
        border-color: ${(props) => props.theme["yellow-700"]};
    }

    &::placeholder{
        color: ${(props) => props.theme["gray-300"]};
    }
`
export const InputOrder = styled(BaseInput)``

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    width: 100%;
    height: 2.625rem;
    padding: 2px 0.75rem;
    border: 1px solid ${props => props.theme["white-500"]};
    border-radius: 4px;
    background-color: ${props => props.theme["white-400"]};
    transition: border 0.3s ease;

    &:after {
        content: 'Optional';
        font-style: italic;
        margin-left: auto;
        color: ${props => props.theme["gray-300"]};
        font-size: 0.75rem;
    }

    &:focus-within{
        box-shadow: none;
        border-color: ${(props) => props.theme["yellow-700"]};
    }
`;

export const InputOptionalOrder = styled(BaseInput)`
    border: none;
    padding: 0;
    height: 2rem;
`

export const PaymentDescriptionContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    line-height: 130%;

    svg{
        color: ${(props) => props.theme["purple-500"]};
    }

    h2{
        font-size: 1rem;
        font-weight: 400;
        color: ${(props) => props.theme["gray-700"]};

    }

    p{
        font-size: 0.875rem;
    }
`

export const PaymentMethodGroupControl = styled.fieldset`
    display: flex;

    border: none;
    gap: 0.75rem;

    @media (max-width:998px){
        flex-direction: column;
    }
    @media (max-width:840px){
        flex-direction: row;
    }

    @media (max-width:594px){
        flex-direction: column;
    }
`

export const PaymentMethodRadioButton = styled.input.attrs({ type: "radio"})`
    /* visibility: hidden; */
    display: none;

`

export const PaymentMethodLabel = styled.label`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 0.75rem;
    cursor: pointer;
    padding: 1rem;
    border-radius: 6px;

    background-color: ${(props) => props.theme["white-500"]};
    border: 1px solid transparent;
    
    ${PaymentMethodRadioButton}:checked + &&{
        background-color: ${(props) => props.theme["purple-100"]};
        border: 1px solid ${(props) => props.theme["purple-500"]};
    }

    ${PaymentMethodRadioButton}:hover + &&{
        background-color: ${(props) => props.theme["gray-100"]};
    }

    span{
        text-transform: uppercase;
        font-size: 0.75rem;
        white-space: nowrap;
    }

    svg{
        color: ${(props) => props.theme["purple-500"]};
    }

`

export const CartCheckoutContainer = styled(PaymentFormContainer)`
    &>div{
        gap: 0rem;
        border-top-right-radius: 44px;
        border-bottom-left-radius: 44px;

        position: sticky;
        top: 0;
    }

`

export const OrderSummary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    line-height: 130%;

    p, h3{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    p{
        font-size: 0.875rem;
    }

    h2{
        font-size: 1.25rem;
        color: ${(props) => props.theme["gray-700"]};
    }

`

export const ButtonSubmitForm = styled.button.attrs({type: "submit"})`
    flex: 1;
    padding: 0.75rem;
    border-radius: 6px;
    border: none;
    background-color: ${(props) => props.theme["yellow-500"]};
    color: ${(props) => props.theme["white-100"]};
    text-transform: uppercase;
    transition: all .2s;
    cursor: pointer;
    margin-top: 1rem;

    &:not([disabled]):hover{
        background-color: ${(props) => props.theme["yellow-700"]};
    }

    &:disabled{
        cursor: not-allowed;
    }
`

export const Divider = styled.div`
    flex: 1;
    min-height: 1px;
    padding: 0px 1.5rem;
    margin-bottom: 1rem;
    background-color: ${(props) => props.theme["white-500"]};
`

export const ErrorLabel = styled.p`
    color: red;
    margin: 0;
    font-size: 0.625rem;
`

export const CartEmptyAlert = styled.span`
    width: 100%;
    display: block;
    text-align: center;
`

export const CartItemList = styled.div`
    max-height: 32vh;
    overflow-y: scroll;
    transition: all .2s ease;
`