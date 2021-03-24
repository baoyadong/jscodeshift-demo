/*
转译后：
import * as React from 'react';
import styles from './index.module.scss';
import { Button } from "antd";


const ButtonCom = () => {
  return (
    <div>
      <h2>转译后</h2>
      <div>
        <Button type="default">Normal</Button>
        <Button type="primary">Prirmary</Button>
        <Button type="secondary">Secondary</Button>
        

        <Button type="link" >Normal</Button>
        <Button type="link" >Primary</Button>
        <Button type="link" >Secondary</Button>
        

        <Button type="default" danger>Normal</Button>
      </div>
    </div>
  );
};

export default ButtonCom;
*/

import * as React from 'react';
import styles from './index.module.scss';
import { Button } from "@alifd/next";

const ButtonCom = () => {
  return (
    <div>
      <h2>转译前</h2>
      <div>
        <Button type="normal">Normal</Button>
        <Button type="primary">Prirmary</Button>
        <Button type="secondary">Secondary</Button>
        

        <Button type="normal" text>Normal</Button>
        <Button type="primary" text>Primary</Button>
        <Button type="secondary" text>Secondary</Button>
        

        <Button type="normal" warning>Normal</Button>
      </div>
    </div>
  );
};

export default ButtonCom