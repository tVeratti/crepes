import { PureComponent } from 'react';

const TYPE_AUTO = 'AUTO';
const TYPE_SCROLL = 'SCROLL';

export default class Pather extends PureComponent {
  static defaultProps = {
    steps: 1,
    speed: 0.8,
    type: TYPE_AUTO
  };

  state = {
    step: 0,
    index: 0,
    target_position: [0, 0]
  };

  points = [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]];

  offset = 150;

  componentDidMount() {
    switch (this.props.type) {
      case TYPE_AUTO:
        this.frame_id = this.move();
        break;
      case TYPE_SCROLL:
        document.addEventListener('scroll', this.move);
        break;
    }
  }

  componentWillUnmount() {
    switch (this.props.type) {
      case TYPE_AUTO:
        cancelAnimationFrame(this.frame_id);
        break;
      case TYPE_SCROLL:
        document.removeEventListener('scroll', this.move);
        break;
    }
  }

  move = () => {
    const { speed } = this.props;

    let { index, step } = this.state;
    let nextIndex = index + 1;
    if (nextIndex > this.points.length - 1) {
      nextIndex = 0;
      step += 1;
    }

    const { target_position: prev_position } = this.state;
    const { target_position: next_position } = this.getPosition(nextIndex);

    const x_speed = next_position[0] - prev_position[0] > 0 ? 1 : -1;
    const y_speed = next_position[1] - prev_position[1] > 0 ? 1 : -1;

    // Move the target position forward by the speed.
    const target_position = [
      Math.round(prev_position[0] + x_speed * speed),
      Math.round(prev_position[1] + y_speed * speed)
    ];

    const distance =
      Math.abs(target_position[0] - next_position[0]) +
      Math.abs(target_position[1] - next_position[1]);

    if (distance <= 50) index = nextIndex;

    this.setState({
      step,
      index,
      target_position
    });

    return requestAnimationFrame(this.move);
  };

  getPosition = index => {
    const target_point = this.points[index];
    const target_position = [
      target_point[0] * this.offset,
      target_point[1] * this.offset
    ];

    return { target_point, target_position };
  };

  render() {
    const { render } = this.props;
    const { target_position: position, index, step } = this.state;
    const progress = [position[0] / this.offset, position[1] / this.offset];

    // Get the degrees of rotation based on the positional quadrant.
    const degrees = Math.atan2(progress[1], progress[0]) + 180 / Math.PI;
    return render({ position, degrees, progress, step });
  }
}
