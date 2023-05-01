import * as React from 'react'
import {
  AppBar,
  Breadcrumbs,
  Button,
  Box,
  Container,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import { BreadcrumbItem } from '../breadcrumb-item'
import * as S from './styles'

type Props = {
  listBreadcrumb?: {
    to: string
    text: string
  }[]
  currentBreadcrumb: string
  children: React.ReactNode
}

export const TemplateAdmin = ({
  listBreadcrumb,
  currentBreadcrumb,
  children,
}: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: '16px' }}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <S.Toolbar>
              <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
                OnClick Delivery
              </Typography>
              <div>
                <Button
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  Menu
                </Button>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Empresas</MenuItem>
                  <MenuItem onClick={handleClose}>Menu</MenuItem>
                </Menu>
              </div>
            </S.Toolbar>
          </Container>
        </AppBar>
      </Box>

      <Container maxWidth="xl" sx={{ marginBottom: '96px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div role="presentation">
              <Breadcrumbs aria-label="breadcrumb">
                {listBreadcrumb &&
                  listBreadcrumb.map((item, idx) => (
                    <BreadcrumbItem key={idx} to={item.to} text={item.text} />
                  ))}
                <Typography color="text.primary">
                  {currentBreadcrumb}
                </Typography>
              </Breadcrumbs>
            </div>
          </Grid>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
