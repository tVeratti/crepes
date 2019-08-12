import { PureComponent } from 'react';
import { Illustration, RoundedRect, Anchor } from 'react-zdog';

import './style.scss';

const STROKE = 15;
const RADIUS = 30;

export default class Stick extends PureComponent {
  size = 5;
  width = 150;
  height = 200;

  state = { mouse_position: {} };

  componentDidMount() {
    //document.addEventListener('mousemove', this.moveHandle);
  }

  componentWillUnmount() {
    //document.removeEventListener('mousemove', this.moveHandle);
  }

  moveHandle = e => {
    const { pageX: x, pageY: y } = e;
    this.setState({ mouse_position: { x, y } });
  };

  render() {
    const { position, degrees, size } = this.props;
    const [x, y] = position;

    const color = 'white';
    return (
      <div
        className="stick"
        style={{
          width: this.height * 3,
          height: this.height * 3
        }}>
        <Illustration zoom={0.7}>
          <Anchor rotate={{ z: -(degrees + 0.15) }}>
            {/* Head */}
            <RoundedRect
              width={this.width}
              height={this.size}
              color={color}
              fill={true}
              translate={{ x: -130 }}
              rotate={{ x: Math.sin(degrees) + 200 }}
              cornerRadius={RADIUS}
              stroke={STROKE}>
              {/* Handle */}
              <RoundedRect
                width={this.size - 5}
                height={this.height}
                color={color}
                fill={true}
                cornerRadius={RADIUS}
                stroke={STROKE}
                translate={{ y: this.height / -2 - 10 }}
              />
            </RoundedRect>
          </Anchor>
        </Illustration>
      </div>
    );
  }
}
