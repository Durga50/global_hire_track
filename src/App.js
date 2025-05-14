import { useEffect,useState } from 'react';
import './App.css';



  
function App() {
  
  const [searchTerm,setSearchTerm] = useState('')
  const companies = [
    {
      name: "Google",
      img: "/google.png",
      description: "The search for answers starts with Google, but it never ends there.",
      link: "https://www.google.com/about/careers/applications/"
    },
    {
      name: "Microsoft",
      img: "/ms.png",
      description: "Empowering every organization on the planet to achieve more things.",
      link: "https://careers.microsoft.com/v2/global/en/home.html"
    },
    {
      name: "Amazon",
      img: "/amazon.jpg",
      description: "Empowering everyday life with boundless possibilities—this is Amazon.",
      link: "https://www.amazon.jobs/en/"
    },
    {
      name: "Apple",
      img: "/apple.png",
      description: "Where simplicity meets sophistication—Apple defines excellence.",
      link: "https://www.apple.com/careers/us/"
    },
    {
      name: "IBM",
      img: "/IBM.png",
      description: "Building a more intelligent world through collaboration and innovation.",
      link: "https://www.ibm.com/in-en/careers/search"
    },
    {
      name: "Facebook (Meta)",
      img: "/fb.png",
      description: "Exploring new realities and connections—Facebook leads the social frontier.",
      link: "https://www.metacareers.com/"
    },
    {
      name: "Tesla",
      img: "/tesla.png",
      description: "Where innovation meets sustainability—Tesla redefines the automotive landscape.",
      link: "https://www.tesla.com/careers"
    },
    {
      name: "NVIDIA",
      img: "/nvidia.png",
      description: "Where innovation meets imagination—NVIDIA redefines visual computing.",
      link: "https://www.nvidia.com/en-us/about-nvidia/careers/"
    },
    {
      name: "Accenture",
      img: "/accenture.png",
      description: "Transforming businesses with innovation and technology at the speed of change.",
      link: "https://www.accenture.com/in-en/careers"
    },
    {
      name: "Cognizant",
      img: "/cognizant.jpg",
      description: "Where technology meets human ingenuity—Cognizant drives digital transformation.",
      link: "https://careers.cognizant.com/india-en/"
    },
    {
      name: "Oracle",
      img: "/oracle.png",
      description: "Databases to cloud services, Oracle is at the forefront of technology.",
      link: "https://www.oracle.com/corporate/careers/"
    },
    {
      name: "SAP",
      img: "/sap.jpg",
      description: "From ERP to cloud solutions, SAP shapes the future of enterprise technology.",
      link: "https://jobs.sap.com/"
    }
  ];

  const filteredCompanies = companies.filter(company => 
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return(
    <div className='container-fluid'>
      <div className='navbar '>
<nav className="navbar1  navbar-expand-sm">
    <ul className="navbar-nav">
    <li className="nav-item">
        <a className="nav-link" href="#"><span className='logo'><b><span className='navcolor'>G</span>lobal<span className='navcolor'>H</span>ire<span className='navcolor'>T</span>rack</b></span></a>
      </li>
      
    </ul>
</nav>
      </div>
      <div className="video-container">
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='card home'>
              <div className='card-body text-center'>
                <h6 className='card-title hom'>Your guide to breaking into the world’s top MNCs. Get insider tips, hiring processes, and all the details you need to land your dream job!</h6>
                <button className='learnmore' onClick={() => {}}>Learn More</button>

              </div>
            </div>

          </div>
      <video autoPlay muted loop className="background-video">
        <source src="/vedio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div><br /><br /><br /><br /><br /><br />

    <section className=' container about'>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <img src='\aboutimg.jpg' className='aboutimg'></img>

        </div><br />
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <h2 className='abouthead'>About Us</h2><br />
        <p className='aboutpara'>At GlobalHire, we are committed to helping job seekers unlock opportunities at top multinational corporations (MNCs). We provide detailed insights into MNC hiring processes, expert tips to prepare for interviews, and essential company information to help you make informed decisions. Our platform is designed to guide you through each step of the hiring journey, equipping you with the knowledge and confidence needed to stand out in a competitive global job market. Whether you're a fresh graduate or a professional looking for a career shift, we're here to support your path to success.</p>
        </div>
        
      </div><br /><br /><br />
    </section>
    <section className='container companyDet'>
      <h1 className='comhead'>
        Top 12 MNC's
      </h1><br /><br />

      {/* Search input box */}
      <input
        type="text"
        placeholder="Search company by name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className='form-control mb-4'
      />

      <div className='row'>
        {filteredCompanies.length > 0 ? filteredCompanies.map((company, index) => (
          <div key={index} className='col-lg-3 col-md-6 col-sm-12'>
            <div className='card'>
              <div className='img-hover'>
                <img src={company.img} className='card-img-top' alt={company.name}></img>
              </div>
              <div className='card-body'>
                <h5 className="card-title">{company.name}</h5>
                <p className="card-text">{company.description}</p>
                <a href={company.link} className="btn btn-danger">Know more</a>
              </div>
            </div>
          </div>
        )) : (
          <p className="text-center">No companies found.</p>
        )}
      </div><br />
    </section>

<footer className='footer'>
  <p className='footpara'> Developed and Maintained By @ Durga-Technology Innovation Hub.</p>

</footer>

    </div>
  );
}

export default App;
