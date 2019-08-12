import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import classnames from 'classnames';

import './style.scss';

export default class TiltPanel extends Component {
  constructor(props) {
    super(props);

    this.wrapper = React.createRef();
    this.content = React.createRef();
  }

  static propTypes = {
    /**
     * TiltPanel content.
     */
    children: PropTypes.node.isRequired,
    /**
     * Rotation speed multiplier.
     */
    speed: PropTypes.number,
    /**
     * Rotation limit of the panel, will not exceed this number of degrees.
     */
    limit: PropTypes.number,
    /**
     * Pause all rotations and reset to original position.
     */
    pause: PropTypes.bool
  };

  static defaultProps = {
    speed: 0.08,
    limit: 45,
    pause: false,
    z: 10
  };

  state = {
    size: {
      width: 0,
      height: 0
    },
    transform: {
      rotateY: 0,
      rotateX: 0
    }
  };

  componentDidMount() {
    this.measureContent(this.state);
    this.toggleDocumentTrigger(true);
  }

  componentWillUnmount() {
    this.toggleDocumentTrigger(false);
  }

  componentDidUpdate(prevProps, prevState) {
    this.measureContent(prevState);
  }

  toggleDocumentTrigger(add) {
    if (add) document.addEventListener('mousemove', this.mouseMove);
    else document.removeEventListener('mousemove', this.mouseMove);
  }

  measureContent(prevState) {
    const { scrollWidth: width, scrollHeight: height } = this.content.current;

    if (width !== prevState.size.width || height !== prevState.size.height) {
      this.setState({ size: { width, height } });
    }
  }

  getPanelSize() {
    const { size } = this.state;
    if (size.width && size.height) {
      return {
        width: `${size.width}px`,
        height: `${size.height}px`
      };
    }
  }

  mouseMove = e => {
    const { limit, speed } = this.props;
    const { scrollTop } = document.documentElement;
    const {
      top,
      left,
      height,
      width
    } = this.wrapper.current.getBoundingClientRect();

    let x = (left + width / 2 - e.pageX) * -speed;
    if (limit) {
      x = Math.max(-limit, x);
      x = Math.min(limit, x);
    }

    let y = (top + height / 2 + scrollTop - e.pageY) * speed;
    if (limit) {
      y = Math.max(-limit, y);
      y = Math.min(limit, y);
    }

    this.rotate(x, y);
  };

  rotate = throttle((x, y) => {
    let { transform } = this.state;
    transform.rotateX = y;
    transform.rotateY = x;
    this.setState({ transform });
  }, 10);

  // =============================
  render() {
    const { children, pause, z } = this.props;
    const { transform } = this.state;
    let { rotateX, rotateY } = transform;

    // Pause transforms...
    if (pause) {
      rotateX = 0;
      rotateY = 0;
    }

    const panelClassNames = classnames('tilt', {
      'tilt--pause': pause
    });

    const panelStyle = this.getPanelSize();

    const faceStyle = {
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${z}px)`
    };

    return (
      <div className={panelClassNames} style={panelStyle}>
        <div className="tilt__face" style={faceStyle} ref={this.wrapper}>
          <div className="tilt__content" ref={this.content}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}
