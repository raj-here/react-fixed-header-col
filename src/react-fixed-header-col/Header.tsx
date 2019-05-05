import React, { Component } from "react";

interface Props {
    header: string;
    headingClass?: string
}

interface State {

}

export default class TableHead extends Component<Props, State> {
    render(): JSX.Element {
        const { header, headingClass } = this.props;
        return (
            <th className={headingClass}>{header}</th>
        )
    }
}