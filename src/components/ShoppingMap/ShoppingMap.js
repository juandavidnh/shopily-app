import React, { Component } from 'react'
import shoppingMap from '../../media/shopping-map.png'
import './ShoppingMap.css'

class ShoppingMap extends Component {
    componentDidMount() {
        const canvas = this.refs.shoppingMaps
        const ctx = canvas.getContext("2d")
        const img = shoppingMap 

        img.onload = () => {
            ctx.drawImage(img, 0, 0)   
        }
    }

    render() {
        return(
            <section  class="shopping-route">
                <canvas ref="shoppingMaps" id="shopping-map" width="800" height="600">
                    Your browser does not support the HTML5 canvas tag.
                </canvas>
            </section>
        )
    }
}

export default ShoppingMap