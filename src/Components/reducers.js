const reducer=(state={productsInWishList:[{}], productsInCart:[{}]}, action)=>{
    switch(action.type)
    {
        case 'addToFavorites':
            return{
                ...state,
                productsInWishList: [...state.productsInWishList, {name: action.name, image: action.image, price: action.price}]
            }
        case 'addToCart':
            console.log(state)
            return{
                ...state,
                productsInCart: [...state.productsInCart, {name: action.name, image: action.image, price: action.price}]

            }
        case 'removeFromCart':
            let updatedCart = [...state.productsInCart]
            let indexOf = updatedCart.indexOf(product=>product.id===action.id)
            console.log(indexOf)
            if(indexOf<=-1){
                updatedCart.splice(indexOf, 1)
            }
            return{
                ...state,
                productsInCart: updatedCart
            }
                
            
        default:
            return state
    }
}
export default reducer