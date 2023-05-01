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
    </>
  )
}
