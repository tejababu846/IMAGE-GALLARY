
import { Typography } from "antd";

function Show(props){

    const{value1}=props.data;
    return (
    <>
  <Typography.Text style={{ fontSize: 18, marginLeft: 15 ,textAlign:"center"}}>
            Showing resuts for  {value1}
          </Typography.Text>
    </>);
}
export default Show;