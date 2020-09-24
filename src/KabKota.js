import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

class KabKota extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api-kabkotaindo.herokuapp.com/api/kabkota")
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.map(data => (
        {
          id: `${data._id}`,
          kabKotaName: `${data.name}`,
          provName: `${data._provinsiID.name}`,
        }
      )))
      .then(items => this.setState({
        items,
        isLoaded: false
      }))
      .catch(error => console.log('parsing failed', error));
  }

  render() {
    const { items } = this.state;
    const columns = [
      {
        dataField: 'kabKotaName',
        text: 'KABUPATEN/KOTA'
      }, {
        dataField: 'provName',
        text: 'PROVINSI'
      }];

    return (
      <div>
        <h2>Kabupaten/Kota</h2><br />
        <BootstrapTable keyField='id' data={items} columns={columns} pagination={paginationFactory()} />
      </div>
    );
  }
}

export default KabKota;