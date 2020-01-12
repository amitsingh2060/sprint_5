import React, { Component } from 'react'
import { Link ,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

 class DashBoard extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     
    render() {


         //Redirect
         let {isAuth} = this.props
        //  isAuth = isAuth || true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        //  console.log(isAuth)


        return  !isAuth?
        (
        <Redirect to = '/login'/>
        ): 
        (
            <div className="text-center my-5">
                <Link to="/add" type="button" class="btn btn-primary btn-l ml-5">ADD NEW VEHICLES</Link>
                <Link to="/view" type="button" class="btn btn-secondary btn-l ml-5">VIEW ALL VEHICLES</Link>    
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuth:state.auth.isAuth
})

export default connect(mapStateToProps) (DashBoard)

