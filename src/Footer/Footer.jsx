import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const Footer = () => {
return (
	<MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className=' fw-bold mb-4'>About</h6>
              <p>
                <a >
                  About us
                </a>
              </p>
              <p>
                <a >
                  Our vision
                </a>
              </p>
              <p>
                <a >
                  Careers
                </a>
              </p>
              <p>
                <a >
                  Press
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className=' fw-bold mb-4'>Products</h6>
              <p>
                <a >
                  Embedded
                </a>
              </p>
              <p>
                <a >
                  Meetings
                </a>
              </p>
              <p>
                <a >
                  What's New
                </a>
              </p>
              <p>
                <a >
                  Status
                </a>
              </p>
              <p>
                <a >
                  Reference Docs
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className=' fw-bold mb-4'>Pricing</h6>
              <p>
                <a >
                  For Embedded
                </a>
              </p>
              <p>
                <a >
                  For Meetings
                </a>
              </p>
            
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className=' fw-bold mb-4'>Social</h6>
              <p>
                <a >
                  Blog
                </a>
              </p>
              <p>
                <a >
                  Twitter
                </a>
              </p>
              <p>
                <a >
                  Linkedln
                </a>
              </p>
              <p>
                <a >
                  Instagram
                </a>
              </p>
              <p>
                <a >
                  Facebook
                </a>
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className=' fw-bold mb-4'>Support</h6>
              <p>
                <a >
                  Getting Started
                </a>
              </p>
              <p>
                <a >
                  Support Center
                </a>
              </p>
              <p>
                <a >
                  Terms of Service
                </a>
              </p>
              <p>
                <a >
                  Cookie Policy
                </a>
              </p>
              <p>
                <a >
                  Cookie Settings
                </a>
              </p>
              <p>
                <a >
                  GDPR statement
                </a>
              </p>
              <p>
                <a >
                  Security
                </a>
              </p>
              <p>
                <a >
                  Sitemap
                </a>
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className=' fw-bold mb-4'>Get in Touch</h6>
              <p>
                <a >
                  Contact Support
                </a>
              </p>
            
            </MDBCol>
          
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
);
};
export default Footer;
