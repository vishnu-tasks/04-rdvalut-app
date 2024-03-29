
function ClaimSection(){

    return(
        <div className="row custom-m-top-40">
            <div className="col-md-3 col-xl-3 col-lg-3 col-sm-3 col-12">
                <div className="tell-us-about-your-company-left-section">
                    <hr className="tell-us-about-your-company-line"/>
                    <h3>  Your R&D Claim Period</h3>
                </div>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-sm-6 col-12">
                <div className="tell-us-about-your-company-center-section">
                    <div className="tell-us-about-your-company-card-section">
                        <p>Please select the claim period you would like to estimate your R&D claim for?</p>
                        <div className="custom-checbox-1 tell-us-about-your-company-card-section-label">
                            <span>Period 1: 1 April 2018 To 31 March 2019</span>
                            <div className="cust-checkbox">
                                <div className="custom-checkbox">
                                    <input name="noti_6" className="checkbox-custom" id="noti_6" value="2" type="checkbox" checked />
                                    <label className="checkbox-custom-label" for="noti_6"></label>
                                </div>
                            </div>
                        </div>
                        <div className="custom-checbox-1 tell-us-about-your-company-card-section-label">
                            <span>Period 2: 1 April 2018 To 31 March 2019</span>
                            <div className="cust-checkbox">
                                <div className="custom-checkbox">
                                    <input name="noti_6" className="checkbox-custom" id="noti_6" value="2" type="checkbox" checked />
                                    <label className="checkbox-custom-label" for="noti_6"></label>
                                </div>
                            </div>
                        </div>
                        <div className="custom-checbox-1 tell-us-about-your-company-card-section-label">
                            <span>Period 3: 1 April 2018 To 31 March 2019</span>
                            <div className="cust-checkbox">
                                <div className="custom-checkbox">
                                    <input name="noti_6" className="checkbox-custom" id="noti_6" value="2" type="checkbox" checked />
                                    <label className="checkbox-custom-label" for="noti_6"></label>
                                </div>
                            </div>
                        </div>
                        <div className="calendar-label-input-section">
                            <div className="calendar-label-input form-group">
                                <label>Claim Period Start Date:</label>
                                <div className="calendar-input-section">          
                                    <input type="text" id="datepicker1" value="dd/mm/yyyy"/>
                                    <span className="left-line">|</span>
                                </div>
                            </div>
                            <div className="calendar-label-input form-group">
                                <label>Claim Period End Date:</label>
                                <div className="calendar-input-section">   
                                    <input type="text" id="datepicker1" value="dd/mm/yyyy"/>
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
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane fade in active show" id="claim-start">
                                    <div id="datepicker" className="calendar"></div>
                                        <div id="datepicker4" className="calendar"></div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="claim-end">
                                    <div id="datepicker2" className="calendar"></div>
                                    <div id="datepicker3" className="calendar"></div>
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

export default ClaimSection;