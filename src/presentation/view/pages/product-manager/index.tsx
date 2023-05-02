import { CategoryCreate } from './category-create'
import { CategoryDelete } from './category-delete'
import { CategoryUpdate } from './category-update'
import { GroupCreate } from './group-create'
import { GroupDelete } from './group-delete'
import { GroupUpdate } from './group-update'
import { ProductCreate } from './product-create'
import { ProductDelete } from './product-delete'
import { ProductUpdate } from './product-update'
import { ProductManagerTable } from './product-manager-table'

export const ProductManager = () => {
  return (
    <>
      <ProductManagerTable />
      <GroupCreate />
      <GroupUpdate />
      <GroupDelete />
      <CategoryCreate />
      <CategoryUpdate />
      <CategoryDelete />
      <ProductCreate />
      <ProductUpdate />
      <ProductDelete />
    </>
  )
}
