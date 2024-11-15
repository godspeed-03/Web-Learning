import React from "react";
import SpiderBanner from "./Spider-Bg/SpiderBanner";
import Banner from "./components/Banner";

const App = () => {
  return (
    <SpiderBanner
    // these ar optional  to play with the spider banner
      // noOfDots={100}
      // colors={[
      //   "#FF5733",
      //   "#FFC300",
      //   "#DAF7A6",
      //   "#900C3F",
      //   "#C70039",
      //   "#581845",
      //   "#3498DB",
      //   "#1ABC9C",
      //   "#F39C12",
      //   "#E74C3C",
      // ]}
      // lineLenght={200}
    >
      {/* will be the component provoded by user */}
      <Banner /> 
      
    </SpiderBanner>
  );
};

export default App;
