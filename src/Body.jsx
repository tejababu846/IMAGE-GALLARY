import {
  Card,
  Image,
  Input,
  List,
  Space,
  Typography,
  Skeleton,
  Pagination,
} from "antd";

import { useEffect, useState,useRef} from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

import video from "./back.mp4"; 
function Body() {


  const [value1, setvalue1] = useState("Nature");
  const [data, setdata] = useState([]);
  const [load, setload] = useState(false);
  const [totalpage, settotalpage] = useState();
  const [page, setpage] = useState(1);
  const [prev, setprev] = useState([]);
 
  const videoRef = useRef();

  useEffect(() => {
     videoRef.current.play();
  }, []);
  

  useEffect(()=>{
    if(value1==''){
        fetchdata(page,"Nature")
    }
    else{
      fetchdata(page,value1)
    }
    
  },[value1,page])
   
  function fetchdata(page,value1){
    setload(true);
    fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${value1}&client_id=nt8tQwwdc1DXfp-0LyUbccHldsrtBpyQiPeI3JsxV_E`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setload(false);
        setdata(data.results);   
        settotalpage(data.total_pages)
      });
  }
  function pagedata(p) {
    setpage(p);
  }

  return (
  <>
   
   <Nav/>
      
      {/* <Space style={{ padding: "0px 16px" }} direction="vertical"> */}
      <div className="back">

 <video id="background-video" autoPlay loop muted ref={videoRef}>
    <source src={video} type="video/mp4"></source>
 </video>
 <div className="input-container">
    <Input.Search
      placeholder="Search Image here"
      enterButton="Search"
      size="large"
      loading={load}
      allowClear
      style={{
        maxWidth: 550,
        fontSize: "20%",
        margin: "auto",
        display: "flex",
        border: "1px solid black",
      }}
      onSearch={(value) => {
        setvalue1(value);
      }}
    />
 </div>
 <Typography.Title  className="title"style={{textAlign: "center",color:"white",zIndex:"1"}}>Stunning royalty-free images & royalty-free stock</Typography.Title>
</div>
<br></br>
        <Skeleton active paragraph={{rows:0,width:[800]}} loading={load}>
          <Typography.Text style={{ fontSize: 18, marginLeft: 15 ,textAlign:"center"}}>
            Showing resuts for  {value1}
          </Typography.Text>
        </Skeleton>
        <List 
          dataSource={data}
          loading={load}
          grid={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
          renderItem={(item,i) => {
            
            return (
              <Card
              className="card"
                hoverable
                key={item.id}
                style={{ height: 300,width:290,margin:3,gap:2}}
              >
               <Link to="/Brief" state={{name:item,val1:value1}} ><Image
                className="image"
                  style={{ overflow: "hidden", height:"250px",width:"235px",backgroundPosition:"center",border:"1px solid black",borderRadius:"4%"}}
                  src={item.urls.small}
                   preview={{ visible: false }}
                   
                  
                  
             
                ></Image>
                </Link>
              </Card>
            );
          }}
        >
            <br></br>
  
          <Pagination  style={{alignItems:"center",justifyContent:"center",display:"flex"}}current={page}  defaultPageSize={10} pageSize={30} total={totalpage} onChange={(pageNumber) => pagedata(pageNumber)} />
        </List>
      
        <br></br>
      {/* </Space> */}
    
      
 </>
  );
}
export default Body;
