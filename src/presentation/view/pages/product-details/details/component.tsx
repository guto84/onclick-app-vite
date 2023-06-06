import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  List,
  ListItem,
  Paper,
  Typography,
} from '@mui/material'
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material'
import { Template } from '../../../components'
import { ProductConfigsItemsOutput } from '../../../../../service'
import * as S from './styles'

type Props = {
  product: ProductConfigsItemsOutput
  handleBack: () => void
}

export const Component = ({ product, handleBack }: Props) => {
  return (
    <Template>
      <Card>
        <CardHeader
          title={
            <IconButton aria-label="primary" onClick={handleBack}>
              <ArrowBackIcon />
            </IconButton>
          }
        />
        <CardContent component={Paper}>
          <Typography variant="h6" sx={{ padding: '0 15px' }}>
            {product.name}
          </Typography>
          <List>
            <ListItem>{product.description}</ListItem>
            <ListItem>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price)}
            </ListItem>
          </List>
          <form>
            {product.category.configurations.map((config) => (
              <>
                <S.ConfigurationHeader key={config.id}>
                  <div>
                    <Typography variant="subtitle1">{config.name}</Typography>
                    <Typography variant="subtitle2">{`Selecione ${
                      config.max > 1 ? 'até' : ''
                    } ${config.max} ite${
                      config.max === 1 ? 'm' : 'ns'
                    }`}</Typography>
                  </div>
                  {config.min > 0 && (
                    <S.RequiredLabel>OBRIGATÓRIO</S.RequiredLabel>
                  )}
                </S.ConfigurationHeader>
                {config.configurationItems.map((item) => (
                  <FormGroup sx={{ padding: '10px 15px' }} key={item.id}>
                    <FormControlLabel
                      sx={{ borderBottom: '1px solid #e0e0e0' }}
                      control={<Checkbox />}
                      label={
                        <S.CheckboxLabel>
                          <S.CheckboxLabelTitle>
                            {item.name}
                          </S.CheckboxLabelTitle>
                          <S.CheckboxLabelDescription>
                            {item.description}
                          </S.CheckboxLabelDescription>
                          <S.CheckboxLabelPrice>
                            {new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            }).format(item.price)}
                          </S.CheckboxLabelPrice>
                        </S.CheckboxLabel>
                      }
                    />
                  </FormGroup>
                ))}
              </>
            ))}
            <Button variant="contained" fullWidth>
              Adicionar
            </Button>
          </form>
        </CardContent>
      </Card>
    </Template>
  )
}
