import { PureComponent } from 'react';
import './style.scss';

export default class Crepe extends PureComponent {
  render() {
    const { size, degrees } = this.props;

    const percentage = ((60.43 - degrees) / 6.3) * 100; //54.13
    const background = `
    conic-gradient(
      from 40deg,
      transparent 0% ${percentage}%,
      red ${percentage}% 100%
    )`;
    const size_px = `${size * 1.5}px`;

    return (
      <div
        className="crepe"
        style={{
          width: size_px,
          height: size_px
        }}>
        <div className="crepe__pan" style={{ transform: 'scale(1.1)' }} />
        <div
          className="crepe__pool"
          style={{ transform: 'translate(-50%, -50%) scale(0.6)' }}
        />
        <div className="crepe__image" style={{ background }} />
      </div>
    );
  }
}
