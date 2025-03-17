import { createContext, ReactNode, useEffect, useReducer } from "react";
import { addProductInTheCartAction, cleanCartAction, removeProductsFromCartAction, updateOrderLocaleAction, updateProductInTheCartAction } from "../reducers/checkout/actions";
import { cartReducer, IOrderLocale } from "../reducers/checkout/reducer";




export interface ICart{
    id: number;
    name: string;
    quantity: number;
    unitPrice: number;
    picture: string;
    fullPrice: number;
}

type IProductInTheCartParam = Omit<ICart, "fullPrice" | "quantity">

interface ICartContextData{
    isEmptyCart: boolean;
    cart: ICart[];
    cartTotal: number;
    deliveryOrderPrice: number;
    orderLocale: IOrderLocale | null;
    addProductInTheCart: (product: IProductInTheCartParam)=>void;
    removeProductItemFromInTheCart: (productId: number)=>void;
    updateOrderLocale: (data: IOrderLocale)=> void;
    cleanProductsFromCart: (productId: number)=>void;
    cleanCart: ()=>void;
}

export const CartContext = createContext({} as ICartContextData)

interface iCartContextProviderProps{
    children: ReactNode
}

export function CartContextProvider({ children }: iCartContextProviderProps) {
    const [checkout, dispatch] = useReducer(
        cartReducer,
        {
            cart: [],
            orderComplete: null,
            orderLocale: null
        },
        (initialState) => {
            const storagedStateAsJSON = localStorage.getItem("@coffee-deliver:checkout-state-1.0.0")

            if (storagedStateAsJSON) {
                return JSON.parse(storagedStateAsJSON)
            }
            
            return initialState
        }
    );
    
    useEffect(()=>{
        const stateJSON = JSON.stringify(checkout)

        localStorage.setItem('@coffee-deliver:checkout-state-1.0.0', stateJSON)
    },[checkout])

    function updateProductInTheCart(productId: number, quantity: number) {
        dispatch(updateProductInTheCartAction(productId, quantity))
    }

    function addProductInTheCart(data: IProductInTheCartParam) {

        const productWithFullPrice: ICart = {
            ...data,
            quantity: 1,
            fullPrice: data.unitPrice
        }

       const hasItemIntheCart = checkout.cart.some((item: ICart) => item.id === data.id)

       if (!hasItemIntheCart) {
        dispatch(addProductInTheCartAction(productWithFullPrice))
       } else {
        updateProductInTheCart(data.id, 1)
       }
    }

    function removeProductItemFromInTheCart(productId: number) {

        const findProductInTheCart = checkout.cart.find((cartItem: ICart) => cartItem.id === productId);
        
        if (findProductInTheCart === undefined) {
            return 
        } 

        const isLastInTheCart = findProductInTheCart.quantity === 1

        if (isLastInTheCart) {
            dispatch(removeProductsFromCartAction(productId))
        } else {
            updateProductInTheCart(productId, -1)
        }
    }

    function cleanProductsFromCart(productId: number) {
        const findProductInTheCart = checkout.cart.find((cartItem: ICart) => cartItem.id === productId);
        
        if (findProductInTheCart === undefined) {
            return 
        } 
        dispatch(removeProductsFromCartAction(productId))
    }

    function updateOrderLocale(data: IOrderLocale) {
        dispatch(updateOrderLocaleAction(data))
    }

    function cleanCart() {
        dispatch(cleanCartAction())
    }

    const cartTotal: number = checkout.cart.reduce((amount: number, item: ICart) => item.fullPrice + amount, 0)

    const deliveryOrderPrice: number = 350

    return (
        <CartContext.Provider 
            value={{ 
                isEmptyCart: checkout.cart.length === 0, 
                cartTotal: cartTotal,
                deliveryOrderPrice: deliveryOrderPrice,
                cart: checkout.cart, 
                orderLocale: checkout.orderLocale, 
                addProductInTheCart, 
                removeProductItemFromInTheCart, 
                updateOrderLocale,
                cleanProductsFromCart,
                cleanCart
            }}
            >
            {children}
        </CartContext.Provider>
    )
}