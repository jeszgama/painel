import React from 'react';

// import GeneralVision from '../GeneralVision';
// import CallendarOfEvents from '../CallendarOfEvents';
// import Testimonials from '../Testimonials';
// import News from '../News';
import ListVideos from '../../pages/Videos/ListVideos';
// import Reports from '../Reports';
// import Prayers from '../Prayers';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      {/* <GeneralVision/> */}
      {/* <CallendarOfEvents/> */}
      {/* <Testimonials/> */}
      {/* <News/> */}
      <ListVideos />
      {/* <Reports/> */}
      {/* <Prayers/> */}
    </Container>
  );
}

export default Main;