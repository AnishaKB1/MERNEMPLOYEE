
import React, { Children } from 'react';

import NavbarAdmin from './NavbarAdmin';
const Mainadmin = (props) => {
  return (
    <div>
    <NavbarAdmin/>
    {props.child}
  </div>
  );
}

export default Mainadmin;
