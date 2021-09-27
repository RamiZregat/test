import axios from 'axios';
import React, { Component } from 'react';
import MyFavouriteList from './MyFavouriteList'
import { withAuth0 } from '@auth0/auth0-react';
import Row from 'react-bootstrap/Row'
import MyFavouriteModal from './MyFavouriteModal';

class MyFavourite extends Component {

    constructor(props){
        super(props)
        this.state={
            dataArray:[],
            showModalFlag:false,
            instructions:'',
            name:'',
            email:'',
            id:''
        }
    }

    componentDidMount=()=>{

        const {user}=this.props.auth0;
        const email=user.email;
        axios
        .get(`https://ramizregattest.herokuapp.com/myfavourite?email=${email}`)
        .then(result=>{
            this.setState({
                dataArray:result.data
            })
            console.log(this.state.dataArray);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    updateFlowerFunction=(event)=>{
        event.preventDefault()
        const {user}=this.props.auth0;
        const email=user.email;
            const obj={
                email:email,
                name:event.target.name.value,
                instructions:event.target.instructions.value
            }
        axios
        .put(`https://ramizregattest.herokuapp.com/updateflower/${this.state.id}`,obj)
        .then(result=>{
            this.setState({
                dataArray:result.data,
                showModalFlag:false
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }

    showModal=(item)=>{
        this.setState({

            showModalFlag:true,
            instructions:item.instructions,
            name:item.name,
            email:item.email,
            id:item._id
        })
    }
    handleclose=()=>{
        this.setState({
            showModalFlag:false,
        })
    }

    deleteflower=(item)=>{
        const {user}=this.props.auth0;
        const email=user.email;
        axios
        .delete(`https://ramizregattest.herokuapp.com/deleteflower/${item._id}?email=${email}`)
        .then(result=>{
            this.setState({
                dataArray:result.data
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }


    render() {
        return (
            <>

            <Row xs={1} md={3} className="g-4">
            {this.state.dataArray.map(item=>{
                return<MyFavouriteList showModal={this.showModal} item={item} deleteflower={this.deleteflower}/>
            })}
         </Row>

            <MyFavouriteModal
             show={this.state.showModalFlag} handleclose={this.handleclose}
             instructions={this.state.instructions}
             name={this.state.name}
             updateFlowerFunction={this.updateFlowerFunction}
             />
            
            </>
        );
    }
}

export default withAuth0(MyFavourite);