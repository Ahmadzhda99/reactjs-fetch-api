import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

class Provinsi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api-kabkotaindo.herokuapp.com/api/provinsi")
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.map(data => (
        {
          id: `${data._id}`,
          provName: `${data.name}`,
          negaraName: `${data._negaraID.name}`,
        }
      )))
      .then(items => {
        this.setState({
          items,
          isLoaded: false
        });
      })
      .catch(error => console.log('parsing failed', error));
  }
  render() {
    const { items } = this.state;
    const columns = [
      {
        dataField: 'provName',
        text: 'PROVINSI'
      }, {
        dataField: 'negaraName',
        text: 'NEGARA'
      }];

    return (
      <div>
        <h2>Provinsi</h2><br />
        <BootstrapTable keyField='id' data={items} columns={columns} pagination={paginationFactory()} />
      </div>
    );
  }
}

export default Provinsi;