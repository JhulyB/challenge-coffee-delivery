import { Coffee, Package, ShoppingCartSimple, Timer } from "@phosphor-icons/react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import cupOfCoffee from "../../assets/coffee-section.png"
import { ConsumableItem } from "../../components/Cart/ConsumableItem"
import { GenericList } from "../../components/GenericList"
import { CartContext } from "../../contexts/CartContext"
import { COFFEE_DATA, ICoffeeData } from "../../utils/data"
import { IntroItem, IntroSectionBanner, IntroSectionContainer, ShopSectionContainer } from "./styles"

export function Home() {

    const navigate = useNavigate()

    const { cart, addProductInTheCart, removeProductItemFromInTheCart } = useContext(CartContext)

    function handleAddProductInTheCart(product: ICoffeeData) {
        addProductInTheCart({
            id: product.id,
            name: product.name,
            picture: product.imgPath,
            unitPrice: product.unitPrice,
        })
    }

    function handleRemoveProductInTheCart(productId: number) {
        removeProductItemFromInTheCart(productId)
    }

    function toQuantity(productId: number): number {
        const findProductInTheCart = cart.find(item => item.id === productId)

        if (findProductInTheCart === undefined) {
            return 0
        }

        return findProductInTheCart.quantity
    }

    function handleRedirectToCart() {
        navigate("/checkout")
    }

    return (
        <main>
            <IntroSectionContainer>
                <IntroSectionBanner/>
                <div>
                    <h1>Encontre o café perfeito <br /> para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                    <ul>
                        <li> <IntroItem itemcolor="yellow-dark"> <ShoppingCartSimple weight="fill" size={16}/> </IntroItem> Compra simples e segura</li>
                        <li> <IntroItem itemcolor="gray"> <Package weight="fill" size={16}/> </IntroItem> Embalagem mantém o café intacto</li>
                        <li> <IntroItem itemcolor="yellow-base"> <Timer weight="fill" size={16}/> </IntroItem> Entrega rápida e rastreada</li>
                        <li> <IntroItem itemcolor="purple"> <Coffee weight="fill" size={16}/> </IntroItem> O café chega fresquinho até você</li>
                    </ul>
                </div>
                <img src={cupOfCoffee} alt="" />
            </IntroSectionContainer>
            <ShopSectionContainer>

                <h2>Nossos cafés</h2>

                <ul>
                    <GenericList 
                        data={COFFEE_DATA} 
                        keyExtractor={({ id }) => id} 
                        renderItem={(coffeeProduct) => (
                            <ConsumableItem 
                                consumable={coffeeProduct}
                                isEmptyCart={cart.length === 0}
                                quantity={toQuantity(coffeeProduct.id)} 
                                onDicrease={() => handleRemoveProductInTheCart(coffeeProduct.id)} 
                                onIncrease={() => handleAddProductInTheCart(coffeeProduct)}
                                onRedirectToCart={handleRedirectToCart}
                                />
                        )}
                        />
                </ul>

            </ShopSectionContainer>
        </main>
    )
}