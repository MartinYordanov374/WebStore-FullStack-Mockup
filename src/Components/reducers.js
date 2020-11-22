const reducer=(state={productsInWishList:[{}] }, action)=>{
    switch(action.type)
    {
        case 'addToFavorites':
            console.log(state)
            return{
                ...state,
                productsInWishList: [...state.productsInWishList, {id:action.id}]
            }
        default:
            return state
    }
}
export default reducer