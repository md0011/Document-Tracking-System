import React, { Component } from 'react'
import Scanner from './Scanner'
// import {Fab, TextareaAutosize, Paper} from '@material-ui/core'
// import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
const axios = require('axios');

class Admin extends Component {
  state = {
    results: [],
  }

  _scan = () => {
    this.setState({ scanning: !this.state.scanning })
  }

  _onDetected = result => {
    this.setState({ results: [] })
    this.setState({ results: this.state.results.concat([result]) })
  }

  componentDidMount(){
  console.log(this.state.results[0]);

  }
  render() {
    return (
      <div>
        <Link to="/success">
            <button>Back</button>
        </Link>
        <span>Barcode Scanner</span>
        
        <div variant="outlined" style={{marginTop:30, width:60, height:30}}>
          <Scanner onDetected={this._onDetected} />
        </div>

        <textarea
            style={{fontSize:25, width:320, height:100, marginTop:600, display:'none'}}
            rowsMax={4}
            defaultValue={'No data scanned'}
            value={
              // alert(this.state.results[0].codeResult.code) ? this.state.results[0].codeResult.code : 'No data scanned'}
              this.state.results[0] ? alert(this.state.results[0].codeResult.code) : 'No data scanned'}
        />

      </div>
    )
  }
}

export default Admin
