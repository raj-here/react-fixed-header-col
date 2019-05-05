import React, { Component } from "react";

interface Props {
    value: string;
    rowClass?: string
}

interface State {

}

export default class RowData extends Component<Props, State> {
    render(): JSX.Element {
        const { value, rowClass } = this.props;
        return (
            <td className={rowClass}>{value}</td>
        )
    }
}