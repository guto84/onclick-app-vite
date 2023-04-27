import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Modal,
  Typography,
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import * as S from '../styles'
import { Loading } from '../../../components'

type Props = {
  open: boolean
  loading: boolean
  handleOpen: (open: boolean) => void
  handleCompanyDelete: () => Promise<void>
}

export const Component = ({
  open,
  loading,
  handleOpen,
  handleCompanyDelete,
}: Props) => {
  const handleCloseModal = () => {
    handleOpen(false)
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.ModalCard>
          <Card>
            <CardHeader
              title=""
              action={
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                  onClick={handleCloseModal}
                >
                  <CloseIcon />
                </IconButton>
              }
            />
            <CardContent>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={4}
              >
                <Grid item xs={12}>
                  <Typography variant="subtitle1" align="center" paragraph>
                    Deseja excluir esse regsitro e todos os seus dados
                    relacionados?
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={handleCompanyDelete}
                    variant="contained"
                    color="error"
                    fullWidth
                  >
                    Excluir
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </S.ModalCard>
      </Modal>

      <Loading loading={loading} />
    </>
  )
}
