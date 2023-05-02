import { Link } from 'react-router-dom'
import {
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'
import {
  DeleteForever as DeleteForeverIcon,
  Edit as EditIcon,
  PlaylistAdd as PlaylistAddIcon,
  PostAdd as PostAddIcon,
} from '@mui/icons-material'
import { Loading, TemplateAdmin, Toast } from '../../../components'
import * as S from './styles'
import { GroupCategoriesProductsOutput } from '../../../../../service'

type Props = {
  list: GroupCategoriesProductsOutput[]
  loading: boolean
  handleGroupCreateModal: (open: boolean) => void
  handleGroupDeleteModal: (id: string) => void
  handleGroupUpdateModal: (id: string) => void
  handleCategoryCreateModal: (open: boolean, id: string) => void
  handleCategoryDeleteModal: (id: string) => void
  handleCategoryUpdateModal: (id: string) => void
}

export const Component = ({
  list,
  loading,
  handleGroupCreateModal,
  handleGroupDeleteModal,
  handleGroupUpdateModal,
  handleCategoryCreateModal,
  handleCategoryDeleteModal,
  handleCategoryUpdateModal,
}: Props) => {
  return (
    <>
      <TemplateAdmin currentBreadcrumb="Cardápio">
        <Card>
          <CardHeader
            title="Cardápio"
            action={
              <Tooltip title="Cadastrar Grupo">
                <IconButton
                  color="success"
                  component="button"
                  onClick={() => handleGroupCreateModal(true)}
                >
                  <PlaylistAddIcon />
                </IconButton>
              </Tooltip>
            }
          />
          <Divider />
          {list.map((group) => (
            <div key={group.id}>
              <CardContent sx={{ backgroundColor: '#e0e0e0' }}>
                <S.GroupItem>
                  <Typography variant="h6">{group.name}</Typography>
                  <ButtonGroup>
                    <Tooltip title="Editar">
                      <IconButton
                        onClick={() => handleGroupUpdateModal(group.id)}
                        color="primary"
                        component="button"
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Excluir">
                      <IconButton
                        onClick={() => handleGroupDeleteModal(group.id)}
                        color="error"
                        component="button"
                      >
                        <DeleteForeverIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Cadastrar Categoria">
                      <IconButton
                        onClick={() =>
                          handleCategoryCreateModal(true, group.id)
                        }
                        color="success"
                        component="button"
                      >
                        <PlaylistAddIcon />
                      </IconButton>
                    </Tooltip>
                  </ButtonGroup>
                </S.GroupItem>
              </CardContent>
              <Divider />
              {group.categories.map((category) => (
                <TableContainer key={category.id} component={CardContent}>
                  <ul>
                    <li>
                      <S.CategoryItem>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 'bold' }}
                        >
                          {category.name}
                        </Typography>
                        <ButtonGroup>
                          <Tooltip title="Editar">
                            <IconButton
                              onClick={() =>
                                handleCategoryUpdateModal(category.id)
                              }
                              color="primary"
                              component="button"
                            >
                              <EditIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Excluir">
                            <IconButton
                              onClick={() =>
                                handleCategoryDeleteModal(category.id)
                              }
                              color="error"
                              component="button"
                            >
                              <DeleteForeverIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Cadastrar Produto">
                            <Link to={`/`}>
                              <IconButton color="success" component="button">
                                <PlaylistAddIcon />
                              </IconButton>
                            </Link>
                          </Tooltip>
                          <Tooltip title="Configurações">
                            <Link to={`/`}>
                              <IconButton color="success" component="button">
                                <PostAddIcon />
                              </IconButton>
                            </Link>
                          </Tooltip>
                        </ButtonGroup>
                      </S.CategoryItem>
                    </li>
                  </ul>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>NOME</TableCell>
                        <TableCell>DESCRIÇÃO</TableCell>
                        <TableCell>PREÇO</TableCell>
                        <TableCell align="center" width={100}>
                          AÇÕES
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {category.products.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell>{product.name}</TableCell>
                          <TableCell>{product.description}</TableCell>
                          <TableCell>{product.price}</TableCell>
                          <TableCell align="center">
                            <ButtonGroup>
                              <Tooltip title="Editar">
                                <IconButton color="primary" component="button">
                                  <EditIcon />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Excluir">
                                <IconButton color="error" component="button">
                                  <DeleteForeverIcon />
                                </IconButton>
                              </Tooltip>
                            </ButtonGroup>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              ))}
              <Divider />
            </div>
          ))}
        </Card>
      </TemplateAdmin>

      <Loading loading={loading} />
      <Toast />
    </>
  )
}
