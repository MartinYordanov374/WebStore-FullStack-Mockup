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
        default:
            return state
    }
}
export default reducer