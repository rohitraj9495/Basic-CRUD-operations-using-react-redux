import React, { Component } from 'react';
import productlist from '../../store';

class SearchProd extends Component {

    constructor(){
      super();
  
      this.state={
        search:null
      };
    }
    searchSpace=(e)=>{
        let keyword = e.target.value;
        this.setState({search:keyword})
    }
    render(){

        const styleInfo = {
          paddingRight:'10px'
        }
        const elementStyle ={
          border:'solid',
          borderRadius:'10px',
          position:'relative',
          left:'10vh',
          height:'3vh',
          width:'20vh',
          marginTop:'5vh',
          marginBottom:'10vh'
        }
const product = productlist.filter((data) => { 
    if(this.state.search == null)
              return data
else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.country.toLowerCase().includes(this.state.search.toLowerCase())){
              return data }
            }).map(data=>{
                return(
                <div>
                  <ul>
                    <li style={{position:'relative',left:'10vh'}}>
                      <span style={styleInfo}>{data.name}</span>
                      <span style={styleInfo}>{data.age}</span>
                      <span style={styleInfo}>{data.country}</span>
                    </li>
                  </ul>
                </div>
                )
              })
              return (
                <div>
                <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
                {product}
                </div>
              )
            }
          }
    
export default SearchProd;