import React, { Component } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default class Privacy extends Component {
    constructor(props){
        super(props);
        this.state={
          body:""
        }
       }
  render() {
    return (
        <>
        <CKEditor
                       editor={ ClassicEditor }
                       data={this.state.body}
                       onReady={ editor => {
                       } }
                       onBlur={ ( event, editor ) => {
                          this.setState({body:""})
                       } }
                   />
                     
                     <button type="button" className="btn btn-outline-success">Save</button>      
         </>
    )
  }
}
