import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

class Kecamatan extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api-kabkotaindo.herokuapp.com/api/kecamatan")
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.map(data => (
        {
          id: `${data._id}`,
          kecamatanName: `${data.name}`,
          // kabKotaName: `${data._kabKotaID.name}`,
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
        dataField: 'kecamatanName',
        text: 'KECAMATAN'
      }, {
        dataField: 'kabKotaName',
        text: 'KABUPATEN/KOTA'
      }];

    return (
      <div>
        <h2>Kecamatan</h2><br />
        <BootstrapTable keyField='id' data={items} columns={columns} pagination={paginationFactory()} />
      </div>
    );
  }
}

export default Kecamatan;