import { PureComponent } from 'react';
import { Illustration, Ellipse } from 'react-zdog';

export default class Crepe extends PureComponent {
  state = { rotation: 0, yRotation: 0 };

  // componentDidMount() {
  //   this.rotateZ();
  // }

  // rotateZ = () => {
  //   const { rotation } = this.state;
  //   this.setState({ rotation: rotation + 0.01 });
  //   requestAnimationFrame(this.rotateZ);
  // };

  render() {
    return (
      <div className="crepe">
        <Illustration>
          <Ellipse diameter={400} color={'#f2e5b6'} fill={true} />
        </Illustration>
      </div>
    );
  }
}
