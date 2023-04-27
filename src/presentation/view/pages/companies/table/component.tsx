import {
  CardHeader,
  CardContent,
  Button,
  TableHead,
  TableRow,
  TableContainer,
  Table,
  TableCell,
  TableBody,
  IconButton,
  Tooltip,
} from '@mui/material'
import {
  DeleteForever as DeleteForeverIcon,
  Edit as EditIcon,
  PersonAdd as PersonAddIcon,
} from '@mui/icons-material'
import { Loading, TemplateAdmin, Toast } from '../../../components'
import { CompanyFindAllOutputDTO } from '../../../../../service'

type Props = {
  list: CompanyFindAllOutputDTO
  loading: boolean
  handleCreateModal: (open: boolean) => void
  handleUpdateModal: (id: string) => void
  handleDeleteModal: (id: string) => void
}

export const Component = ({
  list,
  loading,
  handleCreateModal,
  handleUpdateModal,
  handleDeleteModal,
}: Props) => {
  return (
    <>
      <TemplateAdmin currentBreadcrumb="Empresas">
        <>
          <CardHeader
            title=""
            action={
              <Button
                variant="contained"
                onClick={() => handleCreateModal(true)}
              >
                Cadastrar
              </Button>
            }
          />
          <TableContainer component={CardContent}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>NOME</TableCell>
                  <TableCell>URL</TableCell>
                  <TableCell>AÇÕES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.url}</TableCell>
                    <TableCell width={200}>
                      <Tooltip title="Editar">
                        <IconButton
                          color="primary"
                          component="button"
                          onClick={() => handleUpdateModal(row.id)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Excluir">
                        <IconButton
                          color="error"
                          component="button"
                          onClick={() => handleDeleteModal(row.id)}
                        >
                          <DeleteForeverIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Usuários">
                        <IconButton color="success" component="button">
                          <PersonAddIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      </TemplateAdmin>

      <Loading loading={loading} />
      <Toast />
    </>
  )
}
