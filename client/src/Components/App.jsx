import React from 'react';
import axios from 'axios';
import AvgReview from './AvgReview.jsx';
import SizeGuide from './SizeGuide.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: 0,
            department: '',
            productName: '',
            productPhoto: '',
            color: '',
            visiblePrice: 0,
            stock: [],
            reviews: [],
            avgReview: 0,
            clickEvents: {
                favorites: false,
                sizeGuide: false
            }
        }
        this.getProduct = this.getProduct.bind(this);
        this.getAvgReview = this.getAvgReview.bind(this);
        this.toggleSizeGuide = this.toggleSizeGuide.bind(this);
        this.handleSizeClick = this.handleSizeClick.bind(this);
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
                    avgReview: avgReview,
                });
            })
            .catch((error) => {
                console.log('Error retrieving product information from server: ', error);
            })
    }
    handleSizeClick(e) {
        e.preventDefault();
        this.toggleSizeGuide();

    }
    toggleSizeGuide() {
        if (this.state.clickEvents.sizeGuide) {
            this.setState({ clickEvents: { sizeGuide: false } });
        } else {
            this.setState({ clickEvents: { sizeGuide: true } });
        }

    }
    render() {
        return (
            <div>
                <div className='department'> {this.state.department}</div>
                <div className='avgReview'> <AvgReview avgScore={this.state.avgReview} reviewsNum={this.state.reviews.length} /> </div>
                <div className='productName'> {this.state.productName}</div>
                <div className='productColor'> {this.state.color}</div>
                <div className='itemPrice'> {this.state.visiblePrice}</div>
                <div className='selectSizeHeader'> Select Size</div>
                <div className='sizes'> sizes-component-placeholder</div>
                <button className='sizeGuide' onClick={this.handleSizeClick}>
                    {this.state.clickEvents.sizeGuide ? <SizeGuide close={this.toggleSizeGuide} /> : undefined}
                Size Quide
                </button>
                <div className='outOfStock'> out-of-stock-component-placeholder</div>
                <div className='favorite'> favorite-component-placeholder</div>
                <div className='bag'> bag-component-placeholder</div>
                <div className='join-link'> join-link-component-placeholder</div>
            </div>


        );
    }
}
export default App;