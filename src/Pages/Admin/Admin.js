import React, { Component } from 'react'
import Scanner from './Scanner'
// import {Fab, TextareaAutosize, Paper} from '@material-ui/core'
// import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";

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

  render() {
    return (
      <div className='success-container'>
        <Link to="/success">
            <span style={{fontSize:'25px', color:'white', borderBottom:'2px solid gray', padding:"5px 10px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{fill:'white'}}><path fill="none" d="M0 0h24v24H0z"/><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"/></svg>  Back</span>
        </Link>
        <div style={{color:'orange', fontSize:'30px', marginTop:"2rem"}}>Barcode Scanner</div>
        
        <div variant="outlined" style={{marginTop:30, width:640, height:320}}>
          <Scanner onDetected={this._onDetected} />
        </div>

        <textarea
            style={{fontSize:32, width:320, height:100, marginTop:30, display:"none"}}
            rowsMax={4}
            defaultValue={'No data scanned'}
            value={
              alert(this.state.results[0]) ? this.state.results[0].codeResult.code : 'No data scanned'}
        />

      </div>
    )
  }
}

export default Admin
