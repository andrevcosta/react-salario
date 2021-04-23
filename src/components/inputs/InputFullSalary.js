import React, { Component } from 'react';

export default class InputFullSalary extends Component {
  handleInputChange = (event) => {
    const salary = event.target.value;

    this.props.onChangeSalary(salary);
  };

  render() {
    const { salary } = this.props;
    return (
      <div>
        <label>Salário Bruto</label>
        <input
          autoFocus
          type="number"
          value={salary}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
