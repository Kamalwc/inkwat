import React, { Component } from 'react';
import API from '../controller/API'
import SearchForm from '../components/SearchForm';
import Header from '../components/Header';
import TableData from '../components/TableData'
import TableHeader from '../components/TableHeader'


export default class Search extends Component {
    state ={
        searchWord:'',
        results:[{}],
        filter:[{}]
    }

    componentDidMount(){
        this.employeeCall();
    }

    handleFormChange = (event) =>{
        this.setState({searchWord: event.target.value});
    }

    employeeCall = () =>{
        API.search().then(res => {
            this.setState({results:res.data.results})
        }).catch(err => {
            console.log(err)})
    }

    render() {

        return (
            <div>
                <Header/>
                <SearchForm handleFormChange={this.handleFormChange} searchWord={this.state.searchWord}/>
                <TableHeader/>
                <TableData/>
                {console.log(this.state.results)}
                {console.log(this.state.searchWord)}
            </div>
        )
    }
}

// list-group-item list-group-item-light
// "list-group"