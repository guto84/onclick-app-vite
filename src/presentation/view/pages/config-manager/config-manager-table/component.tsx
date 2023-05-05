import {
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material'
import {
  DeleteForever as DeleteForeverIcon,
  Edit as EditIcon,
  PlaylistAdd as PlaylistAddIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from '@mui/icons-material'
import { TemplateAdmin } from '../../../components'
import { CategoryConfigsItemsOutput } from '../../../../../service'
import { useState } from 'react'

type Props = {
  category: CategoryConfigsItemsOutput
  handleConfigCreateModal: (open: boolean) => void
  handleConfigDeleteModal: (id: string) => void
  handleConfigUpdateModal: (id: string) => void
  handleCategoryCreateModal: (open: boolean, id: string) => void
  handleProductUpdateModal: (id: string) => void
  handleProductDeleteModal: (id: string) => void
}

const Row = ({
  config,
  handleConfigDeleteModal,
  handleConfigUpdateModal,
  handleCategoryCreateModal,
  handleProductUpdateModal,
  handleProductDeleteModal,
}: any) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <TableRow sx={{ backgroundColor: '#e0e0e0' }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontSize: '18px', fontWeight: 'bold' }}>
          {config.name}
        </TableCell>
        <TableCell align="center" sx={{ fontSize: '18px' }}>
          {config.min}
        </TableCell>
        <TableCell align="center" sx={{ fontSize: '18px' }}>
          {config.max}
        </TableCell>
        <TableCell>
          <ButtonGroup>
            <Tooltip title="Editar">
              <IconButton
                onClick={() => handleConfigUpdateModal(config.id)}
                color="primary"
                component="button"
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Excluir">
              <IconButton
                onClick={() => handleConfigDeleteModal(config.id)}
                color="error"
                component="button"
              >
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Cadastrar Item">
              <IconButton
                onClick={() => handleCategoryCreateModal(true, config.id)}
                color="success"
                component="button"
              >
                <PlaylistAddIcon />
              </IconButton>
            </Tooltip>
          </ButtonGroup>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <TableContainer component={CardContent}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>NOME</TableCell>
                    <TableCell width={120}>PREÇO</TableCell>
                    <TableCell align="center" width={100}>
                      AÇÕES
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {config.configurationItems.map((item: any) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(item.price)}
                      </TableCell>
                      <TableCell align="center">
                        <ButtonGroup>
                          <Tooltip title="Editar">
                            <IconButton
                              onClick={() => handleProductUpdateModal(item.id)}
                              color="primary"
                              component="button"
                            >
                              <EditIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Excluir">
                            <IconButton
                              onClick={() => handleProductDeleteModal(item.id)}
                              color="error"
                              component="button"
                            >
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
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export const Component = ({
  category,
  handleConfigCreateModal,
  handleConfigDeleteModal,
  handleConfigUpdateModal,
  handleCategoryCreateModal,
  handleProductUpdateModal,
  handleProductDeleteModal,
}: Props) => {
  return (
    <>
      <TemplateAdmin
        listBreadcrumb={[{ to: '/cardapios', text: 'Cardápio' }]}
        currentBreadcrumb="Configuração"
      >
        <Card>
          <CardHeader
            title={`Categoria: ${category.name}`}
            action={
              <Tooltip title="Cadastrar Configuração">
                <IconButton
                  color="success"
                  component="button"
                  onClick={() => handleConfigCreateModal(true)}
                >
                  <PlaylistAddIcon />
                </IconButton>
              </Tooltip>
            }
          />

          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell width={30} />
                  <TableCell>CONFIGURAÇÃO</TableCell>
                  <TableCell align="center" width={100}>
                    MÍNIMO
                  </TableCell>
                  <TableCell align="center" width={100}>
                    MÁXIMO
                  </TableCell>
                  <TableCell align="center" width={100}>
                    AÇÕES
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {category.configurations.map((config) => (
                  <Row
                    key={config.id}
                    config={config}
                    handleConfigDeleteModal={handleConfigDeleteModal}
                    handleConfigUpdateModal={handleConfigUpdateModal}
                    handleCategoryCreateModal={handleCategoryCreateModal}
                    handleProductUpdateModal={handleProductUpdateModal}
                    handleProductDeleteModal={handleProductDeleteModal}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </TemplateAdmin>
    </>
  )
}
