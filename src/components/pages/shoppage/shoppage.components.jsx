import React ,{Component} from 'react';
import PRODUCT_DATA from './product-data.js';
import PreviewCollection from '../../preview-collection/preview-collection.components.jsx';

class ShopPage extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            Products: PRODUCT_DATA
        }
    }

    render() {
        return (
            <div className="shoppage">
                {this.state.Products.map(({id, ...otherKey})=> 
                    (
                        <PreviewCollection key = {id} {...otherKey} />
                    ))
                }
            </div>
        )
    }
} 

export default ShopPage;