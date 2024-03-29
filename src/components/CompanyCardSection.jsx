import leftArrow from "../assets/images/left-arrow.png";
import rightArrow from "../assets/images/right-arrow.png";
import { useState, useEffect } from "react";

function CompanyCardSection({
    data,
    nPages,
    currentPage,
    setCurrentPage
}){
    
    const [disableNextBtn, setDisableNextBtn] = useState("");
    const [disablePrevBtn, setDisablePrevBtn] = useState("");
    const [displayCompanies, setDisplayCompanies] = useState(false);
    const [companyStyle, setCompanyStyle] = useState({});
    const [checked, setChecked] = useState(false);
    const [prevCheckedElement, setPrevCheckedElement] = useState(null)
    const [background, setBackground] = useState("");

    const goToNextPage = ()=>{
        if(currentPage !== nPages)
            setCurrentPage(()=> currentPage + 1);
    }
    const goToPrevPage = ()=>{
        if(currentPage !== 1)
            setCurrentPage(()=> currentPage - 1);
    }
    //display none when there is no companies
    useEffect(()=>{
        if(data.length > 0)
            setDisplayCompanies(true)
        else
            setDisplayCompanies(false)
    },[data])

    //disable next and previous button when there is no page
    useEffect(()=>{
        if(currentPage === nPages)
            setDisableNextBtn("next-button-toggle");
        else
            setDisableNextBtn("");
        if(currentPage === 1)
            setDisablePrevBtn("disabled-btn-bg");
        else
            setDisablePrevBtn("");
        const displayCompanyStyle = {
            display : (displayCompanies)? "block" : "none"
        }
        setCompanyStyle(displayCompanyStyle)
    },[currentPage, displayCompanies])

    const handleCheckBox = (e)=>{
        setChecked(e.target.value);
        setPrevCheckedElement(e.target.id);

        const removePreviousChecked = document.getElementById(prevCheckedElement);
        
    }
    
    

    return (
        <div className="tell-us-about-your-company-card2" style={companyStyle}>
            <div className="tell-us-about-your-company-maincard2 column-card-1 custom-m-top-20">
                { 
                  data.map((item)=>(
                    <div className="tell-us-about-your-company-card2-width" key={item.index}>
                        <div className="tell-us-about-your-company-card2-label tell-us-about-your-company-card-section-label" key={item.index}>
                            <div className="tell-us-about-your-company-card2-top">
                                <span>{item.company}</span>
                                <div className="cust-checkbox">
                                    <div className="custom-checkbox">
                                        <input name="noti_6" className="checkbox-custom checked-company" id={item.index} value="3" type="checkbox" onClick={(e)=> handleCheckBox(e)}  />
                                        <label className="checkbox-custom-label" for={item.index}></label>
                                    </div>
                                </div>
                            </div>
                            <div className="tell-us-about-your-company-card2-bottom">
                                <p>{item.address}</p>
                            </div>
                        </div>
                    </div>
                  ))
                } 
            </div>
            <div className="column-card-2-bottom-section">
                <div className="pagination-section">
                <span><label>{currentPage}</label>/<label>{nPages}</label></span>
                </div>
                <div className="next-back-section">
                <label className={disablePrevBtn} onClick={goToPrevPage}><img className="left-arrow" src={leftArrow}/><span>BACK</span></label>
                <b>|</b>
                <label className={disableNextBtn} onClick={goToNextPage}><span>NEXT</span><img className="right-arrow" src={rightArrow}/></label>
                </div>
            </div>
        </div>
    )
}

export default CompanyCardSection;