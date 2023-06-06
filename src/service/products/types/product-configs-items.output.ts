export type ProductConfigsItemsOutput = {
  id: string
  name: string
  description: string
  price: number
  category: {
    id: string
    name: string
    configurations: Configuration[]
  }
}

export type Configuration = {
  id: string
  name: string
  min: number
  max: number
  configurationItems: ConfigurationItem[]
}

export type ConfigurationItem = {
  id: string
  name: string
  description: string
  price: number
}
