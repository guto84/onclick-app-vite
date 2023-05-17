import * as React from 'react'
// import { useNavigate } from 'react-router-dom'
import { AppBar, Button, Box, Container, Grid, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import * as S from './styles'

type Props = {
  children: React.ReactNode
}

export const Template = ({ children }: Props) => {
  // const navigate = useNavigate()

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
                  // onClick={() => console.log('wowow')}
                  color="inherit"
                >
                  <MenuIcon />
                </Button>
              </div>
            </S.Toolbar>
          </Container>
        </AppBar>
      </Box>

      <Container maxWidth="xl" sx={{ marginBottom: '96px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
