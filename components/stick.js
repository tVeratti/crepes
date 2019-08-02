import { PureComponent } from 'react';
import { Illustration, RoundedRect } from 'react-zdog';

import './stick.scss';

const STROKE = 15;
const RADIUS = 30;

export default class Stick extends PureComponent {
  size = 5;
  width = 150;
  height = 200;

  state = { rotation: 0, yRotation: 0 };

  componentDidMount() {
    this.rotateZ();
  }

  rotateZ = () => {
    const { rotation } = this.state;
    this.setState({ rotation: rotation + 0.01 });
    requestAnimationFrame(this.rotateZ);
  };

  render() {
    const { rotation } = this.state;
    const oscillation = Math.sin(rotation);

    return (
      <div className="stick">
        <Illustration>
          <RoundedRect
            width={this.width}
            height={this.size}
            color="#e6d09a"
            fill={true}
            rotate={{ x: -0.8, y: rotation, z: oscillation / 2 }}
            cornerRadius={RADIUS}
            stroke={STROKE}
          >
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
