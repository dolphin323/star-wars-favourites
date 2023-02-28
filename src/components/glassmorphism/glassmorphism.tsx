import React, { FC } from "react";
import { useWindowDimensions } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import {
  BackdropFilter,
  Blur,
  Canvas,
  Fill,
  rect,
  rrect,
  vec,
} from "@shopify/react-native-skia";
import { AppColor } from "@utils/style";

import { Ball } from "./components/ball";

const Glassmorphism: FC = () => {
  const { width, height } = useWindowDimensions();
  const headerHeight = useHeaderHeight();

  const CIRCLES = [
    {
      id: 1,
      c: vec(width / 3, (height - headerHeight) / 6),
      colors: ["#DB82FA", "#5D00A7"],
    },
    {
      id: 2,
      c: vec(width - 60, (height - headerHeight) / 2),
      colors: ["#5F2773", "#DBB4E9"],
    },
    {
      id: 3,
      c: vec(60, height / 1.5),
      colors: ["#BE4FE5", "#DB82FA"],
    },
    {
      id: 4,
      c: vec(width - 80, height - headerHeight - 60),
      colors: ["#DBB4E9", "#5F2773"],
    },
  ];

  return (
    <Canvas
      style={{
        flex: 1,
        width,
        height: height - headerHeight,
        backgroundColor: AppColor.BACKGROUND.GRAY,
      }}
    >
      <Fill color={AppColor.BACKGROUND.GRAY} />
      {CIRCLES.map((circle) => {
        return <Ball circle={circle} key={circle.id} />;
      })}

      <BackdropFilter
        filter={<Blur blur={8} />}
        clip={rrect(rect(0, 0, width, height), 20, 20)}
      >
        <Fill color="rgba(42,28,103, 0.7)" />
      </BackdropFilter>
    </Canvas>
  );
};

export { Glassmorphism };
