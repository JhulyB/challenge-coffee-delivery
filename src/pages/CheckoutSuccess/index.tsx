import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useContext } from "react";
import successImage from "../../assets/success-screen.png";
import { CartContext } from "../../contexts/CartContext";
import { OrderInfoContainer, OrderInfoItem, SuccessCheckoutContainer, SuccessCheckoutContent } from "./styles";

export const CheckoutSuccess = () => {

    const { orderLocale } = useContext(CartContext)

    return(
        <SuccessCheckoutContainer>
            <SuccessCheckoutContent>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
                <OrderInfoContainer>
                    <OrderInfoItem orderInfoType="local">
                        <div><MapPin weight="fill" size={16} /></div>
                        <div>
                            <span>Entrega em <strong>{orderLocale?.street}, {orderLocale?.number}</strong></span>
                            <span>{orderLocale?.district} - {orderLocale?.city}, {orderLocale?.uf}</span>
                        </div>
                    </OrderInfoItem>
                    <OrderInfoItem orderInfoType="time">
                        <div><Timer weight="fill" size={16}/></div>
                        <div>
                            <span>Previsão de entrega</span>
                            <strong>20 min - 30 min</strong>
                        </div>
                    </OrderInfoItem>
                    <OrderInfoItem orderInfoType="payment">
                        <div><CurrencyDollar size={16}/></div>
                        <div>
                            <span>Pagamento na entrega</span>
                            <strong>Cartão de Crédito</strong>
                        </div>
                    </OrderInfoItem>
                </OrderInfoContainer>
            </SuccessCheckoutContent>
            <img src={successImage} />
        </SuccessCheckoutContainer>
    )
}