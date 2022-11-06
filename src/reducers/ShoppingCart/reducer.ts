/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionTypes } from "./actions";

export interface ShoppingCartProduct {
    productId: number;
    productQuantity: number;
    productPrice: number;
    productName: string;
	productPicture: string;
}

interface ShoppingCartState {
	products: ShoppingCartProduct[],	
}

export function ShoppingCartReducer(state: ShoppingCartState, action: any) {
	switch (action.type) {
	case ActionTypes.ADD_PRODUCT_TO_CART: {
		let productExists = false;
		const products = state.products.map(item => {
			if (item.productId === action.payload.newProduct.productId) {
				productExists = true;
				item.productQuantity += action.payload.newProduct.productQuantity;
				return item;
			} else {
				return item;
			}
		});

		if (!productExists) {
			products.push(action.payload.newProduct);
		}

		return {
			...state,
			products,
		};
	}

	case ActionTypes.CHANGE_QUANTITY: {
		return {
			...state,
			products: state.products.map(item => {
				if (item.productId === action.payload.product.productId) {
					item.productQuantity += action.payload.addQty;
				}
				
				return item;
			})
		};
	}

	default:
		return state;   
	}
}