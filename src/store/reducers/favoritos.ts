import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Produto {
  id: number
  nome: string
  preco: number
  imagem: string
}

interface FavoritosState {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarRemover: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      const isFavorito = state.itens.find(
        (product) => product.id === produto.id
      )

      if (isFavorito) {
        state.itens = state.itens.filter((product) => product.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarRemover } = favoritosSlice.actions
export default favoritosSlice.reducer
