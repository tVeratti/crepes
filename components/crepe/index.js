import { PureComponent } from 'react';
import { Illustration, Ellipse } from 'react-zdog';
import './style.scss';

export default class Crepe extends PureComponent {
  render() {
    const { size, degrees } = this.props;
    const size_px = `${size}px`;

    const percentage = ((60.43 - degrees) / 6.3) * 100; //54.13
    const background = `conic-gradient(from 40deg, #fff 0% ${percentage}%, #eee ${percentage}% 100%)`;

    return (
      <div
        className="crepe"
        style={{ width: size_px, height: size_px, background }}
      />
    );
  }
}
