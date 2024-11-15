import React from "react";
import SpiderBanner from "./Spider-Bg/SpiderBanner";
import Banner from "./components/Banner";

const App = () => {
  return (
<SpiderBanner noOfDots={50} colors={['red', 'blue', 'green']}>
  <Banner/>
</SpiderBanner>
  );
};

export default App;
