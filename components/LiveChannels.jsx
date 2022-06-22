import React, { useRef } from "react";
import LiveChannelItem from "./LiveChannelItem";
import Live1 from "../public/assets/live/live1.jpg";
import Live2 from "../public/assets/live/live2.jpg";
import Live3 from "../public/assets/live/live3.jpg";
import Live4 from "../public/assets/live/live4.jpg";
import Live5 from "../public/assets/live/live5.jpg";
import Live6 from "../public/assets/live/live6.jpg";

const LiveChannels = (tag1, tag2) => {
  return (
    <div id="live" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span>Live Channels</span> we think youll like
      </h2>
      {/* Container */}
      <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-4 py-2">
        <LiveChannelItem
          img={Live1}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/fef9fc35-20a0-4884-8ee1-10ab74c22687-profile_image-70x70.png"
          title="Highlight: Fortnite on a stormy day!"
          user="Ninja"
          game="Fortnite"
        />

        <LiveChannelItem
          img={Live2}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/9193acb2-d282-4474-acf3-a286407d3ebf-profile_image-50x50.png"
          title="$3000 2v2 tournament w/ Mutex!"
          user="FKACLIpPz"
          game="Call Of Duty: MW2"
        />
        <div className="xs:hidden md:block">
          <LiveChannelItem
            img={Live3}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/ad17eb22-c6e6-40d5-8777-17633c36fa04-profile_image-70x70.png"
            title="Luckiest Hatch Escape EVER!"
            user="KnaughtyKnancy"
            game="Dead By Daylight"
          />
        </div>
        <div className="xs:hidden 2xl:block">
          <LiveChannelItem
            img={Live4}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/04dbc9bb-27bf-4975-b9ab-361268e8f5b5-profile_image-50x50.png"
            title="CRACKED Valorant Plays only"
            user="Leifline"
            game="Valorant"
          />
        </div>
        <div className="xs:hidden 3xl:block">
          <LiveChannelItem
            img={Live5}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/e2eacc78-a621-4000-8989-367ae16288a2-profile_image-50x50.png"
            title="Laugh at my Pain / THE QUARRY"
            user="ChimiChow"
            game="The Quarry"
          />
        </div>
        <div className="xs:hidden 4xl:block">
          <LiveChannelItem
            img={Live6}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/e31a4c21-bc33-4f68-bbf8-6106c6bc9544-profile_image-70x70.png"
            title="OWOWOWOWOWOWOWOWOW"
            user="Sp00sy"
            game="Apex Legends"
          />
        </div>
      </div>
      <div className="relative flex items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <div className="rounded hover:bg-gray-700 py-1">
          <span className="flex-shrink mx-4 text-[#BF94FF] font-bold hover:text-gray-200">
            Show more v
          </span>
        </div>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
    </div>
  );
};

export default LiveChannels;
