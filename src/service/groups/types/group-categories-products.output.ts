export type GroupCategoriesProductsOutput = {
  id: string
  name: string
  categories: Category[]
}

export type Category = {
  id: string
  name: string
  products: Product[]
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
}
