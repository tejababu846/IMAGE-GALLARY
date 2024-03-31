import {Breadcrumb} from "antd";
import { useLocation } from "react-router-dom";
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Content from "./Content.jsx";
import { createContext } from "react";


function Brief() {
    const location=useLocation();
    const f=location.state.val1;
    console.log(f)
    const data=location.state.name;

   
    

   

    return (
        <>
        <br></br>
      <Breadcrumb style={{marginLeft:"1.6%",fontSize:18}} 
    items={[
      {
        href: '/',
        title: <HomeOutlined style={{ fontSize: '18px' }} />,
      },
      {
        href: '',
        title: (
          <>
            <UserOutlined  style={{ fontSize: '18px' }}/>
            <span><Link to="/App" state={{g:f}}>Search Image</Link></span>
          </>
        ),
      },
      {
        title: 'Description',
      },
    ]}
  />
  <br></br>
  <br></br>
<Content data={data} value2={f}/>

        </>
    );
}

export default Brief;