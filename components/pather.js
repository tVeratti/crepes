import { PureComponent } from 'react';

export default class Pather extends PureComponent {
  static defaultProps = {
    speed: 0.8
  };

  state = {
    index: 0,
    target_position: [0, 0]
  };

  points = [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]];

  offset = 150;

  componentDidMount() {
    this.frame_id = this.move();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frame_id);
  }

  move = () => {
    const { speed } = this.props;

    let { index } = this.state;
    let nextIndex = index + 1;
    if (nextIndex > this.points.length - 1) nextIndex = 0;

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
    const { target_position, index } = this.state;
    const progress = [
      target_position[0] / this.offset,
      target_position[1] / this.offset
    ];

    // Get the degrees of rotation based on the positional quadrant.
    const degrees = Math.atan2(progress[1], progress[0]) + 180 / Math.PI;
    return render(target_position, degrees, progress);
  }
}
