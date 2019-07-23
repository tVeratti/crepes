import { useEffect, useRef, useState } from "react";
import { Illustration, RoundedRect, useRender } from "react-zdog";

const STROKE = 20;
const RADIUS = 30;

export default () => {
  const size = 10;
  const width = 150;
  const height = 200;

  const [rotation, setRotation] = useState(0);
  const ref = useRef(undefined);
  console.log(rotation);
  return (
    <Illustration onClick={() => setRotation(rotation + 0.1)}>
      <RoundedRect
        ref={ref}
        width={width}
        height={size}
        color="#ccc"
        fill={true}
        rotate={{ y: rotation, z: rotation }}
        cornerRadius={RADIUS}
        stroke={STROKE}
      >
        <RoundedRect
          width={size}
          height={height}
          color="#ddd"
          fill={true}
          cornerRadius={RADIUS}
          stroke={STROKE}
          translate={{ y: height / -2 }}
        />
      </RoundedRect>
    </Illustration>
  );
};
