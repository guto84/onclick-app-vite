import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Modal,
  TextField,
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import {
  ConfigurationOutput,
  ConfigurationUpdateInput,
} from '../../../../../service'
import { Loading, ModalCard } from '../../../components'

type Props = {
  open: boolean
  loading: boolean
  values: ConfigurationOutput
  handleOpen: (open: boolean) => void
  handleUpdate: (id: string, input: ConfigurationUpdateInput) => Promise<void>
}

export const Component = ({
  open,
  loading,
  values,
  handleOpen,
  handleUpdate,
}: Props) => {
  const initialValues = {
    name: values.name,
    min: values.min,
    max: values.max,
    category: {
      id: values.category.id,
    },
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    min: Yup.number().required('Campo obrigatório'),
    max: Yup.number().required('Campo obrigatório'),
  })

  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (input) => {
      await handleUpdate(values.id, input)
      handleCloseModal()
    },
    enableReinitialize: true,
  })

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
        <ModalCard>
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
              <form onSubmit={form.handleSubmit}>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={4}
                >
                  <Grid item xs={12}>
                    <TextField
                      label="Nome"
                      variant="standard"
                      fullWidth
                      name="name"
                      value={form.values.name}
                      onChange={form.handleChange}
                      error={!!(form.touched.name && form.errors.name)}
                      helperText={form.errors.name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="number"
                      label="Mínimo"
                      variant="standard"
                      fullWidth
                      name="min"
                      value={form.values.min}
                      onChange={form.handleChange}
                      error={!!(form.touched.min && form.errors.min)}
                      helperText={form.errors.min}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="number"
                      label="Máximo"
                      variant="standard"
                      fullWidth
                      name="max"
                      value={form.values.max}
                      onChange={form.handleChange}
                      error={!!(form.touched.max && form.errors.max)}
                      helperText={form.errors.max}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" fullWidth>
                      Salvar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </ModalCard>
      </Modal>

      <Loading loading={loading} />
    </>
  )
}
