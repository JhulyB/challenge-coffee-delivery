import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCard, CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { ConsumableItemCart } from "../../components/Cart/ConsumableItemCart";
import { GenericList } from "../../components/GenericList";
import { checkoutFormValidationSchema, ICheckoutForm, PAYMENT_METHODS, paymentMethodOptions } from "../../models/checkout.models";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { AdressLabel, ButtonSubmitForm, CartCheckoutContainer, CartEmptyAlert, CartItemList, CheckoutContainer, Divider, ErrorLabel, InputGroupContainer, InputOptionalOrder, InputOrder, InputWrapper, OrderSummary, PaymentDescriptionContainer, PaymentFormContainer, PaymentMethodGroupControl, PaymentMethodLabel, PaymentMethodRadioButton } from "./styles";



export const Checkout = () => {
    const navigate = useNavigate()

    const { 
        orderLocale, 
        cart, 
        cartTotal, 
        isEmptyCart, 
        deliveryOrderPrice, 
        addProductInTheCart, 
        cleanProductsFromCart, 
        removeProductItemFromInTheCart, 
        updateOrderLocale,
        cleanCart
    } = useContext(CartContext)
    
    const initialValues: ICheckoutForm = {
        cep: orderLocale?.cep ?? "",
        street: orderLocale?.street ?? "",
        number: orderLocale?.number ?? "",
        complement: undefined,
        district: orderLocale?.district ?? "",
        city: orderLocale?.city ?? "",
        uf: orderLocale?.uf ?? "",
        paymentMethod: "creditCard"
    }
    
    const { register, handleSubmit, formState: { errors } } = useForm<ICheckoutForm>({
        defaultValues: initialValues,
        resolver: zodResolver(checkoutFormValidationSchema),
    });

    const handleCheckoutSubmit = (data: ICheckoutForm) => {
        updateOrderLocale({
            ...data,
            complement: data.complement === undefined ? null : data.complement
        })
        cleanCart()
        navigate("/success")
    }

    const isCartEmpty: boolean = cart.length === 0

    const toTotalCart = () =>{
        if (isCartEmpty) return "0.00"

        return ((cartTotal + deliveryOrderPrice) / 100).toFixed(2)
    }

    return (
        <CheckoutContainer>
            <form onSubmit={handleSubmit(handleCheckoutSubmit)}>
                <PaymentFormContainer>
                    <h3>Complete seu pedido</h3>
                    <div>
                        <AdressLabel>
                            <MapPinLine size={22}/>
                            <div>
                                <span>Endereço de entrega</span>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </AdressLabel>
                       
                        <InputOrder 
                            type="text" 
                            placeholder="CEP"
                            {...register("cep")}
                            />
                        <ErrorLabel>{`${errors.cep?.message ?? ""}`}</ErrorLabel>
                        <InputOrder 
                            type="text" 
                            placeholder="Rua" 
                            size="full"
                            {...register("street")}
                            />
                        <ErrorLabel>{`${errors.street?.message ?? ""}`}</ErrorLabel>

                        <InputGroupContainer>
                            <InputOrder 
                                type="text" 
                                placeholder="Número" 
                                {...register("number")}
                                />
                            <InputWrapper>
                                <InputOptionalOrder 
                                    type="text" 
                                    placeholder="Complemento" 
                                    size="full"
                                    {...register("complement")}
                                    />
                            </InputWrapper>

                        </InputGroupContainer>
                        <ErrorLabel>{`${errors.number?.message ?? ""}`}</ErrorLabel>
                        <InputGroupContainer>
                            <InputOrder 
                                type="text" 
                                placeholder="Bairro" 
                                {...register("district")}
                                />
                            <InputOrder 
                                type="text" 
                                placeholder="Cidade" 
                                size="full"
                                {...register("city")}
                                />
                            <InputOrder 
                                type="text" 
                                placeholder="UF" 
                                size="small"
                                {...register("uf")}
                                />
                        </InputGroupContainer>
                        <ErrorLabel>{`${errors.district?.message ?? ""}`}</ErrorLabel>
                        <ErrorLabel>{`${errors.city?.message ?? ""}`}</ErrorLabel>
                        <ErrorLabel>{`${errors.uf?.message ?? " "}`}</ErrorLabel>

                    </div> 
                    <div>
                        <PaymentDescriptionContainer>
                            <div><CurrencyDollar size={22}/></div>
                            <div>
                                <h2>Pagamento</h2>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </PaymentDescriptionContainer>
                        <PaymentMethodGroupControl>
                            <GenericList 
                                data={paymentMethodOptions} 
                                keyExtractor={(paymentMethodOption) => paymentMethodOption} 
                                renderItem={(paymentMethodOption) => (
                                    <>
                                    <PaymentMethodRadioButton 
                                        value={paymentMethodOption}
                                        id={`paymentMethod${paymentMethodOption}`}
                                        {...register("paymentMethod")}
                                        />
                                    <PaymentMethodLabel 
                                        htmlFor={`paymentMethod${paymentMethodOption}`}>
                                        <CreditCard/>
                                        <span>{PAYMENT_METHODS[paymentMethodOption]}</span>
                                    </PaymentMethodLabel>
                                    </>
                                )} 
                                />
                        </PaymentMethodGroupControl>
                    </div> 
                </PaymentFormContainer>
                <CartCheckoutContainer>
                    <h3>Cafés selecionados</h3>
                    <div>
                        <CartItemList>
                            <GenericList 
                                data={cart} 
                                keyExtractor={({ id }) => id } 
                                renderItem={(item) => (
                                    <ConsumableItemCart 
                                        item={item} 
                                        onRemove={() => cleanProductsFromCart(item.id)} 
                                        onIncrease={() => addProductInTheCart(item)} 
                                        onDicrease={() => removeProductItemFromInTheCart(item.id)} 
                                        />
                                )}
                                />
                            {
                                isCartEmpty ? <CartEmptyAlert>Seu carrinho está vazio</CartEmptyAlert> : <></>
                                
                            }
                        </CartItemList>
                        <Divider />
                        <OrderSummary>
                            <p>
                                <span>Total de items</span>
                                <span>R$ {(cartTotal / 100).toFixed(2)}</span>
                            </p>
                            {
                                !isCartEmpty && (
                                    <p>
                                        <span>Entrega</span>
                                        <span>R$ {(deliveryOrderPrice / 100).toFixed(2)}</span>
                                    </p>
                                )
                            }
                            <h3>
                                <span>Total</span>
                                <span>R$ {toTotalCart()}</span>
                            </h3>
                        </OrderSummary>
                        <ButtonSubmitForm disabled={isEmptyCart}>Confirmar pedido</ButtonSubmitForm>
                    </div>
                </CartCheckoutContainer>
            </form>
        </CheckoutContainer>
    )
}