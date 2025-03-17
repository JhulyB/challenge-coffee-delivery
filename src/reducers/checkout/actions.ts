import { ICart, IOrderLocale } from "./reducer";

export enum ActionTypes{
    ADD_PRODUCT_IN_THE_CART = "ADD_PRODUCT_IN_THE_CART",
    UPDATE_PRODUCT_IN_THE_CART = "UPDATE_PRODUCT_IN_THE_CART",
    REMOVE_PRODUCTS_FROM_CART = "REMOVE_PRODUCTS_FROM_CART",
    UPDATE_ORDER_LOCALE = "UPDATE_ORDER_LOCALE",
    CLEAN_CART = "CLEAN_CART"
}

export function addProductInTheCartAction(productWithFullPrice:ICart) {
    return {
        type: ActionTypes.ADD_PRODUCT_IN_THE_CART,
        payload: {
            productWithFullPrice
        }
    }
}

export function updateProductInTheCartAction(productId: number, quantity: number) {
    return {
        type: ActionTypes.UPDATE_PRODUCT_IN_THE_CART,
        payload: {
            productId,
            quantity
        }
    }
}

export function removeProductsFromCartAction(productId:number) {
    return {
        type: ActionTypes.REMOVE_PRODUCTS_FROM_CART,
        payload: {
            productId
        }
    }
}

export function updateOrderLocaleAction(orderLocale:IOrderLocale) {
    return {
        type: ActionTypes.UPDATE_ORDER_LOCALE,
        payload: {
            orderLocale
        }
    }
}

export function cleanCartAction() {
    return {
        type: ActionTypes.CLEAN_CART,
        payload: {}
    }
}