import React, { Component } from 'react'
import Scanner from './Scanner'
// import {Fab, TextareaAutosize, Paper} from '@material-ui/core'
// import {ArrowBack} from '@material-ui/icons'
// import { Link } from "react-router-dom";
// const axios = require('axios');

class Admin extends Component {
  state = {
    results: [],
  }

  _scan = () => {
    this.setState({ scanning: !this.state.scanning })
    // console.log(this.state.results + );
    
  }

  _onDetected = result => {
    this.setState({ results: [] })
    this.setState({ results: this.state.results.concat([result]) })
  }

  componentDidUpdate(){
    const data = this.state.results[0]
    if (data){
      this.props.barcode(data.codeResult.code)
    }
  }


  
  render() {
    return (
      <div className='barcode-ui'>
               
        <div variant="outlined" style={{marginTop:30, width:10, height:10}}>
          <Scanner onDetected={this._onDetected} />
        </div>

        <textarea
            style={{fontSize:32, width:320, height:100, marginTop:30, display:'none'}}
            rowsMax={4}
            defaultValue={'No data scanned'}
            value={
              // alert(this.state.results[0].codeResult.code) ? this.state.results[0].codeResult.code : 'No data scanned'}
              this.state.results[0] ? this.state.results[0].codeResult.code : 'No data scanned'}
        />

        

      </div>
    )
  }
}

export default Admin
