import React from 'react'
import axios from 'axios'
import { Input, Form, SearchIcon } from '../Styles/Dashboard/YourFavorites'
import FavoriteStocks from './FavoriteStocks'

class YourFavorites extends React.Component{
    constructor(){
        super();
        this.state = {
            timeStamp: {},
            companies: [], // stock company symbols
            stocks: [],
            items: []
        }
    }
      
    componentDidMount(){
       axios.get(`http://localhost:5000/api/favorites`)
      //  axios.get(`https://pickemm.herokuapp.com/api/favorites`)
            .then( response => {
                this.setState({
                   stocks: response.data
                  // companies: response.data
                   // companies: response.data.symbol
                })  
                }
            )
            .catch( err => {console.log( 'there was an error')})
    }

    
      

 render(){
     if(!this.state.companies.length){
         return <div>Loading...</div> 
     }
    console.log(this.state.companies)
        return (
            <div>
                <Form> 
                    <SearchIcon><i className= 'fa fa-search' /></SearchIcon>
                    <Input type="text" placeholder="Search..."/> 
                </Form>          
                <div>
                    <FavoriteStocks companies={this.state.companies} /> 
                </div> 
            </div> 
        )
    }
}

export default YourFavorites