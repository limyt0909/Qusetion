import React from 'react';


import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import GroupCard from '../Card/GroupCard';
import Slideshow from '../Slideshow/Slideshow';



const Home = () => {
    return (
        <div>
<Top />
<div class ="container">
<Slideshow />
<GroupCard />
</div>
<Bottom />
        </div>
    );
};

export default Home;