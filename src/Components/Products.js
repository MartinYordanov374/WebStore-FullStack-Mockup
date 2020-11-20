import React, { Component } from 'react'
import {connect} from 'react-redux'
class Products extends Component {
    render() {
        let {products} = this.props
        const productsList = [
            {
                name: 'test1',
                image: 'image1',
                price: 'testPrice',
                description: 'lorem ipsum lol'
            },
            {
                name: 'test1',
                image: 'image1',
                price: 'testPrice',
                description: 'lorem ipsum lol'
            }
        ]
        return (
            <div>
                {productsList.map(product=><div>{product.name}</div>)}
            </div>
        )
    }
}
const mapStateToProps=(state={products:[{}]})=>{
    return{
        products: state.products
    }
}
export default connect(mapStateToProps)(Products)