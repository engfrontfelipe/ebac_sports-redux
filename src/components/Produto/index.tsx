import { adicionar } from '../../store/reducers/carrinho'
import { useDispatch, useSelector } from 'react-redux'
import { Produto, Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { adicionarRemover } from '../../store/reducers/favoritos'

type Props = {
  produto: ProdutoType
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const favoritos = useSelector((state: any) => state.favoritos.itens)

  const validaFavoritoBotao = () => {
    return favoritos.some((p: Produto) => p.id === produto.id)
      ? '- Remover dos favoritos'
      : '+ Adicionar aos favoritos'
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => dispatch(adicionarRemover(produto))}
        type="button"
      >
        {validaFavoritoBotao()}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
