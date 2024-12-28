import React from 'react';
import Slider from '../Components/Slider';
import Marathon from '../Components/Marathon';
import UpcomingMarathon from '../Components/UpcomingMarathon';
import SuccessStories from '../Components/SuccessStories';
import MarathonHighlights from '../Components/MarathonHighlights ';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Home || RunSphere</title>
            </Helmet>
            <Slider></Slider>
            <Marathon></Marathon>
            <UpcomingMarathon></UpcomingMarathon>
            <SuccessStories></SuccessStories>
            <MarathonHighlights></MarathonHighlights>
        </div>
    );
};

export default Home;