
// import { Button } from "@mui/material"
import { Button, Upload } from "antd"
// import { Upload } from "antd"
import MyDropdown from "./MyDropdown"
const Header=()=>{
    return (
        <div className="content">
            <div className="logo">
                <img className="image" src="data:image/jpeg;base64,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" alt="" />
                <h2>Logo</h2>
            </div>
            <div className="nav-items">
                {/* <ul > */}
                    <li className="nav">Home</li>
                    <li className="nav">About</li>
                    <li className="nav">Contact</li>
                    <li className="nav">Soon</li>
                    {/* <Upload>Upload</Upload> */}
                    

               
                    
                {/* </ul> */}
            </div>
                <div className="drop-down">
                <MyDropdown/>
                </div>
            
        </div>
    )
}

export default Header