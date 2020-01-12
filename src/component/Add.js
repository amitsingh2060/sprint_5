import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {allData} from './../Redux/Action'
import { connect } from 'react-redux';
class Add extends Component {
    constructor(props) {
        super(props)
    
        this.state = {     
                modelName:'',
                vehicleType:'',
                mileage:'',
                topSpeed:'',
                cost:'',
                sale:'',
                id:''

        }
    }
    handleinput = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let detaile = {
            modelName:this.state.modelName,
            vehicleType:this.state.vehicleType,
            mileage:this.state.mileage,
            topSpeed:this.state.topSpeed,
            cost:this.state.cost,
            sale:this.state.sale,
            id:this.state.id
        }
        this.props.sendData(detaile)
        
    }
    
    render() {
        return (
            <React.Fragment>
                     <div className="container">
                    <div className="row">
                        <div className="col-8">
                    
                        <div className="card my-5">
                       
                          <form onSubmit={this.handleSubmit} >
                                    <div className="form-group row">
                                        <label  className="col-sm-2 col-form-label">id</label>
                                        <div className="col-sm-10">
                                        <input type="text" className="form-control"  placeholder="id" name="id" value={this.state.id} onChange={this.handleinput}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Model Name</label>
                                        <div className="col-sm-10">
                                        <input type="text" className="form-control"  placeholder="modelname" name="modelName" value={this.state.modelName} onChange={this.handleinput}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Vechile Type</label>
                                        <div className="col-sm-10">
                                        <input type="text" className="form-control"  placeholder="Vechile Type" name="vehicleType" value={this.state.vehicleType} onChange={this.handleinput}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Mileage</label>
                                        <div className="col-sm-10">
                                        <input type="text" className="form-control"  placeholder="mileage" name="mileage" value={this.state.mileage} onChange={this.handleinput}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Top Speed</label>
                                        <div className="col-sm-10">
                                        <input type="text" className="form-control"  placeholder="topSpeed" name="topSpeed" value={this.state.topSpeed} onChange={this.handleinput}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Cost</label>
                                        <div className="col-sm-10">
                                        <input type="text" className="form-control"  placeholder="cost" name="cost" value={this.state.cost} onChange={this.handleinput}/>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Sale</label>
                                        <div className="col-sm-10">
                                        <input type="text" className="form-control"  placeholder="sale" name="sale" value={this.state.sale} onChange={this.handleinput}/>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="form-group row">
                                        <div className="col-sm-10">
                                        <button type="submit" className="btn btn-primary mr-5">Add</button>
                                        <Link to="/dashboard" type="submit" className="btn btn-primary mr-5">Dashboard</Link>
                                        
                                        </div>
                                    </div>
                                </form>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapDispatchToState = (dispatch) => {
    return{
        sendData :(data) => dispatch(allData(data))
    }
}

export default connect(null, mapDispatchToState) (Add);