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
    const { position, degrees, crepe_size } = this.props;
    const [x, y] = position;

    return (
      <div
        className="stick"
        style={{ width: this.height * 2, height: this.height * 2 }}>
        <Illustration>
          <Anchor rotate={{ z: -degrees }}>
            {/* Handle */}
            <RoundedRect
              width={this.width}
              height={this.size}
              color="#e6d09a"
              fill={true}
              rotate={{ x: Math.sin(degrees) + 200 }}
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
          </Anchor>
        </Illustration>
      </div>
    );
  }
}
