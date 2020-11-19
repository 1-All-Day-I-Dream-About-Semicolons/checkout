import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productId : 0,
            department : '',
            productName : '',
            productPhoto : '',
            color : '',
            visiblePrice : 0,
            stock : [],
            reviews : [],
            avgReview : 0,
            addedToFavorites : false
        }
        this.getProduct = this.getProduct.bind(this);
        this.getAvgReview = this.getAvgReview.bind(this);   
    }
    componentDidMount() {
        this.getProduct();
    }
    getAvgReview(reviewArray) {
        var sum = 0;
        var counter = 0;
        reviewArray.map((review) => {
            sum += review.stars;
            counter++;
        })
        return sum / counter;
    }
    getProduct(id) {
        var id = id || '1';
        axios.get(`http://localhost:3005/api/products/${id}/`)
            .then((response) => {
                console.log(response.data);
                const data = response.data[0];
                var avgReview = this.getAvgReview(data.reviews);
                this.setState({
                    productId: data.id,
                    department: data.department,
                    productName: data.productName,
                    productPhoto: data.productPhoto,
                    color: data.color,
                    visiblePrice: data.stock[0].price,
                    stock: data.stock,
                    reviews: data.reviews,
                    avgReview : avgReview,
                });
            })
            .catch((error) => {
                console.log('Error retrieving product information from seriver: ', error);
            })
    }
    render() {
        return (
            <div>
                <div className='department'> {this.state.department}</div>
                <div className='avgReview'> avgReview-component-placeholder {this.state.avgReview}</div>
                <div className='productName'> {this.state.productName}</div>
                <div className='productColor'> {this.state.color}</div>
                <div className='itemPrice'> {this.state.visiblePrice}</div>
                <div className='selectSizeHeader'> Select Size</div>
                <div className='sizes'> sizes-component-placeholder</div>
                <div className='sizeGuide'> size-guide-component-placeholder</div>
                <div className='outOfStock'> out-of-stock-component-placeholder</div>
                <div className='favorite'> favorite-component-placeholder</div>
                <div className='bag'> bag-component-placeholder</div>
                <div className='join-link'> join-link-component-placeholder</div>
            </div>


        );
    }
}
export default App;