import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2><br />
        <p>Latihan membuat dan <i>fetching</i> API.</p>
        <p>Sumber data: <a href='https://api-kabkotaindo.herokuapp.com/' target='__blank'>https://api-kabkotaindo.herokuapp.com/</a></p>
        <hr />
        <p style={{ textAlign: 'center' }}>2020 &copy; Powered by Ahmad Zuhad Asy'ari.</p>
      </div>
    );
  }
}

export default About;