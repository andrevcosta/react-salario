import React, { Component } from 'react';
import { formatNumbers } from '../helpers/formatHelpers';

export default class InputReadOnly extends Component {
  render() {
    const { discount, color, label, percentage = 0 } = this.props;
    const checkPercentage = percentage > 0 ? `(${percentage}%)` : '';
    return (
      <div className="col s12 m6 l3">
        <label>{label}</label>
        <input
          style={{ color, fontWeight: 'bold' }}
          type="text"
          readOnly
          value={`${formatNumbers(discount)} ${checkPercentage}`}
        />
      </div>
    );
  }
}
