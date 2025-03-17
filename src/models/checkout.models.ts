import * as zod from "zod"

export const PAYMENT_METHODS = {
    creditCard: "Cartão de crédito",
    debitCard: "Cartão de débito",
    cash: "Dinheiro"
} as const

export const paymentMethodOptions = Object.keys(PAYMENT_METHODS) as ['creditCard', 'debitCard', 'cash']

export const checkoutFormValidationSchema = zod.object({
    cep: zod.string().min(1, "Por favor, informe o CEP do endereço de entrega"),
    street: zod.string().min(1, "Por favor, informe a rua do endereço de entrega"),
    number: zod.string().min(1, "Por favor, informe o número do endereço de entrega"),
    complement: zod.string().optional(),
    district: zod.string().min(1, "Por favor, informe o bairro do endereço de entrega"),
    city: zod.string().min(1, "Por favor, informe a cidade do endereço de entrega"),
    uf: zod.string().min(1, "Por favor, informe o UF do endereço de entrega"),
    paymentMethod: zod.enum(paymentMethodOptions)
})

export type ICheckoutForm = zod.infer<typeof checkoutFormValidationSchema>