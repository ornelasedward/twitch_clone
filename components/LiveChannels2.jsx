import React, { useRef } from "react";
import LiveChannelItem from "./LiveChannelItem";
import Live1 from "../public/assets/live/live1.jpg";
import Live2 from "../public/assets/live/live2.jpg";
import Live3 from "../public/assets/live/live3.jpg";
import Live4 from "../public/assets/live/live4.jpg";
import Live5 from "../public/assets/live/live5.jpg";
import Live6 from "../public/assets/live/live6.jpg";
import Live7 from "../public/assets/live/live7.jpg";
import Live8 from "../public/assets/live/live8.jpg";
import Live9 from "../public/assets/live/live9.jpg";
import Live10 from "../public/assets/live/live10.jpg";
import Live11 from "../public/assets/live/live11.jpg";
import Live12 from "../public/assets/live/live12.jpg";

const LiveChannels2 = () => {
  return (
    <div id="live" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        Recommended <span className="text-[#9147ff]">CSGO Channels</span> we
        think you'll like
      </h2>
      {/* Container */}
      <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-4 py-2">
        <LiveChannelItem
          img={Live7}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/1c14619b-d930-48d4-bd17-91784c8bde0f-profile_image-70x70.jpeg"
          title="LET'S BUILD STREAM / MINECRAFT"
          user="WonderBoIIstreams"
          game="Minecraft"
        />

        <LiveChannelItem
          img={Live8}
          profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/f6888517-2345-4e91-abde-9b7940426410-profile_image-70x70.png"
          title="WE HIT THOSE!!"
          user="TSM_Dyrus"
          game="Tom Clancy's Rainbow Six Siege"
        />
        <div className="xs:hidden md:block">
          <LiveChannelItem
            img={Live9}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/d81e652c-97a1-4858-be3c-0a3a3efa4e75-profile_image-50x50.png"
            title="LIVE: The World's Most Epic Gameplay"
            user="FragDelta"
            game="Counter Strike: Global Offensive"
          />
        </div>
        <div className="xs:hidden 2xl:block">
          <LiveChannelItem
            img={Live10}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/66db29e0-80c5-4227-99a2-d450008c85a7-profile_image-50x50.png"
            title="MOM IM SCARED!!!!"
            user="F00zie"
            game="Bendy And The Ink Machine"
          />
        </div>
        <div className="xs:hidden 3xl:block">
          <LiveChannelItem
            img={Live11}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/6f5cf913-d503-4cc4-a50c-3c7c09055f52-profile_image-50x50.png"
            title="CHARITY STREAM! any support is ap.."
            user="HollyWoodBobNYE"
            game="PUBG: BATTLEGROUNDS"
          />
        </div>
        <div className="xs:hidden 4xl:block">
          <LiveChannelItem
            img={Live12}
            profile_img="https://static-cdn.jtvnw.net/jtv_user_pictures/118bbe20-08f1-49e3-a95f-cccdcc5451c0-profile_image-50x50.png"
            title="LETS GET THIS MANSION!! / Heists only"
            user="OverL0rdBrinkz"
            game="Grand Theft Auto V"
          />
        </div>
      </div>
      <div className="relative flex items-center">
        <div class="flex-grow border-t border-gray-400"></div>
        <div className="rounded hover:bg-gray-700 py-1">
          <span class="flex-shrink mx-4 text-[#BF94FF] font-bold hover:text-gray-200">
            Show more v
          </span>
        </div>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
    </div>
  );
};

export default LiveChannels2;
