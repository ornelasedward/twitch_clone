import React from "react";
import LiveChannels from "./LiveChannels";
import Hero from "./Hero";
import IconBar from "./IconBar";
import Categories from "./Categories";
import LiveChannels2 from "./LiveChannels2";
import LiveChannels3 from "./LiveChannels3";
import LiveChannels4 from "./LiveChannels4";
import LiveChannels5 from "./LiveChannels5";
import LiveChannels6 from "./LiveChannels6";
import LiveChannels7 from "./LiveChannels7";

const Main = () => {
  return (
    <div className="absolute left-[64px] xl:left-[220px]">
      <Hero />
      <LiveChannels />
      <Categories />
      <IconBar />
      <LiveChannels2 />
      <LiveChannels3 />
      <LiveChannels4 />
      <LiveChannels5 />
      <LiveChannels6 />
      <LiveChannels7 />
    </div>
  );
};

export default Main;
