import React, { Component } from 'react';
import './App.scss';
import FixedHeaderFirstColTable from './react-fixed-header-col/Table';
import { testTableData } from './data/testData';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <FixedHeaderFirstColTable
              headers={[
                {
                  key: 'ID',
                  lable: "ID"
                },
                {
                  key: 'Name',
                  lable: "Name"
                },
                {
                  key: 'Gender',
                  lable: "Gender"
                },
                {
                  key: 'Class',
                  lable: "Class"
                },
                {
                  key: 'Club',
                  lable: "Club"
                },
                {
                  key: 'Persona',
                  lable: "Persona"
                },
                {
                  key: 'Crush',
                  lable: "Crush"
                },
                {
                  key: 'BreastSize',
                  lable: "BreastSize"
                },
                {
                  key: 'Strength',
                  lable: "Strength"
                },
                {
                  key: 'Hairstyle',
                  lable: "Hairstyle"
                },
                {
                  key: 'Color',
                  lable: "Color"
                },
                {
                  key: 'Stockings',
                  lable: "Stockings"
                },
                {
                  key: 'Accessory',
                  lable: "Accessory"
                },
                {
                  key: 'ScheduleTime',
                  lable: "ScheduleTime"
                },
                {
                  key: 'ScheduleDestination',
                  lable: "ScheduleDestination"
                },
                {
                  key: 'ScheduleAction',
                  lable: "ScheduleAction"
                }
              ]}
              data={testTableData}
              tableClass='table-striped'
              theadClass='thead-dark'
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
