import React, { Component } from 'react';
import InputFullSalary from './components/inputs/InputFullSalary';
import InputReadOnly from './components/inputs/InputReadOnly';
import { calculateSalaryFrom } from './components/cauculus/salary';
import Bars from './components/salary-bars/Bars';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: '',
      baseINSS: '',
      discountINSS: '',
      baseIRPF: '',
      discountIRPF: '',
      netSalary: '',
      percentINSS: '',
      percentIRPF: '',
      percentNetSalary: '',
    };
  }

  handleChangeSalary = (salary) => {
    this.setState({
      fullSalary: salary,
    });
    const discountCalc = calculateSalaryFrom(salary);

    const discountInssPorcent = (
      (discountCalc.discountINSS / discountCalc.baseINSS) *
      100
    ).toFixed(2);
    const discountIrpfPorcent = (
      (discountCalc.discountIRPF / discountCalc.baseINSS) *
      100
    ).toFixed(2);
    const netSalaryPorcent = (
      (discountCalc.netSalary / discountCalc.baseINSS) *
      100
    ).toFixed(2);
    console.log(discountInssPorcent);
    console.log(netSalaryPorcent);
    console.log(discountIrpfPorcent);

    this.setState({
      baseINSS: discountCalc.baseINSS,
      discountINSS: discountCalc.discountINSS,
      baseIRPF: discountCalc.baseIRPF,
      discountIRPF: discountCalc.discountIRPF,
      netSalary: discountCalc.netSalary,
      percentINSS: discountInssPorcent,
      percentIRPF: discountIrpfPorcent,
      percentNetSalary: netSalaryPorcent,
    });
  };

  render() {
    const {
      fullSalary,
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      percentINSS,
      percentIRPF,
      percentNetSalary,
    } = this.state;
    return (
      <div className="container">
        <div>
          <h3 style={styles.centeredTitle}>React Salário</h3>
        </div>
        <div className="row">
          <InputFullSalary
            salary={fullSalary}
            onChangeSalary={this.handleChangeSalary}
          />
        </div>
        <div className="row">
          <InputReadOnly discount={baseINSS} label="Base INSS" />

          <InputReadOnly
            percentage={percentINSS}
            discount={discountINSS}
            label="Desconto INSS"
            color="#e67e22"
          />

          <InputReadOnly discount={baseIRPF} label="Base IRPF" />

          <InputReadOnly
            percentage={percentIRPF}
            discount={discountIRPF}
            label="Desconto IRPF"
            color="#c0392b"
          />

          <InputReadOnly
            percentage={percentNetSalary}
            discount={netSalary}
            label="Salário líquido"
            color="#16a085"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Bars value={percentINSS} color="#e67e22" />
          <Bars value={percentIRPF} color="#c0392b" />
          <Bars value={percentNetSalary} color="#16a085" />
        </div>
      </div>
    );
  }
}
const styles = {
  centeredTitle: {
    textAlign: 'center',
  },
};
