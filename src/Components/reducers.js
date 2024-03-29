const reducer=(state={productsInWishList:[{}], productsInCart:[{}], productsOrdered:[{}], orderHistory:[{}]}, action)=>{
    switch(action.type)
    {
        case 'showOrderHistory': 
            return{
                ...state,
                orderHistory: [...state.orderHistory, {products: action.products, quantity: action.quantity, price: action.price, orderStatus: action.orderStatus}]
            }
        case 'clearOrderHistory': 
            return{
                ...state,
                orderHistory: []
            }
        case 'addToFavorites':
            return{
                ...state,
                productsInWishList: [...state.productsInWishList, {name: action.name, image: action.image, price: action.price, quantity: action.quantity, id: action.id}]
            }
        case 'addToCart':
            return{
                ...state,
                productsInCart: [...state.productsInCart, {name: action.name, image: action.image, price: action.price, quantity: action.quantity, id: action.id}]

            }
        case 'removeFromCart':
            let updatedCart = [...state.productsInCart]
            let indexOf = updatedCart.findIndex(product=>product.id===action.id)
            if(indexOf>-1){
                updatedCart.splice(indexOf, 1)
            }
            return{
                ...state,
                productsInCart: updatedCart
            }
            case 'removeFromWishList':
                let updatedWishList = [...state.productsInWishList]
                let indexOfFavorite = updatedWishList.findIndex(product=>product.id==action.id)
                if(indexOfFavorite> -1){
                    updatedWishList.splice(indexOfFavorite, 1)
                }
                return{
                    ...state,
                    productsInWishList: updatedWishList
                }
        case 'increase':
            let tempCart =state.productsInCart.map(product=>{
                if(product.id===action.id && product.quantity>=1){
                    product={...product, quantity: product.quantity+1}
                }
                return product;
            })
            return{
                ...state,
                productsInCart: tempCart
            }
            case 'decrease':
                let lowerCart =state.productsInCart.map(product=>{
                    if(product.id===action.id && product.quantity>1){
                        product={...product, quantity: product.quantity-1}
                    }
                    return product;
                })
                return{
                    ...state,
                    productsInCart: lowerCart
                }
            case 'clearCart':
                let cartNow = state.productsInCart;
                cartNow = [];
                return{
                    ...state,
                    productsInCart: cartNow
                }
            case 'finishOrder':
                let productsOrdered = state.productsOrdered
                alert(JSON.stringify(productsOrdered))
                return{
                    ...state,
                    productsOrdered: [...state.productsOrdered, {products: action.products, quantity: action.quantity, price: action.price}]
                }
            case 'clearProductsOrdered':
                let productsOrderedNew = state.productsOrdered;
                productsOrderedNew = []
                return{
                    ...state,
                    productsOrdered: productsOrderedNew
                }
        default:
            return state
    }
}
export default reducer