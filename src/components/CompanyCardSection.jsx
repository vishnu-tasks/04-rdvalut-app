import leftArrow from "../assets/images/left-arrow.png";
import rightArrow from "../assets/images/right-arrow.png";
import { useState, useEffect } from "react";

function CompanyCardSection({
    data,
    nPages,
    currentPage,
    setCurrentPage,
    handleChange,
    inputIsChecked,
    handleCheckedCompany,
    companyName
}){
    
    const [disableNextBtn, setDisableNextBtn] = useState("");
    const [disablePrevBtn, setDisablePrevBtn] = useState("");
    const [displayCompanies, setDisplayCompanies] = useState(false);
    const [companyStyle, setCompanyStyle] = useState({});
    const [currentCheckedElement, setCurrentCheckedElement] = useState(null);
    const [checkedIndex, setCheckedIndex] = useState(null);

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
    },[currentPage, displayCompanies, nPages])

    //handle checkbox
    const handleCheckBox = (e, index)=>{
        handleChange(false);
        handleCheckedCompany(e.target.checked);
        setCurrentCheckedElement(e.target.id);

        if (index === checkedIndex) {
            // Uncheck the checkbox if it is already checked
            setCheckedIndex(null);
            setCurrentCheckedElement(null);
          } else {
            // Check the clicked checkbox and uncheck others
            setCheckedIndex(index);
        }
    }
    
    useEffect(()=>{
        if(inputIsChecked !== false || companyName === ""){
            
            setCurrentCheckedElement(null);
            setCheckedIndex(null);
        } 
    },[inputIsChecked, companyName])

    return (
        <div className="tell-us-about-your-company-card2 display-companies" style={companyStyle}>
            <div className="tell-us-about-your-company-maincard2 column-card-1 custom-m-top-20">
                { 
                  data.map((item)=>(
                    <div className="tell-us-about-your-company-card2-width" key={item.index}>
                        <div className={`tell-us-about-your-company-card2-label tell-us-about-your-company-card-section-label ${(currentCheckedElement === String(item.index) && inputIsChecked === false) ? "change-checked-company" : ""}`} data-num = {`${item.index}`}>
                            <div className="tell-us-about-your-company-card2-top">
                                <span>{item.company}</span>
                                <div className="cust-checkbox">
                                    <div className="custom-checkbox">
                                        <input name="noti_6" className="checkbox-custom checked-company" id={item.index} type="checkbox"  
                                        onChange={(e)=> {
                                            handleCheckBox(e, item.index);
                                        }}
                                        checked={checkedIndex === item.index}
                                        />
                                        <label className="checkbox-custom-label" htmlFor={item.index}></label>
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
                <label className={disablePrevBtn} onClick={goToPrevPage}><img className="left-arrow" src={leftArrow} alt="left-arrow"/><span>BACK</span></label>
                <b>|</b>
                <label className={disableNextBtn} onClick={goToNextPage}><span>NEXT</span><img className="right-arrow" src={rightArrow} alt="right-arrow"/></label>
                </div>
            </div>
        </div>
    )
}

export default CompanyCardSection;