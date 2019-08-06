import { PureComponent } from 'react';
import { Illustration, RoundedRect } from 'react-zdog';

import './style.scss';

const STROKE = 15;
const RADIUS = 30;

export default class Stick extends PureComponent {
  size = 5;
  width = 150;
  height = 200;

  state = { rotation: 0, yRotation: 0 };

  render() {
    const { position } = this.props;
    const rotation = (position[0] + position[1]) / 100;

    return (
      <div className="stick">
        <Illustration>
          {/* Handle */}
          <RoundedRect
            width={this.width}
            height={this.size}
            color="#e6d09a"
            fill={true}
            translate={{ x: position[0], y: position[1] }}
            rotate={{ x: -0.8, y: rotation, z: position[0] / 100 }}
            cornerRadius={RADIUS}
            stroke={STROKE}>
            {/* Head */}
            <RoundedRect
              width={this.size - 5}
              height={this.height}
              color="#edd69f"
              fill={true}
              cornerRadius={RADIUS}
              stroke={STROKE}
              translate={{ y: this.height / -2 - 10 }}
            />
          </RoundedRect>
        </Illustration>
      </div>
    );
  }
}
