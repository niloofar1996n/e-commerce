import React from 'react';
import './shopPage.scss';
import SHOP_DATA from "./shopData";
import CollectionPreview from "../../collectionsPreview/collectionsPreview";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            collections : SHOP_DATA
        }
    }

    render() {
        const {collections } = this.state
        return(
            <div className='shop'>
                {collections.map(({id , ...otherCollectionsProps})=>(
                    <CollectionPreview key={id} {...otherCollectionsProps} />
                    ))}
            </div>
        )
    }
}

export default ShopPage;