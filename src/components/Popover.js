/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import {Popover, PopoverHeader, PopoverBody } from 'reactstrap';


const Example = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);
 
  return (
    <div>
      <button class=" big-button1"  id="Popover1" type="button" ><img src={props.immagine} alt={props.alt} Width="20" Height="20"/></button>
      <Popover placement={props.placement} isOpen={popoverOpen} target="Popover1" toggle={toggle}>
       
        <PopoverBody>{props.descrizione}</PopoverBody>
      </Popover>
    </div>
  );
}

export default Example;