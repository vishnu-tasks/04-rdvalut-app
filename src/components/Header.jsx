import logo from "../assets/images/logo.png";
import telephone from "../assets/images/telephone_icon.png";
import mail from "../assets/images/mail_icon.png";
import steppertick from "../assets/images/steppertick.png"

function Header() {
  return (
    // <!--------------HEADER STARTS-------------->

    <header className="subpage-header-section header-section">
      {/* <!--------------LOGO HEADER STARTS--------------> */}

      <div className="logo-header">
        <div className="container">
          <div className="logo-header-section">
            <div className="row">
              <div className="col-md-6 col-xl-6 col-lg-6 col-sm-6 col-12">
                <div className="logo-header-left-section">
                  <div className="logo-header-img">
                    <img className="" src={logo} />
                  </div>
                  <span className="logo-header-text">
                    {" "}
                    R&D Tax Claim - Estimator{" "}
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-xl-6 col-lg-6 col-sm-6 col-12">
                <div className="logo-header-right-section">
                  <div className="need-help">
                    <button className="btn btn-primary">NEED HELP?</button>
                  </div>
                  <div className="header-phone-email-section">
                    <ul className="mt-2">
                      <li>
                        <a href="telto:0161 504 0800">
                          <img
                            className="img-fluid"
                            src={telephone}
                          />
                          <span>0161 504 0800</span>
                        </a>
                      </li>
                      <li>
                        <a href="mailto:hello@rdvault">
                          <img
                            className="img-fluid"
                            src={mail}
                          />
                          <span>hello@rdvault</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--------------LOGO HEADER ENDS--------------> */}

      {/* <!--------------STEPPER HEADER STARTS--------------> */}

      <div className="steps-header">
        <div className="container">
          <div className="logo-header-section">
            <div className="row">
              <div className="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-12">
                <div className="steps-header-center-section">
                  <div className="steps-header-center-section-content">
                    <ul>
                      <li>
                        <a href="">
                          <label>
                            <img src={steppertick} />
                          </label>
                          <span>Start</span>
                        </a>
                      </li>
                      <li className="active">
                        <a>
                          <label>2</label>
                          <span>Your Company</span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <label>3</label>
                          <span>Your Estimated R&D Claim</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--------------STEPPER HEADER ENDS--------------> */}

      {/* <!--------------HEADER HEADING STARTS--------------> */}

      <div className="header-heading">
        <div className="container">
          <div className="logo-header-section">
            <div className="row">
              <div className="col-md-12 col-xl-12 col-lg-12 col-sm-12 col-12">
                <div className="header-heading-section">
                  <div className="header-heading-section-content">
                    <h1> Tell us About Your Company</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--------------HEADER HEADING ENDS--------------> */}
    </header>
    //  <!--------------HEADER ENDS-------------->
  );
}

export default Header;
