import React, { Component } from "react";
import ITableHeader from "./Models";
import RowData from "./RowData";

interface Props {
    rowData: any;
    headers: Array<ITableHeader>;
}

interface State {

}

export default class TableRow extends Component<Props, State> {
    render(): JSX.Element {
        const { rowData, headers } = this.props;
        // debugger
        return (
            <tr>
                {rowData &&
                    headers.map((header: any, idx: number) => (
                        <RowData key={idx} value={rowData[header.key]} />
                    ))
                }
            </tr>
        )
    }
}