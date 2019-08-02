import Stick from '../components/stick';
import Crepe from '../components/crepe';

import './index.scss';

export default () => (
  <div className="view">
    <div className="main">
      <Crepe />
      <Stick />
    </div>
  </div>
);
