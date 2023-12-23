import { useNavigate } from "react-router-dom";
import "./NotFound.css"
// import { NotFoundPage } from "./NotFound.gif" 
const NotFound = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    };
    const handleHome = () => {
        navigate('/')
    }
    return (
        <div className="bg-black h-[100vh]">
            <img className="w-[70%] m-auto " src={"https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif"} alt="" />
            <button onClick={handleBack} className="bg-white">Back</button>
            <button onClick={handleHome} className="bg-white p-[10px] gap-[30px]">Home</button>
        </div>
    );
};

export default NotFound;