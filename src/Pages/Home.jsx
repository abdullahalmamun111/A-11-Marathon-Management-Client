import React from 'react';
import Slider from '../Components/Slider';
import Marathon from '../Components/Marathon';
import UpcomingMarathon from '../Components/UpcomingMarathon';
import SuccessStories from '../Components/SuccessStories';
import MarathonHighlights from '../Components/MarathonHighlights ';

const Home = () => {

    return (
        <div>
            <Slider></Slider>
            <Marathon></Marathon>
            <UpcomingMarathon></UpcomingMarathon>
            <SuccessStories></SuccessStories>
            <MarathonHighlights></MarathonHighlights>
        </div>
    );
};

export default Home;