import React, { Component } from 'react';

export default class Bars extends Component {
  render() {
    const { value, color } = this.props;
    return (
      <div
        style={{
          marginTop: '40px',
          width: `${value}%`,
          height: '20px',
          backgroundColor: color,
        }}
      />
    );
  }
}
