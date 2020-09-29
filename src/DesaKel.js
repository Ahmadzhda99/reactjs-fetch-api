import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

class DesaKel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api-kabkotaindo.herokuapp.com/api/desakelurahan")
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.map(data => (
        {
          id: `${data._id}`,
          desaKelName: `${data.name}`,
          kecamatanName: `${data._kecamatanID.name}`,
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
        dataField: 'desaKelName',
        text: 'DESA/KELURAHAN'
      }, {
        dataField: 'kecamatanName',
        text: 'KECAMATAN'
      }];

    return (
      <div>
        <h2>Desa/Kelurahan</h2><br />
        <BootstrapTable keyField='id' data={items} columns={columns} pagination={paginationFactory()} />
      </div>
    );
  }
}

export default DesaKel;