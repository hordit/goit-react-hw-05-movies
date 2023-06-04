import { ThreeDots } from "react-loader-spinner";
import { DivLoader } from "./Loader.styled";

const Loader = () => {
  return (
    <DivLoader>
<ThreeDots 
height="100" 
width="100" 
radius="9"
color="white"
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
    </DivLoader>
   
  );
};

export default Loader;