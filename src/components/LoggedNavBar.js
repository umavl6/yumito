import React ,{useContext} from 'react'
import {itemContext} from '../App';
import {Link,useHistory} from 'react-router-dom';
var store = require('store');

function LoggedNavBar() {
  const iL = useContext(itemContext);
  const history=useHistory();
  const totalItems=store.get('totalitems')
  //console.log("loggedbar rendered");

 const  getLogOut= () =>{
  if(window.confirm("Are you sure that you want to log off?")){ 
      history.replace('/');
     iL.method({type:'logOut'});
  }
}
    return (
        <div className="loggedBar container-fluid bg-dark d-flex justify-content-between flex-wrap position-fixed">
            <nav className="navbar-dark d-inline-flex align-items-center">
  
    <Link className="navbar-brand" to="/">
      <img id="nav-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlq5HBm3PMYychM_62YJmJJWksFJgcvrTaoA&usqp=CAU" alt="nav-logo" className="img-fluid d-inline-block align-baseline me-2" />
      <span className="nav-title">Yumi</span><span className="nav-title-to">to</span>
    </Link>
    
    </nav>

     {/* <div className="d-flex justify-content-between align-items-center">  */}
          <div className="px-3 pt-2 me-15 ms-auto" onClick={()=>{history.push('/menu')}}><i className="bi bi-cart-plus-fill fancyIcon position-relative" role="button"><span className="position-absolute translate-middle badge rounded-circle bg-danger" style={{fontSize:".45em"}}>
    {totalItems!==0 ? totalItems: null}</span></i></div>
          <div className="px-5 pt-2 me-15 dropdown">
            <i className="bi bi-person-circle fancyIcon dropdown-toggle" role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"></i>
            <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/editprofile" title="Edit Profile">Edit Profile</Link></li>
    <li className="dropdown-item" onClick={getLogOut} role="button" title="Log Out">Log Out</li>
    </ul>
            </div>
      {/* </div> */}
        
    
        </div>
    )
}

export default React.memo(LoggedNavBar)
