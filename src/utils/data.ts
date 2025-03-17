interface ITagsOfType{ 
    id: number
    name: string
}

export interface ICoffeeData {
    id: number
    tagsOfType: ITagsOfType[]
    name: string
    description: string
    unitPrice: number
    imgPath: string
}

export const COFFEE_DATA: ICoffeeData[] = [
    {
        id: 0,
        tagsOfType: [
            { id: 1, name: "Tradicional" },
            { id: 2, name: "Especial" }
        ],
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        unitPrice: 990,
        imgPath: "src/assets/type=Expresso.png"
    },
    {
        id: 1,
        tagsOfType: [
            { id: 0, name: "Tradicional" }
        ],
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        unitPrice: 990,
        imgPath: "src/assets/type=Americano.png"
    },
    {
        id: 2,
        tagsOfType: [
            { id: 0, name: "Tradicional" }
        ],
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        unitPrice: 990,
        imgPath: "src/assets/type=Expresso_Cremoso.png"
    },
    {
        id: 3,
        tagsOfType: [
            { id: 0, name: "Tradicional" },
            { id: 1, name: "Gelado" }
        ],
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        unitPrice: 990,
        imgPath: "src/assets/type=Café_Gelado.png"
    },
    {
        id: 4,
        tagsOfType: [
            { id: 0, name: "Tradicional" },
            { id: 1, name: "Com leite" }
        ],
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        unitPrice: 990,
        imgPath: "src/assets/type=Café_com_Leite.png"
    },
    {
        id: 5,
        tagsOfType: [
            { id: 0, name: "Tradicional" },
            { id: 1, name: "Com leite" }
        ],
        name: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        unitPrice: 990,
        imgPath: "src/assets/type=Latte.png"
    },
    {
        id: 6,
        tagsOfType: [
            { id: 0, name: "Tradicional" },
            { id: 1, name: "Com leite" }
        ],
        name: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        unitPrice: 990,
        imgPath: "src/assets/type=Capuccino.png"
    },
    {
        id: 7,
        tagsOfType: [
            { id: 0, name: "Tradicional" },
            { id: 1, name: "Com leite" }
        ],
        name: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        unitPrice: 990,
        imgPath: "src/assets/type=Macchiato.png"
    },
    {
        id: 8,
        tagsOfType: [
            { id: 0, name: "Tradicional" },
            { id: 1, name: "Com leite" }
        ],
        name: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        unitPrice: 990,
        imgPath: "src/assets/type=Mochaccino.png"
    },
    {
        id: 9,
        tagsOfType: [
            { id: 0, name: "Especial" },
            { id: 1, name: "Com leite" }
        ],
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        unitPrice: 990,
        imgPath: "src/assets/type=Chocolate_Quente.png"
    },
    {
        id: 10,
        tagsOfType: [
            { id: 0, name: "Especial" },
            { id: 1, name: "Alcoólico" },
            { id: 2, name: "Gelado" }
        ],
        name: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        unitPrice: 990,
        imgPath: "src/assets/type=Cubano.png"
    },
    {
        id: 11,
        tagsOfType: [
            { id: 0, name: "Especial" }
        ],
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        unitPrice: 990,
        imgPath: "src/assets/type=Havaiano.png"
    },
    {
        id: 12,
        tagsOfType: [
            { id: 1, name: "Especial" }
        ],
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        unitPrice: 990,
        imgPath: "src/assets/type=Árabe.png"
    },
    {
        id: 13,
        tagsOfType: [
            { id: 0, name: "Especial" },
            { id: 1, name: "Alcoólico" }
        ],
        name: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        unitPrice: 990,
        imgPath: "src/assets/type=Irlandês.png"
    }
];

export interface ICartData{
    orderItemId: number,
    imgPath: string,
    name: string,
    quantity: number,
    fullPrice: number,
}

export const CART_DATA: ICartData[] = [
    {
        orderItemId: 0,
        imgPath: "src/assets/type=Expresso.png",
        name: "Expresso Tradicional",
        quantity: 1,
        fullPrice: 990,
    }, {
        orderItemId: 1,
        imgPath: "src/assets/type=Latte.png",
        name: "Latte",
        quantity: 1,
        fullPrice: 1980,
    }
]