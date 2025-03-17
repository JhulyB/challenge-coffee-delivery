import { ActionTypes } from "./actions";

export interface ICart{
    id: number;
    name: string;
    quantity: number;
    unitPrice: number;
    picture: string;
    fullPrice: number;
}

export interface IOrderComplete{
    estimatedDeliveryTime: string;
    paymentMethod: 'creditCard' | 'debitCard' | 'cash';
    completed: boolean
}


export interface IOrderLocale{
    street: string;
    number: string;
    district: string;
    cep: string;
    city: string;
    complement: string | null;
    uf: string
}

export interface ICheckout{
    cart: ICart[],
    orderComplete: IOrderComplete | null,
    orderLocale: IOrderLocale | null,
}

export function cartReducer( state:ICheckout, action: any ) {
    switch(action.type){
        case ActionTypes.ADD_PRODUCT_IN_THE_CART: {
            
            return {
                ...state,
                cart: [ ...state.cart, action.payload.productWithFullPrice]
            }
        }
        case ActionTypes.UPDATE_PRODUCT_IN_THE_CART: 
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id === action.payload.productId) {
                        const calcQuantity = item.quantity + action.payload.quantity
                        return {
                            ...item,
                            fullPrice: item.unitPrice * calcQuantity,
                            quantity: calcQuantity
                        }
                    }
                    return item
                })
            }
        case ActionTypes.REMOVE_PRODUCTS_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.productId)
            }
        case ActionTypes.UPDATE_ORDER_LOCALE:
            return {
                ...state,
                orderLocale: action.payload.orderLocale
            }
        case ActionTypes.CLEAN_CART:
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }
}