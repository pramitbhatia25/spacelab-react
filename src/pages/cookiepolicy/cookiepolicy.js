import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import Footer from "../../components/footer/footer";
import "./cookiepolicy.scss";

/**
 * Renders Blog page
 * @returns {JSX.Element}
 * @constructor
 */
export default function CookiePolicy() {
	return (
		<>
			<HeroImage heroTitle="COOKIE POLICY" />
            <div className="cookie-wrap">
                <p>Effective Date: 30-Jan-2023 </p>
                <p>Last Updated: 30-Jan-2023</p>

                <br/>
                <h5>What are cookies?</h5>
                <p>This Cookie Policy explains what cookies 
                    are and how we use them, the types of cookies we use i.e, 
                    the information we collect using cookies and how that information 
                    is used, and how to manage the cookie settings.
                </p> 
                <p>Cookies are small text files that are used to store small pieces 
                    of information. They are stored on your device when the website 
                    is loaded on your browser. These cookies help us make the website 
                    function properly, make it more secure, provide better user experience, 
                    and understand how the website performs and to analyze what works and 
                    where it needs improvement.
                </p>

                <br/>
                <h5>How do we use cookies?</h5>
                <p>As most of the online services, our website uses first-party and third-party 
                    cookies for several purposes. First-party cookies are mostly necessary for 
                    the website to function the right way, and they do not collect any of your 
                    personally identifiable data.
                </p> 
                <p>The third-party cookies used on our 
                    website are mainly for understanding how the website performs, how you 
                    interact with our website, keeping our services secure, providing 
                    advertisements that are relevant to you, and all in all providing you 
                    with a better and improved user experience and help speed up your future 
                    interactions with our website.
                </p>

                <br/>
                <h5>Types of Cookies we use</h5>

                <div className="cky-audit-table-element"></div>
                
                <br/>
                <h5>Manage cookie preferences</h5>
                <br/>
                <p><a className="cky-banner-element">Cookie Settings</a></p>
                <br/>

                <p>You can change your cookie preferences any time by clicking the above 
                    link. This will let you revisit the cookie consent banner and change 
                    your preferences or withdraw your consent right away. 
                </p> 
                <p>In addition to this, different browsers provide different methods to 
                    block and delete cookies used by websites. You can change the settings 
                    of your browser to block/delete the cookies. Listed below are the links 
                    to the support documents on how to manage and delete cookies from the 
                    major web browsers.
                </p> 
                <p><a href="https://support.google.com/accounts/answer/32050">Chrome</a></p>
                <p><a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac">Safari</a></p>
                <p><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US">Firefox</a></p>
                <p><a href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc">Internet Explorer</a></p>
                <p>If you are using any other web browser, please visit your browser's official support documents.</p>
                
                <br/>
                <p>
                    <span style={{fontWeight: 'bold'}}>NOTE:</span> We are using Google Analytics Advertising cookies. We and third-party vendors use 
                    first-party cookies (such as the Google Analytics cookie) or other first-party identifiers, 
                    and third-party cookies (such as Google advertising cookies) or other third-party identifiers 
                    in order to inform how we should advertise SpaceLab, and so we can make SpaceLab better when 
                    it appears users are struggling with the website or products. You can opt-out of the Google 
                    Analytics Advertising Features below under Manage Cookie Preferences. Also Google Analytics' 
                    currently available opt-outs for the web: https://tools.google.com/dlpage/gaoptout/
                </p>
                <br/>
                <p>
                    Cookie Policy Generated By  <a href="https://www.cookieyes.com/?utm_source=CP&utm_medium=footer&utm_campaign=UW">CookieYes - Cookie Policy Generator</a>.
                </p>
            </div>
			<Footer />
		</>
	);
}
