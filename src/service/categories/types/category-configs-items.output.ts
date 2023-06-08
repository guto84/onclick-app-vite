export type CategoryConfigsItemsOutput = {
  id: string
  name: string
  configurations: Config[]
}

export type Config = {
  id: string
  name: string
  min: number
  max: number
  configurationItems: Type[]
}

export type Type = {
  id: string
  name: string
  description?: string
  price: number
}
