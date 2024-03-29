import bulbIcon from "../assets/images/bulb-icon.png"
import CompanyCardSection from "./CompanyCardSection";
import { useState, useEffect } from "react";
function CompanyDetails({data}){
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(6);
    const [companyName, setCompanyName] = useState("");
    const [elementStyle, setElementStyle] = useState({display : "none"});
    const [inputIsChecked, setInputIsChecked] = useState(false);
    const [changeInputBackground, setChangeInputBackground] = useState({background: "#E9E4F3"});
    const [filteredData, setFilteredData] = useState([]);

    //display logic for company input checkbox
    useEffect(()=>{
        const updatedStyle = {
        display : (companyName !== "")? 'block': 'none',
       };
       setElementStyle(updatedStyle);

       //background change input is checked
       const updateInputBackground = {
        background : (inputIsChecked)? "linear-gradient(to right, #7856AD , #7164EB)": "#E9E4F3",
        color : (inputIsChecked)? "white": "#6750A0",
       }
       setChangeInputBackground(updateInputBackground)

      //filter companies based on input
      const updatedData = data.filter((item)=>{
        if(item.company.includes(companyName.toUpperCase()) && companyName !== "")
            return item;
      })
      setFilteredData(updatedData);
       
    },[companyName, inputIsChecked])

    //handle checkbox
    const handleChange = (e)=>{
        setInputIsChecked(e.target.checked);
    }
    //logic for display the filtered records
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(filteredData.length / recordsPerPage);


    return(
        <div className="container-fluid">
            <div className="tell-us-about-your-company-section">
                <div className="row">
                    <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-12">
                        <div className="tell-us-about-your-company-left-section">
                            <hr className="tell-us-about-your-company-line"/>
                            <h3>  Company Name</h3>
                            <div className="completed-text"><span>COMPLETED</span></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-6 col-lg-6 col-sm-6 col-12">
                        <div className="tell-us-about-your-company-center-section">
                            <div className="tell-us-about-your-company-card-section">
                                <div className="tell-us-about-your-company-card-section-label" style={changeInputBackground}>
                                    {/* <span></span> */}
                                    {/* <input type="text" name="companyname" id="companyname" /> */}
                                    <div className="form-group">
                                        <input type="text" value={companyName} id="enter_company_name" style={changeInputBackground} onChange={(e)=> setCompanyName(e.target.value)} placeholder="Type Your Company Here" /> 
                                    </div>
                                    
                                    <div className="cust-checkbox" style={elementStyle}>
                                         <div className="custom-checkbox">
                                            <input name="noti_6" className="checkbox-custom" id="noti_1" value="1" type="checkbox" onChange={(e)=> handleChange(e)} />
                                            <label className="checkbox-custom-label" htmlFor="noti_1" style={{color: changeInputBackground.color}}>I’d like to use this name</label>
                                        </div>
                                    </div>
                                </div>
                                <p className="custom-m-top-20">We have found <span>{filteredData.length}</span> companies with this name, please try
                                again or use the name entered in the box above.</p>
                                <CompanyCardSection data={currentRecords} nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-12">
                        <div className="tell-us-about-your-company-right-section">
                            <hr className="tell-us-about-your-company-line1"/>
                            <div className="tell-us-about-your-company-right-section-img">
                                <img src={bulbIcon}/>
                            </div>
                            <p>We use Companies House publicly available data to retrieve information about your company. By using Companies House data, we can tell you exactly how many R&D claims you can make for your company. If we cannot find your company details not to worry, you can continue to use the company name you entered above. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CompanyDetails;