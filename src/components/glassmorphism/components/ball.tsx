import {
  add,
  Circle,
  LinearGradient,
  mix,
  SkiaValue,
  SkPoint,
  sub,
  useComputedValue,
  useLoop,
  vec,
  Vector,
} from '@shopify/react-native-skia';
import React, { FC } from 'react';

interface BallProps {
  circle: {
    id: number;
    c: Vector;
    colors: string[];
  };
}

const Ball: FC<BallProps> = ({ circle }) => {
  const r = 40;

  const progress = useLoop({ duration: 3000 });

  const getStart = (c: SkPoint): SkiaValue<SkPoint> => {
    return useComputedValue(
      () => sub(c, vec(0, mix(progress.current, r, r / 0.5))),
      [progress],
    );
  };

  const getEnd = (c: SkPoint): SkiaValue<SkPoint> => {
    return useComputedValue(
      () => add(c, vec(0, mix(progress.current, r, r / 0.5))),
      [],
    );
  };
  const radius = useComputedValue(
    () => mix(progress.current, r, r / 0.5),
    [progress],
  );

  return (
    <Circle c={circle.c} r={radius}>
      <LinearGradient
        start={getStart(circle.c)}
        end={getEnd(circle.c)}
        colors={circle.colors}
      />
    </Circle>
  );
};

export { Ball };
