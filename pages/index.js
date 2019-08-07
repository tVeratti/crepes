import Stick from '../components/stick';
import Crepe from '../components/crepe';
import Tilt from '../components/tilt';
import Pather from '../components/pather';

import './index.scss';

const CREPE_SIZE = 200;

export default () => (
  <div className="view">
    <div className="main">
      <Pather
        render={(position, degrees, progress) => (
          <React.Fragment>
            <Crepe size={CREPE_SIZE} degrees={degrees} />
            <Stick
              position={position}
              degrees={degrees}
              crepe_size={CREPE_SIZE}
            />
          </React.Fragment>
        )}
      />
    </div>
  </div>
);
