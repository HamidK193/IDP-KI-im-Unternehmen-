import { Composition } from "remotion";
import { Main, TOTAL_FRAMES } from "./Main";

export const RemotionRoot = () => {
  return (
    <Composition
      id="Main"
      component={Main}
      durationInFrames={TOTAL_FRAMES}
      fps={60}
      width={1920}
      height={1080}
    />
  );
};
