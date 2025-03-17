import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { ICoffeeData } from "../../../utils/data";
import { GenericList } from "../../GenericList";
import { BadgeTag, ConsumableItemContainer, Counter, CounterContainer } from "./styles";

interface IConsumableItemProps{
    consumable: ICoffeeData;
    quantity: number
    isEmptyCart: boolean;
    onIncrease: ()=>void;
    onDicrease: ()=>void;
    onRedirectToCart: ()=>void;
}

export const ConsumableItem = ({ consumable, quantity, isEmptyCart, onIncrease, onDicrease, onRedirectToCart }: IConsumableItemProps) => {

    return (
        <ConsumableItemContainer>
            <img src={consumable.imgPath} />
            <ul>
                <GenericList 
                    data={consumable.tagsOfType} 
                    keyExtractor={({ id }) => id } 
                    renderItem={(tagOfType) => (
                        <li><BadgeTag>{tagOfType.name}</BadgeTag></li>
                    )}
                    />
            </ul>
            <h3>{consumable.name}</h3>
            <p>{consumable.description}</p>
            <CounterContainer>
                <span>R$ <strong>{(consumable.unitPrice /100).toFixed(2).replace(".",",")}</strong></span>
                <Counter>
                    <button onClick={onDicrease}><Minus/></button>
                    <span>{quantity}</span>
                    <button onClick={onIncrease}><Plus/></button>
                </Counter>
                <button disabled={isEmptyCart} onClick={onRedirectToCart}><ShoppingCart weight="fill" size={22}/></button>
            </CounterContainer>
        </ConsumableItemContainer>
    )
}