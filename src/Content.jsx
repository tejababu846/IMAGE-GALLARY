import { Image, Space, Typography,Divider, Button, Input } from "antd";
import { Flex,Avatar,Tooltip,List,Card,Carousel,Modal } from "antd";
import { DownloadOutlined,ShareAltOutlined  } from '@ant-design/icons';
import { useContext, useEffect, useState,useRef } from "react";




function Content(props){
   
    console.log(props.value2)
    const { id, alt_description,urls,description,
        likes,user,tags,links} =props.data;
        const baseStyle = {
            width:100,
            height: 30,
            borderRadius:'2%',
            textAlign:"center",
            padding:"2%"

          };
    const [load,setload]=useState(false);
    const [load1,setload1]=useState(false);
    const [data1,setdata1]=useState([]);
    const inputRef = useRef(null);
    const [url1,seturl1]=useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (url) => {
     
      seturl1(url);
      console.log(url1) // Set the URL to state
      setIsModalOpen(true);
   };
  const handleOk = () => {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
       document.getElementById("input1").value +
        "Alex-image=gallery" +"    -Alex",
       
      "Tweet Window",
      "width=600,height=600",
    );
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
   
    useEffect(()=>{
      
        fetchdata(`${props.value2} aesthetic`)
    },[])


    async function download(imageSrc) {
        setload1(true)
        console.log(imageSrc)
        const image = await fetch(imageSrc)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)
      
        const link = document.createElement('a')
        link.href = imageURL
        link.download = `${props.value2}`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        setload1(false)
      }


  function fetchdata(value1){
    setload(true);
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${value1}&client_id=nt8tQwwdc1DXfp-0LyUbccHldsrtBpyQiPeI3JsxV_E`)
      .then((res) => res.json())
      .then((data) => {
      

        setload(false);
        setdata1(data.results);   
       
      });
  }

    
    return(
        <>
        <Space>
            <Divider/>
            
            <Flex gap="middle" className="parent"style={{
       
    }}>
              
         <Flex vertical gap="middle">
        <Image className="image1"src={urls.full} style={{width:650,height:400,border:"3px solid black",backgroundPosition:"center",overflow:"hidden",backgroundAttachment:"fixed"}}></Image>
        <Flex gap="middle" justify="flex-end" align="flex-end">
      
        <Button type="primary" loading={load1} onClick={()=>download(urls.full)} icon={<DownloadOutlined />} size="large" />
        <Button type="primary" onClick={()=>showModal(urls.small)}
       
        
        icon={<ShareAltOutlined />} size="large" />
        <Modal title="Share Via Twitter" open={isModalOpen} onOk={handleOk} centered onCancel={handleCancel}  footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Share
          </Button>,
        ]}> 
<p>Share</p>
        <input id="input1" style={{width:"80%",border:"1px solid black",padding:"2%"}} value={url1}></input>
      </Modal>
        </Flex>
       </Flex>
        <div>
        <Flex vertical>
            <Typography.Title>{alt_description.charAt(0).toUpperCase() + alt_description.slice(1)}</Typography.Title>
            <span>{description}</span>
            <br></br>
           
            <Typography.Text mark>Liked by:{likes}</Typography.Text>  
            <br></br>
          
            <Flex gap="middle">
            <Tooltip title="Creater" placement="top">
       
            <Avatar 
    size={{ xs: 35, sm: 40, md: 40, lg: 43, xl: 50, xxl: 50 }}
src={user.profile_image ?user.profile_image.medium:"https://www.freepik.com/premium-ai-image/3d-business-peoples-person-icon_85699403.htm#fromView=search&page=1&position=7&uuid=1ac06b7f-81b6-4672-be56-90575ec7edc9https://www.freepik.com/free-vector/blue-circle-with-white-user_145857007.htm#fromView=search&page=1&position=31&uuid=1ac06b7f-81b6-4672-be56-90575ec7edc9"}
  />
  
  </Tooltip>
  <Flex vertical> <Typography.Text code>{user.first_name && user.first_name.length>0?user.first_name:"Unknown"}</Typography.Text> 
  <Typography.Text code>{user.location && user.location.length>0?user.location:"Unknown"}</Typography.Text> 
  </Flex>
  </Flex>
  <br></br>
           

               <br></br>
        </Flex>
      
     
<Flex gap="middle">
        {tags.map((k, i) => (
            
          <div key={i} style={{ ...baseStyle, backgroundColor: i % 2 ? '#CACFD2' : '#85929E' }} ><a style={{color:"black"}}># {k.title}</a></div>
        ))}
       </Flex> 
        </div>
     
        </Flex>
     
        </Space>
        <br></br>
    
        <Typography.Title style={{marginLeft:"2%"}}>Related images</Typography.Title>

        <br></br>
      
            <div>
              
        <List
    
          dataSource={data1}
          loading={load}
          grid={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
          renderItem={(item) => {
            
            return (
              <Card
              className="card"
                hoverable
                key={item.id}
                style={{ height: 300,width:290,margin: 12,gap:2}}
              >
              <Image
                className="image"
                  style={{ overflow: "hidden", height:"250px",width:"235px",backgroundPosition:"center",border:"1px solid black",borderRadius:"4%"}}
                  src={item.urls.small}
                   preview={{ visible: false }}
                 
                   
                  
                  
             
                ></Image>
               
              </Card>
            );
          }}
        
        ></List>
        </div>
       
        <br></br>
        </>
    );
}
export default Content;
