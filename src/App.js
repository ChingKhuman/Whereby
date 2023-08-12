
import FixedNavbar from './NavBar/Navbar';
import logo from '../src/logo.svg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer/Footer';


function App() {

  return (
    <>
      <div>
        <div style={{ backgroundColor: '#d8a5a5' }}>
          <FixedNavbar />

          <div>
            <div className='div1'>
              <img style={{
                width: "10%", height: "10%",
                alignItems: 'center'
              }} src={logo} alt="Logo" />

              <img style={{
                width: "10%", height: "10%",
                alignItems: 'center'
              }} src={logo} alt="Logo" />
            </div>
            <div className='body'>


              Build your dream
              <br />video call solution

            </div>
          </div>

          <div style={{display:'flex',justifyContent:'space-between'}}>
              <img style={{
                width: "10%", height: "10%",
                alignItems: 'center'
              }} src={logo} alt="Logo" />
          <h5 className='h5'>
            Ditch corporate-looking video calls for a calm, user-friendly option,
            <br /> embedded directly into your platform. Optimized for Digital Mental
            <br /> Health, Telehealth, eLearning and more...
          </h5>       
              <img style={{
                width: "10%", height: "10%",
                alignItems: 'center'
              }} src={logo} alt="Logo" />
              </div>
          <div style={{ justifyContent: 'center', display: 'flex' }}>
            <img style={{
              width: "70%", height: "70%",
              alignItems: 'center'
            }} src={logo} alt="Logo" />
          </div>
        </div>
        <div>

          {/* =========================== */}

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img style={{
              width: "50%", height: "60%",
              alignItems: 'center'
            }} src={logo} alt="Logo" />
            <div style={{ paddingTop: '80px', paddingRight: '60px', }}>
              <h2>The easiest way to add video calls <br /> into your platform</h2>
              <h6>Get started in minutes with just a few lines of code. Fully branded,
                <br />customizable and seamlessly integrated into your platform using our
                <br />API.</h6>
              <h4>Discover more</h4>
              <button>Try for free</button>
            </div>
          </div>
        </div>
        {/* =========================== */}


        <div >
          <h5 className='trusted'>
            Trusted by 5+ million people at companies like
          </h5>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img style={{
              width: '20%', height: '20%'
            }} src={logo} alt='Logo' />
            <img style={{
              width: '20%', height: '20%'
            }} src={logo} alt='Logo' />
            <img style={{
              width: '20%', height: '20%'
            }} src={logo} alt='Logo' />
            <img style={{
              width: '20%', height: '20%'
            }} src={logo} alt='Logo' />
            <img style={{
              width: '20%', height: '20%'
            }} src={logo} alt='Logo' />

          </div>

        </div>
        {/* =========================== */}

        <h1 style={{ textAlign: 'center', paddingTop: '150px' }}>Industries thriving with <br /> embedded video calls</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>



        </div>

        <div style={{ padding: '140px', }}>
          <div style={{
            paddingTop: '100px', backgroundColor: '#d8a5a5', borderRadius: '9px',
            display: 'flex', justifyContent: 'space-evenly'
          }}>
            <div style={{ paddingLeft: '60px', paddingBottom: '80px' }}>
              <h1 style={{ paddingLeft: '0px' }}>Looking for simple
                <br /> video meetings?</h1>
              <h5 style={{ textAlign: 'start' }}> If you want to host video calls in your browser with no
                <br /> downloads, check out Whereby Meetings.
              </h5>
              <a style={{}} href="https://google.com">Discover</a>
              <div>
                <Button style={{}} variant="primary">Try for free</Button></div>
            </div>


            <img style={{
              paddingBottom: '30px',
              width: '30%', height: '30%',
            }}
              src={logo} alt='Logo'
            />



          </div>
          <div>

          </div>


        </div>

        <div style={{}}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ alignItems: 'center' }}>
              <h3 style={{ textAlign: 'center' }}>Delightful video calls</h3>
              <span style={{ textAlign: 'center' }}>Increase customer trust and confidence by embedding secure video calls inside
                <br />your service.</span>
            </div>
            <img style={{
              paddingBottom: '30px',
              width: '10%', height: '10%',
            }}
              src={logo} alt='Logo'
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '30px' }}>

            <Card style={{ margin: '20px', width: '25rem' }}>
              <Card.Img variant="top" src={logo} />
              <Card.Title>

                Security and privacy focused
              </Card.Title>
              <Card.Text>
                All content is encrypted, we're GDPR and ISO27001 certified and can be implemented with HIPAA compliance.
              </Card.Text>
            </Card>


            <Card style={{ margin: '20px', width: '25rem' }}>
              <Card.Img variant="top" src={logo} />
              <Card.Title>

                Security and privacy focused
              </Card.Title>
              <Card.Text>
                All content is encrypted, we're GDPR and ISO27001 certified and can be implemented with HIPAA compliance.
              </Card.Text>

            </Card>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '30px' }}>

            <Card style={{ margin: '20px', width: '25rem' }}>
              <Card.Img variant="top" src={logo} />
              <Card.Title>

                Security and privacy focused
              </Card.Title>
              <Card.Text>
                All content is encrypted, we're GDPR and ISO27001 certified and can be implemented with HIPAA compliance.
              </Card.Text>
            </Card>


            <Card style={{ margin: '20px', width: '25rem' }}>
              <Card.Img variant="top" src={logo} />
              <Card.Title>

                Security and privacy focused
              </Card.Title>
              <Card.Text>
                All content is encrypted, we're GDPR and ISO27001 certified and can be implemented with HIPAA compliance.
              </Card.Text>

            </Card>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button style={{}}>Try for Free</Button>
          </div>

        </div>
        {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '90px' }}>
          <Card style={{ width: '67rem', height: '40rem' }}>
            <h2>
              “Whereby’s tools have been a game changer for us.
              <br /> We can create HIPAA-compliant video rooms for
              <br />every single session. It’s perfectly compliant with
              <br />every rule and regulation.”
            </h2>


          </Card>
        </div> */}

        <div style={{ backgroundColor: 'grey' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '30px' }}>
            <img style={{
              paddingBottom: '30px',
              width: '30%', height: '30%',
            }}
              src={logo} alt='Logo'
            />
            <h2 style={{ paddingTop: '100px' }}>Get</h2>
            <img style={{
              paddingBottom: '30px',
              width: '30%', height: '30%',
            }}
              src={logo} alt='Logo'
            />
          </div>
        </div>
        <Footer />
      </div >
    </>
  );
}

export default App;
