import React, { Children } from 'react';
import Navbaruser from './Navbaruser';
import NavbarAdmin from './NavbarAdmin';

const Main = (props) => {
  return (
    <div>
      <Navbaruser />
      {props.child}
    </div>
    
  );
}

export default Main;
