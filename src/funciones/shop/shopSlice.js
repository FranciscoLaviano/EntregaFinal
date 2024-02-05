import { createSlice } from '@reduxjs/toolkit'
import allProductos from "../../Data/catalogo.json"
import allCategories from "../../Data/categorias.json"

const initialState = {
    value:{
        products: allProductos,
        categories:allCategories,
        productSelected:{},
        productsFilteredByCategory:[]
    }
  }

  export const shopSlice = createSlice({
    name:"shop",
    initialState,
    reducers:{
        setProductsFilteredByCategory: (state,actions) => {
            state.value.productsFilteredByCategory = state.value.products.filter(product => product.categorias == actions.payload)
        },
        setProductSelected: (state,actions) =>{
            state.value.productSelected = state.value.products.find(product => product.id ===actions.payload)
        }
    }
  })

  export const { setProductsFilteredByCategory,setProductSelected} = shopSlice.actions

  export default shopSlice.reducer