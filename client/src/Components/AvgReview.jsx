import React from 'react';
import Ratings from 'react-ratings-declarative';

const AvgReview = props => (
    <div>
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
    </div>

);

module.exports = AvgReview;