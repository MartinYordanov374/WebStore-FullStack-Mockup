const reducer=(state={productsInWishList:[{}], productsInCart:[{}]}, action)=>{
    switch(action.type)
    {
        case 'addToFavorites':
            return{
                ...state,
                productsInWishList: [...state.productsInWishList, {name: action.name, image: action.image, price: action.price, quantity: action.quantity, id: action.id}]
            }
        case 'addToCart':
            console.log(state)
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
                    alert('found')
                }
                else{
                    alert('not found')
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
        
        default:
            return state
    }
}
export default reducer