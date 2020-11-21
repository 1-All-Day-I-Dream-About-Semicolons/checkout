import React from 'react';
import axios from 'axios';
import AvgReview from './AvgReview.jsx';
import Favorites from './Favorites.jsx';
import SizeGuide from './SizeGuide.jsx';
import OutOfStock from './OutOfStock.jsx';
import Bag from './Bag.jsx';
import Join from './Join.jsx';
import Sizes from './Sizes.jsx'
import styled from 'styled-components'
import GlobalFonts from '../fonts/fonts.js';


const StyledApp = styled.div`
`
const StyledHeader = styled.div`
    display: flex;
    align-items: flex-start;
`
const StyledColor = styled.h5`
    display: flex;
    justify-content: flex-start;
    font-family: AdihausDIN,Helvetica,Arial,sans-serif;
    font-weight: 400;
    line-height: 15px;
    font-size: 14px;
    text-transform: none;
    letter-spacing: 0;
`
const StyledPrice = styled.div`
    display: flex;
    justify-content: flex-start;
    font-weight: 500;
    white-space: nowrap;    
`
const Department = styled.div`
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`
const ProductName = styled.h1`
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 26px;
    line-height: 24px;
    margin-bottom: 0;
    font-family: AdihausDIN,Helvetica,Arial,sans-serif;
    font-style: italic;
    font-weight: 500;
    letter-spacing: 1.5px;
`
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
            favorites: 0,
            sizeGuide: false,
            outOfStock: false,
            joinCreators: false,
            bag: false,
            lowOnStock: -1
        }
        this.getProduct = this.getProduct.bind(this);
        this.getAvgReview = this.getAvgReview.bind(this);
        this.toggleComponent = this.toggleComponent.bind(this);
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
                    productName: data.itemName,
                    productPhoto: data.productPhoto,
                    color: data.color,
                    visiblePrice: data.stock[0].price,
                    stock: data.stock,
                    reviews: data.reviews,
                    avgReview: avgReview
                });
            })
            .catch((error) => {
                console.log('Error retrieving product information from server: ', error);
            })
    }

    toggleComponent(componentName, index) {
        switch (componentName) {
            case 'Size Guide': {
                this.setState({ sizeGuide: !this.state.sizeGuide });
                break;
            }
            case 'Size Out of Stock?': {
                this.setState({ outOfStock: !this.state.outOfStock });
                break;
            }
            case 'Join Creators Club': {
                this.setState({ joinCreators: !this.state.joinCreators });
                break;
            }
            case 'Favorites': {
                this.state.favorites ?
                    this.setState({ favorites: 0 }) :
                    this.setState({ favorites: 1 });
                break;
            }
            case 'Checkout Bag': {
                this.setState({ bag: !this.state.bag });
                break;
            }
            case 'Sizes in Stock': {
                this.setState({ lowOnStock: index });
                break;
            }
        }
    }


    render() {
        return (
            <StyledApp>
                <GlobalFonts />
                <div>
                <StyledHeader>
                    <Department> {this.state.department}</Department>
                    <AvgReview avgScore={this.state.avgReview} reviewsNum={this.state.reviews.length} />
                </StyledHeader>
                <ProductName><span>{this.state.productName}</span></ProductName>
                <StyledColor> <span>{this.state.color}</span></StyledColor>
                <StyledPrice> <span>{this.state.visiblePrice}</span></StyledPrice>
                <div className='selectSizeHeader'> Select Size</div>
                <div className='sizes'>
                    <Sizes stock={this.state.stock} toggle={this.toggleComponent} show={this.state.lowOnStock} />
                </div>
                <div className='sizesGuide'>
                    <SizeGuide toggle={this.toggleComponent} show={this.state.sizeGuide} />
                </div>
                <div className='outOfStock'>
                    <OutOfStock toggle={this.toggleComponent} show={this.state.outOfStock} />
                </div>
                <div className='favorite'>
                    <Favorites toggle={this.toggleComponent} name={'Favorites'} favorited={this.state.favorites} />
                </div>
                <div className='bag'>
                    <Bag toggle={this.toggleComponent} show={this.state.bag} />
                </div>
                <div className='join'>
                    <Join toggle={this.toggleComponent} show={this.state.joinCreators} />
                </div>
                </div>
            </StyledApp>
        );
    }
}
export default App;