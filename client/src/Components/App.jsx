import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

import AvgReview from './AvgReview.jsx';
import Favorites from './Favorites.jsx';
import SizeGuide from './SizeGuide.jsx';
import OutOfStock from './OutOfStock.jsx';
import Bag from './Bag.jsx';
import Join from './Join.jsx';
import Sizes from './Sizes.jsx'

import GlobalFonts from '../fonts/fonts.js';


const StyledApp = styled.div`
    position: relative;
    z-index: 0;
    background: #fff;
    flex: 0 0 320px;
    flex-direction: column;
    max-width: 320px;
`
const SideBySide = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
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
const StyledHeader = styled.h5`
    display: flex;
    justify-content: flex-start;
    font-weight: 700;
    font-size: 18px;
    font-family: AdihausDIN, Helvetica, Arial, sans-serif;  
`
const Department = styled.div`
    width: 100px;
    height: 20px;
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
const StyledBuyBox = styled.section`
    display: block;
    margin-top: 20px;
    box-sizing: border-box;
`
const bagStyle = {
    'margin-top': '40px'
};
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
                    <SideBySide>
                        <Department> {this.state.department}</Department>
                        <AvgReview avgScore={this.state.avgReview} reviewsNum={this.state.reviews.length} />
                    </SideBySide>
                    <ProductName><span>{this.state.productName.toUpperCase()}</span></ProductName>
                    <StyledColor> <span>{this.state.color.toUpperCase()}</span></StyledColor>
                    <StyledHeader> <span>{`$${this.state.visiblePrice}`}</span></StyledHeader>
                    <StyledBuyBox>
                        <div>
                        <StyledHeader className='selectSizeHeader'> Select Size</StyledHeader>
                        <div className='sizes'>
                            <Sizes stock={this.state.stock} toggle={this.toggleComponent} show={this.state.lowOnStock} />
                        </div>
                        </div>
                        <SideBySide>
                            <div className='sizesGuide'>
                                <SizeGuide toggle={this.toggleComponent} show={this.state.sizeGuide} />
                            </div>
                            <div className='outOfStock'>
                                <OutOfStock toggle={this.toggleComponent} show={this.state.outOfStock} />
                            </div>
                        </SideBySide>
                        <SideBySide style = {bagStyle}>
                            <div className='bag'>
                                <Bag toggle={this.toggleComponent} show={this.state.bag} />
                            </div>
                            <div className='favorite'>
                                <Favorites toggle={this.toggleComponent} name={'Favorites'} favorited={this.state.favorites} />
                            </div>

                        </SideBySide>

                    </StyledBuyBox>

                    <div className='join' style = {{'margin-top': '20px'}}>
                        <Join toggle={this.toggleComponent} show={this.state.joinCreators} />
                    </div>
                </div>
            </StyledApp>
        );
    }
}
export default App;