import React from 'react';
import Ratings from 'react-ratings-declarative';
import styled from 'styled-components'

const StyledAvgReview = styled.div`
display: flex;
justify-content: flex-end;
`
const AvgReview = props => (
    <StyledAvgReview>
        <Ratings
            rating={props.avgScore}
            widgetRatedColors="black">
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
        </Ratings>
        {props.reviewsNum}
    </StyledAvgReview>

);

module.exports = AvgReview;