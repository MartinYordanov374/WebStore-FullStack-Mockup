const reducer=(state={productsInWishList:[{}], productsInCart:[{}]}, action)=>{
    switch(action.type)
    {
        case 'addToFavorites':
            console.log(state)
            return{
                ...state,
                productsInWishList: [...state.productsInWishList, {id:action.id}]
            }
        case 'addToCart':
            return{
                ...state,
                productsInCart: [...state.productsInCart, {id: action.id}]

            }
        default:
            return state
    }
}
export default reducer