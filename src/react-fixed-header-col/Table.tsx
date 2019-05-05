import ITableHeader from "./Models";
import React, { Component } from "react";
import './styles.scss';
import TableHead from "./Header";
import TableRow from "./TableRow";


interface Props {
  data: Array<any>;
  headers: Array<ITableHeader>;
  tableClass?: string;
  theadClass?: string;
}

interface State {

}

export default class FixedHeaderFirstColTable extends Component<Props, State> {
  // constructor(props: Props) {
  //   super(props);
  // }

  render(): JSX.Element {

    const { headers, data, tableClass, theadClass } = this.props;
    return (
      <div className="table-container">
        <table className={`table ${tableClass}`}>
          <thead className={`${theadClass}`}>
            <tr>
              {headers &&
                headers.map((header: ITableHeader, idx: number) => (
                  <TableHead key={idx} header={header.lable || header.key} headingClass={header.className} />
                ))}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((row: any, idx: number) => (
                <TableRow key={idx} rowData={row} headers={headers} />
              ))}
          </tbody>
        </table>
      </div>
    )
  }
}