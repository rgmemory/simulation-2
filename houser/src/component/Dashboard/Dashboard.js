// import React, {Component} from 'react';
// import House from '../House/House';
// import {Link} from 'react-router-dom';
// import axios from 'axios';



// export default class Dashboard extends Component{
//     constructor(){
//         super()

//         this.state = {
//             houseList : []
//         }
//     }

//     componentDidMount(){
//         // console.log("it worked")
//         axios.get('/api/get').then(res => {
//             console.log("it worked")
//             this.setState({
//                 houseList: res.data
//             })
//         })
//     }

//     getHouses(){
        
//         axios.get('/api/get').then(res => {
//             console.log("it worked")
//             this.setState({
//                 houseList: res.data
//             })
//         })
//     }

//     render(){

//         var houses = this.state.houseList.map((current, index) => {
//             return(
//                 <div key={current + index}>
//                     <House house={current}/>
//                 </div>
//             )
//         })

//         return(
//             <div>
//                 Dashboard
//                 {/* {houses} */}
//                 {/* <House /> in Dashboard */}
//                 <Link to="/wizard">Add new property</Link>
//             </div>
//         )
//     }
// }

import React, {Component} from 'react';
import House from '../House/House'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            houseList: []
        }
    }

    componentDidMount(){
        axios.get('/api/get').then(res => {
            console.log(res);
            this.setState({
                houseList: res.data
            })
        }).catch(e => console.log('youve got an error', e))
    }

    getHouses(){        
        axios.get('/api/get').then(res => {            
            this.setState({
                houseList: res.data
            })
        })
    }

    deleteHouse(id){
        axios.delete('./api/delete/' + id).then(res => {
            console.log("delete works")
            {this.getHouses}
        })
    }

   

    render(){

        var houses = this.state.houseList.map((current, index) => {
            return(
                <div key={current + index}>
                    <House house={current} deleteHouse={this.deleteHouse}/>
                </div>
            )
        })

        return(
            <div>
                Dashboard
                {/* <House /> in Dashboard */}

                {houses}

                <Link to='/wizard'>Add new property</Link>
            </div>
        )
    }




}