import React, { Component } from 'react'
import shoppingMap from '../../media/shopping-map.png'
import './ShoppingMap.css'

class ShoppingMap extends Component {
    static defaultProps = {
        personalList: []
    }

    state = {
        aisles: []
    }

    componentDidMount() {

        let aisles = []

        //generate array with individual objects that group items within a specific aisle
        for(let i = 0; i < this.props.personalList.length; i++) {
            let mapped = aisles.find(aisle => parseInt(aisle.aisle) === parseInt(this.props.personalList[i].aisle))

            if(mapped) {
                mapped.items.push(this.props.personalList[i].product_name)
            }  else {
                let object = {
                    aisle: this.props.personalList[i].aisle,
                    items: [this.props.personalList[i].product_name]
                }
                aisles.push(object)
            }
        }

        this.setState({
            aisles: aisles
        })
    }

    render() {
        

        return(
            <div className="route">
            <section  className="shopping-route">
                <img ref="image" src={shoppingMap}  alt="shopping-map"/>
            </section>
            <section className="instructions">
                {/* render items grouped by aisle */
                !this.state.aisles ? "" :
                    this.state.aisles.map((aisle, index) => 
                        <section key={index}>
                        <h3>Go to aisle {aisle.aisle} and pick:</h3>
                        {aisle.items.map((item, index) => 
                            <p key={index}>{item}</p>
                        )}
                        </section>
                    )
                }
            </section>
            </div>
        )
    }
}

export default ShoppingMap