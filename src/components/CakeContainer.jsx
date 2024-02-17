import react from 'react'

import { buyCake } from '../redux/cakes/cakeActions'
import { Connect, connect } from 'react-redux'
function CakeContainer()
{

    return (
        <div>
           <h2>
            Number of Cake </h2> 
            <button> Buy Cake</button>
        </div>
    )
}
 const mapStateToProps=state=>
 {
    return{
        numOfCakes:state.numOfCakes
    }
 }

 const mapDispatchToProps= dispatch=>{

    return{
        buyCake:()=>dispatch(buyCake())
    }
 }
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);