import { CategoryCreate } from './category-create'
import { CategoryDelete } from './category-delete'
import { CategoryUpdate } from './category-update'
import { GroupCreate } from './group-create'
import { GroupDelete } from './group-delete'
import { GroupUpdate } from './group-update'
import { MenuManagerTable } from './table'

export const MenuManager = () => {
  return (
    <>
      <MenuManagerTable />
      <GroupCreate />
      <GroupUpdate />
      <GroupDelete />
      <CategoryCreate />
      <CategoryUpdate />
      <CategoryDelete />
    </>
  )
}
