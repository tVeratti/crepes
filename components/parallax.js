import { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Parallax extends PureComponent {
  state = { top: 0, offset: 0 };

  componentDidMount() {
    this.scroll();
    document.addEventListener('scroll', this.scroll);
  }

  componentWillUnmount() {
    document, removeEventListener('scroll', this.scroll);
  }

  scroll = () => {
    const { speed = 0.4 } = this.props;
    const { pageYOffset } = window;
    const offset = -pageYOffset * speed;
    const top = `${offset}px`;
    this.setState({ top, offset });
  };

  render() {
    const { render } = this.props;
    const { top, offset } = this.state;

    return render(top, offset);
  }
}
