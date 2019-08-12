import Parallax from '../components/parallax';

import './index.scss';

const CREPE_SIZE = 200;

export default () => (
  <div className="view">
    <div className="main">
      <Parallax
        speed={0.5}
        render={top => (
          <div
            className="main__banner"
            style={{ backgroundPosition: `0 ${top}` }}
          />
        )}
      />
      Crepes
    </div>
  </div>
);
