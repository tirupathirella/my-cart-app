import React, { Component } from 'react'

const NavBar = (props) => {
    console.log('NavBar - rendered')
    const { totalCounters } = props 
    return (
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand' href='#'>
               Cart Total Items <span className="badge badge-pill badge-secondary">
                    { totalCounters }
                </span>
            </a>
        </nav>
    );
}
 
export default NavBar;

// class NavBar extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <nav className='navbar navbar-light bg-light'>
//                 <a className='navbar-brand' href='#'>
//                     Navbar <span className="badge badge-pill badge-secondary">
//                         {this.props.totalCounters}
//                     </span>
//                 </a>
//             </nav>
//         );
//     }
// }
 
// export default NavBar;