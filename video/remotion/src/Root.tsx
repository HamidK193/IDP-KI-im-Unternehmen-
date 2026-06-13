import { Composition } from "remotion";
import { Main, TOTAL_FRAMES } from "./Main";
import { LinkedInMain, LN_TOTAL_FRAMES } from "./linkedin/Main";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="Main"
        component={Main}
        durationInFrames={TOTAL_FRAMES}
        fps={60}
        width={1920}
        height={1080}
      />
      {/* LinkedIn-Projektvideo: 4:5 (1080×1350) – nimmt im Feed mehr
          vertikale Fläche ein als quadratisch und stoppt das Scrollen besser. */}
      <Composition
        id="LinkedIn"
        component={LinkedInMain}
        durationInFrames={LN_TOTAL_FRAMES}
        fps={30}
        width={1080}
        height={1350}
      />
    </>
  );
};
