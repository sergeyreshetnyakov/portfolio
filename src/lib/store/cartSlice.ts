import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from "./storeApi"

interface InitialStateType {
	cart: IProduct[]
}

const initialState: InitialStateType = {
	cart: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action:PayloadAction<IProduct>) => {
			state.cart.push( action.payload )
		},
		deleteFromCart: (state, action: PayloadAction<number>) => {
			state.cart.filter( (e) => {
				e.id === action.payload
			})
		},
		checkProductInCart: (state, action: PayloadAction<number>) => {
			const product = state.cart.find( (e) => {
				e.id === action.payload
			})

			if( product === undefined) {
				return false
			} else {
				return true
			}
		}
	}
})

export default cartSlice.reducer
export const { addToCart, deleteFromCart } = cartSlice.actions
