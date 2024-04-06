import { useEffect, useState, useRef } from "react";
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from "moment";


function ClaimSection({scrollToClaimSection}){

    const [checkboxValue, setCheckboxValue] = useState(null);
    const [checkCheckboxValue, setCheckCheckboxValue] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const claimRef = useRef(null);

    //handle claim checkbox
    const handleClaimCheckbox = (event)=>{
        // console.log("checkbox is clicked");
        if(checkCheckboxValue !== event.target.htmlFor){
            setCheckboxValue(event.target.htmlFor);
            setCheckCheckboxValue(event.target.htmlFor);
            setStartDate(null);
            setEndDate(null);
        }
        else{
            setCheckboxValue(null);
            setCheckCheckboxValue(null);
            
        }        
    }
    // console.log("entered claim section");

    const handleDatesChange = ({ startDate, endDate }) => {
        setCheckboxValue(null);
        setStartDate(startDate);
        setEndDate(endDate);
    };

    useEffect(()=>{
        if(startDate !== null){
            const date = new Date(moment.utc(startDate));
            const startYear = date.getFullYear();
            const startMonth = date.getMonth();
            const endYear = (date.getFullYear() + 1);
            if(((((0 === startYear % 4) && (0 !== startYear % 100)) || (0 === startYear % 400)) && startMonth <= 1) ||
            (((0 === endYear % 4) && (0 !== endYear % 100)) || (0 === endYear % 400)))
                date.setDate(date.getDate() + 365);   
            else
                date.setDate(date.getDate() + 364);
            
            // const newEndDate = moment(startDate).add(1, 'year').subtract(1, 'day').toDate();
            console.log(moment.utc(date));
            setEndDate(moment.utc(date));
        }
        
    },[startDate])
     

    useEffect(()=>{
        if(scrollToClaimSection.value)
        claimRef.current.scrollIntoView({ behavior: 'smooth' });
    },[scrollToClaimSection])

    

    return(
        <div className="row custom-m-top-40" id="claim-section" ref={claimRef} >
            {/* {(scrollToClaimSection)? claimRef.current.scrollIntoView({ behavior: 'smooth' }): ""} */}
            <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-12">
                <div className="tell-us-about-your-company-left-section">
                    <hr className="tell-us-about-your-company-line"/>
                    <h3>  Your R&D Claim Period</h3>
                </div>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-sm-6 col-12">
                <div className="tell-us-about-your-company-center-section">
                    <div className="tell-us-about-your-company-card-section claim-card-section">
                        <p>Please select the claim period you would like to estimate your R&D claim for?</p>
                        <div className={`custom-checbox-1 tell-us-about-your-company-card-section-label ${("claim-check-1" === checkboxValue)? "change-checked-company": ""}`}>
                            <span>Period 1: 1 April 2018 To 31 March 2019</span>
                            <div className="cust-checkbox">
                                <div className="custom-checkbox">
                                    <input name="noti_6" 
                                    className="checkbox-custom" 
                                    id="claim-check-1"
                                    type="checkbox"
                                    checked={"claim-check-1" === checkboxValue}
                                    />
                                    <label className="checkbox-custom-label" htmlFor="claim-check-1" onClick={(event)=> handleClaimCheckbox(event)}></label>
                                </div>
                            </div>
                        </div>
                        <div className={`custom-checbox-1 tell-us-about-your-company-card-section-label ${("claim-check-2" === checkboxValue)? "change-checked-company": ""}`}>
                            <span>Period 2: 1 April 2018 To 31 March 2019</span>
                            <div className="cust-checkbox">
                                <div className="custom-checkbox">
                                    <input name="noti_6" className="checkbox-custom" id="claim-check-2" type="checkbox" checked={"claim-check-2" === checkboxValue} />
                                    <label className="checkbox-custom-label" htmlFor="claim-check-2" onClick={(event)=> handleClaimCheckbox(event)}></label>
                                </div>
                            </div>
                        </div>
                        <div className={`custom-checbox-1 tell-us-about-your-company-card-section-label ${("claim-check-3" === checkboxValue)? "change-checked-company": ""}`}>
                            <span>Period 3: 1 April 2018 To 31 March 2019</span>
                            <div className="cust-checkbox">
                                <div className="custom-checkbox">
                                    <input name="noti_6" className="checkbox-custom" id="claim-check-3" type="checkbox" checked={"claim-check-3" === checkboxValue} />
                                    <label className="checkbox-custom-label" htmlFor="claim-check-3" onClick={(event)=> handleClaimCheckbox(event)}></label>
                                </div>
                            </div>
                        </div>
                        <div className="calendar-label-input-section">
                            <div className="calendar-label-input form-group">
                                <label>Claim Period Start Date:</label>
                                <div className="calendar-input-section">          
                                    <input type="text" id="datepicker1" 
                                    value={
                                        (checkboxValue !== null)?"01/04/2018": "" || (startDate !== null)?new Date(moment.utc(startDate)).toLocaleDateString() : "dd/mm/yyyy"
                                        
                                    } />
                                    <span className="left-line">|</span>
                                </div>
                            </div>
                            <div className="calendar-label-input form-group">
                                <label>Claim Period End Date:</label>
                                <div className="calendar-input-section">   
                                    <input type="text" id="datepicker2" value={(checkboxValue !== null)?"31/03/2019": "" || (endDate !== null)?new Date(moment.utc(endDate)).toLocaleDateString() : "dd/mm/yyyy"} />
                                    <span className="left-line">|</span>
                                </div>
                            </div>
                        </div>
                        <div id="exTab1" >	
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#claim-start" role="tab" data-toggle="tab">Claim Period Start Date</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#claim-end" role="tab" data-toggle="tab">Claim Period End Date</a>
                                </li>
                            </ul>

                            
                            {/* <!-- Tab panes --> */}
                            {/* <div className="tab-content">
                                <div role="tabpanel" className="tab-pane fade in active show" id="claim-start">
                                    <div id="datepicker" className="calendar"></div>
                                        <div id="datepicker4" className="calendar"></div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="claim-end">
                                    <div id="datepicker2" className="calendar"></div>
                                    <div id="datepicker3" className="calendar"></div>
                                </div>
                            </div> */}
                            <div className="datepicker-container">
                                <DateRangePicker
                                startDate={startDate}
                                startDateId="your_unique_start_date_id"
                                endDate={endDate}
                                endDateId="your_unique_end_date_id"
                                onDatesChange={handleDatesChange}
                                focusedInput={"startDate"}
                                onFocusChange={()=> {}}
                                keepOpenOnDateSelect={true}
                                openDirection="up"
                                readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-12"></div>
        </div>
    )
}

export default ClaimSection;