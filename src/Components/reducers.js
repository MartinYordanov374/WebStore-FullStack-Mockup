const reducer=(state={productsInWishList:[{}], productsInCart:[{}]}, action)=>{
    switch(action.type)
    {
        case 'addToFavorites':
            return{
                ...state,
                productsInWishList: [...state.productsInWishList, {name: action.name, image: action.image, price: action.price, quantity: action.quantity}]
            }
        case 'addToCart':
            console.log(state)
            return{
                ...state,
                productsInCart: [...state.productsInCart, {name: action.name, image: action.image, price: action.price, quantity: action.quantity}]

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
        case 'increase':
            let tempCart =state.productsInCart.map(product=>{
                if(product.id===action.id){
                    product={...product, quantity: product.quantity+1}
                }
                return product;
            })
            return{
                ...state,
                productsInCart: tempCart
            }
        
        
        default:
            return state
    }
}
export default reducer