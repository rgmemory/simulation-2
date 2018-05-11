import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component{
    constructor(){
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }

        this.updateName = this.updateName.bind(this)
        this.updateAddress = this.updateAddress.bind(this)
        this.updateCity = this.updateCity.bind(this)
        this.updateState = this.updateState.bind(this)
        this.updateZip = this.updateZip.bind(this)
        this.addHouse = this.addHouse.bind(this)

    }

    updateName(value){
        console.log(value)
        this.setState({
            name: value
        })
    }
    updateAddress(value){
        this.setState({
            address: value
        })
    }
    updateCity(value){
        this.setState({
            city: value
        })
    }
    updateState(value){
        this.setState({
            state: value
        })
    }
    updateZip(value){
        this.setState({
            zip: value
        })
    }

    addHouse(){
        let {name, address, city, state, zip} = this.state
        axios.post('/api/post', {name, address, city, state, zip}).then(res => {
            console.log("post works on the front")
        }).catch(e => {console.log('error!!!', e)})
    }

    render(){
        return(
            <div>
                Image URL<input onChange={e => this.updateName(e.target.value)}/>
                {/* Name<input onChange={e => this.updateName(e.target.value)}/>
                Address<input onChange={e => this.updateAddress(e.target.value)}/>
                City<input onChange={e => this.updateCity(e.target.value)}/>
                State<input onChange={e => this.updateState(e.target.value)}/>
                Zipcode<input onChange={e => this.updateZip(e.target.value)}/>
                <Link to="/"><button onClick={this.addHouse}>Complete</button></Link>
                <Link to="/"><button>Cancel</button></Link> */}
            </div>
        )
    }




}
