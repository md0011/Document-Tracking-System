import React, { Component } from 'react'
import Scanner from './Scanner'
// import {Fab, TextareaAutosize, Paper} from '@material-ui/core'
// import {ArrowBack} from '@material-ui/icons'
// import { Link } from "react-router-dom";
// const axios = require('axios');

class Admin extends Component {
  state = {
    results:[],
    data:""
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
      if (data.codeResult.code===this.state.data){
        return
      }
      alert("barcode scanned " + data.codeResult.code)

      this.setState({
        data:data.codeResult.code
      })
      this.props.barcode(data.codeResult.code)
    }
  }


  
  render() {
    return (
      <div className='barcode-ui'>
               
        <div variant="outlined" style={{marginTop:30, width:10, height:10}}>
          <Scanner onDetected={this._onDetected} />
        </div>

      </div>
    )
  }
}

export default Admin
