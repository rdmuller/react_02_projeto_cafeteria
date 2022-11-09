/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionTypes } from "./actions";

export interface ShoppingCartProduct {
    productId: number;
    productQuantity: number;
    productPrice: number;
    productName: string;
	productPicture: string;
	productValue: number;
}

interface ShoppingCartState {
	products: ShoppingCartProduct[],
	totalItems: number;
	totalDelivery: number;
	totalValue: number;
}

export function ShoppingCartReducer(state: ShoppingCartState, action: any) {
	let totalItems = 0;

	switch (action.type) {
	case ActionTypes.ADD_PRODUCT_TO_CART: {
		let productExists = false;

		const newProduct = { 
			...action.payload.newProduct,
			productValue: action.payload.newProduct.productQuantity * action.payload.newProduct.productPrice,
		} as ShoppingCartProduct;

		const products = state.products.map(item => {
			if (item.productId === newProduct.productId) {
				productExists = true;
				item.productQuantity += newProduct.productQuantity;				
				item.productValue = item.productQuantity * item.productPrice;
			}

			totalItems += item.productValue;

			return item;
		});

		if (!productExists) {
			products.push(newProduct);
		}

		return {
			...state,
			totalItems: totalItems,
			totalValue: totalItems,
			products,
		};
	}

	case ActionTypes.CHANGE_QUANTITY: {
		return {
			...state,
			products: state.products.map(item => {
				if (item.productId === action.payload.product.productId) {
					item.productQuantity += action.payload.addQty;
					item.productValue = item.productQuantity * item.productPrice;
				}

				return item;
			})
		};
	}

	default:
		return state;   
	}
}