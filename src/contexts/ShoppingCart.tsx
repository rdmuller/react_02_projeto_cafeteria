import { createContext, ReactNode, useState } from "react";

export interface ShoppingCartProduct {
    productId: number;
    productQuantity: number;
    productPrice: number;
    productName: string;
	productPicture: string;
}

interface ShoppingCartContextType {
    products: ShoppingCartProduct[];
    addProductToCart: (product: ShoppingCartProduct) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

type ShoppingCartContextProviderProps = {
    children: ReactNode;
}

export function ShoppingCartContextProvider({children, }: ShoppingCartContextProviderProps) {
	const [products, setProducts] = useState<ShoppingCartProduct[]>([]);

	function addProductToCart(newProduct: ShoppingCartProduct) {
		let productExists = false;
		const newProducts = products.map(item => {
			if (item.productId !== newProduct.productId) {
				return item;
			} else {
				item.productQuantity += newProduct.productQuantity;
				productExists = true;
				return item;
			}
		});

		if (!productExists) {
			newProducts.push(newProduct);
		}

		setProducts(newProducts);
	}
    
	console.log(JSON.stringify(products));

	return (
		<ShoppingCartContext.Provider value={{ products, addProductToCart }}>
			{children}
		</ShoppingCartContext.Provider>
	);
}