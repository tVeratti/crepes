import Stick from '../components/stick';
import Crepe from '../components/crepe';
import Tilt from '../components/tilt';
import Pather from '../components/pather';

import './index.scss';

export default () => (
  <div className="view">
    <div className="main">
      <Crepe />
      <Pather
        render={target_position => <Stick position={target_position} />}
      />
    </div>
  </div>
);
