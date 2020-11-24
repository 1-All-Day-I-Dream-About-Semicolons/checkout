import React from 'react';
import styled from 'styled-components'

const StyledStars = styled.div`
display: inline-flex;
width: 100px;
height: 20px;
text-decoration: underline;
font-weight: 700;
&:hover {
    background: black;
    color: white;
    cursor: pointer;
}
`
const starStyle = {
    width: '20%',
    position: 'relative',

};
const AvgReview = props => {
    const starMaker = () => {
        const stars = [];
        for (var i = 0; i < 5; i++) {
            if (i < props.avgScore) {
                var fillValue = 'black';
            } else if (i > Math.ceil(props.avgScore)) {
                var fillValue = 'none';
            } else if (i === Math.ceil(props.avgScore)) {
                var fillValue = "url(#half)";
                var linearGradient =
                    <linearGradient id="half">
                        <stop offset="0%" stop-color="black" />
                        <stop offset="50%" stop-color="black" />
                        <stop offset="50%" stop-color="white" />
                        <stop offset="100%" stop-color="white" />
                    </linearGradient>;
            }
            stars.push(
                <div style={starStyle}>
                    <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" data-di-rand="1605999962858">
                        <defs>{linearGradient}</defs>
                        <path fill={fillValue} stroke="currentColor" stroke-miterlimit="10" d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"></path>
                    </svg>
                </div>);
        }
        return stars;
    }
    var stars = starMaker();
    return (<StyledStars>
        {stars.map((star) => (
            star
        ))}
        {props.reviewsNum}
    </StyledStars>);



};

module.exports = AvgReview;