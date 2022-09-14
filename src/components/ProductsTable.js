import StartFirebase from './firebaseConfig/index'
import React from 'react'
import { ref, onValue } from 'firebase/database'
import './styles/Table.css'


const db = StartFirebase();

export class RealtimeData extends React.Component{
  constructor(){
    super();
    this.state = {
      tableData: []
    }
  }

  componentDidMount(){
    const dbRef = ref(db, 'Product');

    onValue(dbRef, (snapshot) => {
        let records = [];
        snapshot.forEach(childSnapshot => {
            let keyName = childSnapshot.key;
            let data = childSnapshot.val();
            records.push({"key": keyName, "data": data});
        });
        this.setState({tableData: records});
    });
  }

  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>PRODUCT NAME</th>
            <th>DESCRIPTION</th>
            <th>INTENDED ANIMAL</th>
            <th>PRICE (€)</th>
          </tr>
        </thead>
        <tbody>
          {this.state.tableData.map((row,index) => {
            return(
              <tr className='document'>
                <td>{index+1}</td>
                <td>{row.key}</td>
                <td>{row.data.description}</td>
                <td>{row.data.animal}</td>
                <td>{row.data.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}