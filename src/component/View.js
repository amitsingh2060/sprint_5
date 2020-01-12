import React, { Component } from 'react';
import { connect } from 'react-redux';
import {removeData} from './../Redux/Action'
import { Link } from 'react-router-dom';
class View extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             alldata:[],
             totalSale:'',
             page:1,
             perPage:5,   
             totalPage:''
        }
    }

    // handleTotalPage = (e) => {
    //       this.setState({totalPage:totalPages})
    // }


    handleDropDown = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
      
    }


    handleButton = (pageNo) => {
        this.setState({page:pageNo})
    }

    handleDelete = (id) => {
        this.props.removeData(id)
    }

    handleTotalSale = (e) => {
        let sale = this.props.companyData.data.reduce((e,ab) => e +Number(ab.sale),0)
        console.log(sale);
        this.setState({totalSale:sale})
    }
// *******************************Sort********************************************
    handleSortAse = () => {
        let  ase = this.state.alldata.sort((a,b) => (a.sale - b.sale))
        console.log(ase)
        this.setState({alldata:ase})
    } 
     
    handleSortDes = () => {
        let  des = this.state.alldata.sort((a,b) => (b.sale - a.sale))
        console.log(des)
        this.setState({alldata:des})
    }
//  ****************************************Sort Above*************************************************************************** 
    render() {
         this.state.alldata = this.props.companyData.data
         var totalData = this.state.alldata
         // console.log(totalData);
         var pageNo = this.state.page
         var perPageNo = this.state.perPage
         var totalPages = Math.ceil(totalData.length/perPageNo)


         var start = (pageNo-1) * perPageNo
         var end = start + perPageNo
         var slicedData = totalData.slice(start,end)

        

        var pageNumbers = []
        for(var i=1; i<=totalPages; i++){
            pageNumbers.push(i)
        }

        var button = pageNumbers.map(btn => {
            return(
            <button onClick={() =>this.handleButton(btn)}>{btn}</button>
            )
        })


        // *********************Pagination Above**********************************
      //  console.log(this.props.companyData)
        let all = slicedData.map(e => {
            return(
                <tbody key={e.id}>
                <tr>
                    <th scope="row"> <Link to={`/edit/${e.id}`}>{e.id}</Link></th>
                    <td>{e.modelName}</td>
                    <td>{e.vehicleType}</td>
                    <td>{e.mileage}</td>
                    <td>{e.topSpeed}</td>
                    <td>{e.cost}</td>
                    <td>{e.sale}</td>
                    <td><button onClick={() => this.handleDelete(e.id)}>Delete</button></td>
                </tr>
            </tbody>
            )
        })
 // ************************************************************************************************************************************
        return (
            <React.Fragment>
                      <div className="container">
                          <div className="row">
                              <div className="col-10">
                                  <div className="my-1">
                                       <button onClick={this.handleTotalSale}>Total sale: {this.state.totalSale}</button>  
                                       <button onClick={this.handleSortAse}>Sort Ase</button>  
                                       <button onClick={this.handleSortDes}>Sort des:</button> 
                                    {button}    

                                <select className="form-control offset-2  btn btn-primary"style={{width:"120px"}} onChange={this.handleDropDown} name="perPage">
                                    <option value="" selected>Per Page</option>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                    <option value="50">50</option>
                                </select>                    
                                  </div>

                              <table class="table my-5">
                                   <thead>
                                      <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Model Name</th>
                                        <th scope="col">Vehicle Type</th>
                                        <th scope="col">Mileage</th>
                                        <th scope="col">Top Speed</th>
                                        <th scope="col">Cost</th>
                                        <th scope="col">sales in units for FY19-20</th>
                                        <th scope="col">Delete</th>
                                     </tr>
                                 </thead>
                                  {all}
                            </table>
                              </div>
                          </div>
                      </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        companyData:state.alldata
    }
}

const mapDispatchToState = (dispatch) => {
    return{
        removeData : (send) => dispatch(removeData(send))
    }
}

export default connect(mapStateToProps,mapDispatchToState) (View);