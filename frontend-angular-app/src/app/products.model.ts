interface Products {
    type: string,
    id: number,
    name: string,
    detail: string,
    quantity: number,
    price: number,
    file: String,
    img: String
}

export type productsType = Products[];
