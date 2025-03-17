import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { ICart } from "../../../contexts/CartContext";
import { Counter } from "../ConsumableItem/styles";
import { ConsumableDescriptionContainer, ConsumableItemCartContainer, RemoveButton } from "./styles";

interface IConsumableItemCartProps{
    item: ICart;
    onRemove: ()=>void;
    onIncrease: ()=>void;
    onDicrease: ()=>void;
}

export const ConsumableItemCart = ({ item, onRemove, onIncrease, onDicrease }: IConsumableItemCartProps) => {
    return (
       <ConsumableItemCartContainer>
        <img src={item.picture} />
        <ConsumableDescriptionContainer>
            <span>{item.name}</span>
            <div>
                <Counter>
                    <button type="button" onClick={onDicrease}><Minus/></button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={onIncrease}><Plus/></button>
                </Counter>
                <RemoveButton onClick={onRemove}> <Trash/> Remover</RemoveButton>
            </div>
        </ConsumableDescriptionContainer>
        <strong>R${(item.fullPrice / 100).toFixed(2)}</strong>
       </ConsumableItemCartContainer>
    )
}