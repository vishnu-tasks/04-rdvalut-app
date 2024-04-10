import { useState, useEffect, useRef } from "react";


function GrantsAndSubsidies({scrollToGrantsSection, handleExpensesScroll}){

    const [checkboxValue, setCheckboxValue] = useState(null);
    const grantsRef = useRef(null);

    const handleCheckBox = (event)=>{
        if(checkboxValue !== event.target.htmlFor){
            setCheckboxValue(event.target.htmlFor);
            handleExpensesScroll(true);
        }
        else{
            setCheckboxValue(null);
            handleExpensesScroll(false);
        }
    }

    useEffect(()=>{
        if(scrollToGrantsSection.value)
        grantsRef.current.scrollIntoView({ behavior: 'smooth' });
        else{
           setCheckboxValue(null); 
        }
    },[scrollToGrantsSection])

    return(
        <div className="grands_subsidies_section row custom-m-top-40" ref={grantsRef} style={(scrollToGrantsSection.value) ? {} :  {pointerEvents: "none", opacity: "0.4"}} >
            <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-12">
                <div className="tell-us-about-your-company-left-section">
                    <hr className="tell-us-about-your-company-line"/>
                    <h3>  Grants & Subsidies</h3>
                    {(checkboxValue)?<div className="completed-text"><span>COMPLETED</span></div>: ""}
                </div>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-sm-6 col-12">
                <div className="tell-us-about-your-company-center-section">
                    <div className="tell-us-about-your-company-card-section">
                        <p className="custom-m-top-20">Has your company been in receipt of one or more Grants/Subsidies in this period?</p>
                        <div className="tell-us-about-your-company-card2">
                            <div className="tell-us-about-your-company-maincard2 column-card-1 custom-m-top-20">
                                <div className="tell-us-about-your-company-card2-width">
                                    <div className={`tell-us-about-your-company-card2-label tell-us-about-your-company-card-section-label ${("no" === checkboxValue)? "change-checked-company": ""}`}>
                                        <div className="tell-us-about-your-company-card2-top">
                                            <span>NO</span>
                                            <div className="cust-checkbox">
                                                <div className="custom-checkbox">
                                                    <input name="noti_6" className="checkbox-custom" id="no" value="3" type="checkbox" checked={("no" === checkboxValue)} />
                                                        <label className="checkbox-custom-label" htmlFor="no" onClick={(event)=> {handleCheckBox(event)}}></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tell-us-about-your-company-card2-width">
                                    <div className={`tell-us-about-your-company-card2-label tell-us-about-your-company-card-section-label ${("yes" === checkboxValue)? "change-checked-company": ""}`}>
                                        <div className="tell-us-about-your-company-card2-top">
                                            <span>Yes</span>
                                            <div className="cust-checkbox">
                                                <div className="custom-checkbox">
                                                    <input name="noti_6" className="checkbox-custom" id="yes" value="3" type="checkbox" checked={"yes" === checkboxValue} />
                                                    <label className="checkbox-custom-label" htmlFor="yes" onClick={(event)=> {handleCheckBox(event)}}></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-12"></div>
        </div>
    )
}

export default GrantsAndSubsidies;