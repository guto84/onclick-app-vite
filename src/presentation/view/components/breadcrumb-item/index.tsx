/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListItem, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
  to: string
  text: string
}

export const BreadcrumbItem = ({ to, text }: Props) => (
  <li>
    <ListItem
      underline="hover"
      color="inherit"
      component={Link as any}
      to={to}
      sx={{
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <ListItemText primary={text} />
    </ListItem>
  </li>
)
