import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import herolui from './images/luis-hero-pic.jpg';
import proj1 from './images/proj1-ems.png';
import proj2 from './images/proj2-equicity.png';
import proj3 from './images/proj3-capstone.png';

function App() {
    const formRef = useRef();

    useEffect(() => {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
            });
        });

        // Navbar scroll effect
        const onScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'linear-gradient(135deg, rgba(37, 99, 235, 0.95), rgba(30, 64, 175, 0.95))';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.background = 'linear-gradient(135deg, var(--primary-blue), var(--secondary-blue))';
                navbar.style.backdropFilter = 'none';
            }
        };
        window.addEventListener('scroll', onScroll);

        // Intersection observer for project cards
        const observer = new window.IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) { entry.target.style.animation = 'fadeInUp 0.6s ease forwards' }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

        document.querySelectorAll('.project-card').forEach(card => { observer.observe(card) });

        // Cleanup
        return () => {
            window.removeEventListener('scroll', onScroll);
            observer.disconnect();
        };
    }, []);

    const handleContactSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;
        const firstName = form.firstName.value;
        const email = form.email.value;
        const message = form.message.value.trim();

        if (message === "") {
            if (!window.confirm("You did not enter a message. Do you want to proceed without one?")) {
                return;
            }
            alert(`Thank you, ${firstName}!\n\nWe will still contact you at ${email} soon.`);
        } else {
            alert(`Thank you, ${firstName}!\n\nYour message has been received. We will respond to you at ${email} soon.`);
        }
        form.reset();
    };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container">
              <a className="navbar-brand" href="#home"> Luis Antonio</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                      <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                      <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                  </ul>
              </div>
          </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 mb-4 mb-md-0 hero-content text-center text-md-start px-3 px-sm-4 px-lg-0">
                    <h1 className="hero-title">Hi, I'm Luis Antonio</h1>
                    <p className="hero-subtitle">3rd Year Computer Science Student</p>
                    <p className="hero-description">Passionate about creating innovative solutions through code.
                        Specializing in web development, mobile applications, and software engineering. Always eager to
                        learn new technologies and tackle challenging projects.</p>
                    <a href="#portfolio" className="btn btn-primary btn-lg"><i className="fas fa-rocket"></i> View My Work</a>
                </div>
                <div className="col-lg-6 col-md-6 text-center">
                    <img src={herolui} alt="Hero Image"
                        className="img-fluid rounded shadow w-75 w-md-100"></img>
                </div>
            </div>
        </div>
    </section>

    <section id="portfolio" className="portfolio-section">
        <div className="container">
            <h2 className="section-title">My Projects</h2>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="project-card h-100">
                        <div className="project-image"><img src={proj1} alt="Enrollment"/></div>
                        <div className="card-body p-4 d-flex flex-column">
                            <h5 className="project-title">Enrollment Management System</h5>
                            <p className="project-description">An enrollment management system that implements CRUD
                                operations to efficiently handle student records, courses, enrollments, and className lists.
                            </p>
                            <div className="mt-auto d-flex justify-content-end">
                                <button className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#project1Modal"><i className="fas fa-eye"></i> See More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="project-card h-100">
                        <div className="project-image"><img src={proj2} alt="Gen-D"/></div>
                        <div className="card-body p-4 d-flex flex-column">
                            <h5 className="project-title">EquiCity: Web-Based Urban Planner
                            </h5>
                            <p className="project-description">A proposed web-based urban planning tool that promotes
                                balanced growth in Lipa City by using real-time data to recommend optimal sites for
                                future development and reduce traffic congestion.</p>
                            <div className="mt-auto d-flex justify-content-end">
                                <button className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#project2Modal"><i className="fas fa-eye"></i> See More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="project-card h-100">
                        <div className="project-image"><img src={proj3} alt="KoKoDishApp"/></div>
                        <div className="card-body p-4 d-flex flex-column">
                            <h5 className="project-title">KoKoDishApp: Capstone Product Selling
                                Application</h5>
                            <p className="project-description">A mobile commerce platform designed to promote and sell our
                                CAPSTONE project's products directly to nearby barangays.</p>
                            <div className="mt-auto d-flex justify-content-end">
                                <button className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#project3Modal"><i className="fas fa-eye"></i> See More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="modal fade" id="project1Modal" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title"><i className="bi bi-rocket-takeoff-fill"></i>
                        Enrollment Management System </h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <div className="mb-4 text-center">
                        <img src={proj1} alt="Enrollment Management System"
                            className="img-fluid rounded shadow"/>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                        <span className="badge rounded-pill custom-pill" style={{ backgroundColor: "#0d6efd" }}>HTML5</span>
                        <span className="badge rounded-pill custom-pill" style={{ backgroundColor: "#5f9ea0" }}>CSS3</span>
                        <span className="badge rounded-pill custom-pill text-dark" style={{ backgroundColor: "#ced4da" }}>JavaScript</span>
                        <span className="badge rounded-pill custom-pill text-dark" style={{ backgroundColor: "#b0c4de" }}>PHP</span>
                        <span className="badge rounded-pill custom-pill" style={{ backgroundColor: "#0d6efd" }}>MySQL</span>
                    </div><br/>
                    <h6><i className="fas fa-info-circle"></i> Project Overview</h6>
                    <p>This enrollment management system was developed as part of my academic coursework to streamline
                        student record handling. It implements CRUD operations to manage student information, course
                        listings, className enrollments, and className lists efficiently. The system emphasizes usability and
                        accuracy in managing school data.</p>
                    <h6><i className="fas fa-star"></i> Key Features</h6>
                    <ul>
                        <li>Add, view, update, and delete student records</li>
                        <li>Manage course and subject listings</li>
                        <li>Enroll students into classes with validation checks</li>
                        <li>Generate and display class lists</li>
                        <li>Responsive design for accessibility across devices</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade" id="project2Modal" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title"><i className="bi bi-rocket-takeoff-fill"></i> EquiCity: Web-Based Urban Planner
                    </h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <div className="mb-4 text-center">
                        <img src={proj2} alt="EquiCity" className="img-fluid rounded shadow"/>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                        <span className="badge rounded-pill custom-pill" style={{ backgroundColor: "#0d6efd" }}>Figma</span>
                    </div><br/>
                    <h6><i className="fas fa-info-circle"></i> Project Overview</h6>
                    <p>This web-based urban planning tool was a proposal developed to address Lipa City's worsening
                        traffic congestion and unbalanced commercial growth. Designed primarily for local government
                        use, the system uses real-time traffic data, population density, and infrastructure information
                        to recommend optimal locations for future developments, supporting more equitable urban
                        expansion and smarter zoning decisions.</p>
                    <h6><i className="fas fa-star"></i> Key Features</h6>
                    <ul>
                        <li>Interactive heatmap displaying traffic flow, population clusters, facility locations, and
                            available land</li>
                        <li>Smart location recommendation algorithm for commercial hubs, schools, and public facilities
                        </li>
                        <li>Ranking system based on congestion relief, accessibility, land readiness, and growth
                            potential</li>
                        <li>Commercial impact gauge to estimate traffic generation of proposed developments</li>
                        <li>Data-driven visualization for better planning decisions</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade" id="project3Modal" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title"><i className="bi bi-rocket-takeoff-fill"></i> KoKoDishApp: Capstone Project
                        Selling Application</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <div className="mb-4 text-center">
                        <img src={proj3} alt="EquiCity" className="img-fluid rounded shadow"/>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                        <span className="badge rounded-pill custom-pill" style={{ backgroundColor: "#0d6efd" }}>Glide</span>
                    </div><br/>
                    <h6><i className="fas fa-info-circle"></i> Project Overview</h6>
                    <p>KoKoDishApp is a mobile commerce platform developed to promote and sell our CAPSTONE project
                        directly to nearby barangays. The app enables residents to conveniently browse, order, and learn
                        more about the featured product. It focuses on local accessibility, user-friendly navigation,
                        and real-time order management to strengthen community engagement and product reach.</p>
                    <h6><i className="fas fa-star"></i> Key Features</h6>
                    <ul>
                        <li>Browse CAPSTONE product details with images and descriptions</li>
                        <li>Place orders in real time</li>
                        <li>Order history for customers</li>
                        <li>Admin dashboard for managing product inventory and orders</li>
                        <li>Notifications for order updates and promotions</li>
                        <li>Mobile-optimized interface for seamless use on any device</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <section id="contact" className="contact-section">
        <div className="container">
            <h2 className="section-title">Let's Connect</h2>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-form">
                        <form id="contactForm" ref={formRef} onSubmit={handleContactSubmit}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName" className="form-label"><i className="fas fa-user"></i> First
                                        Name</label>
                                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter your first name" required/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName" className="form-label"><i className="fas fa-user"></i> Last
                                        Name</label>
                                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter your last name" required/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label"><i className="fas fa-envelope"></i> Email
                                    Address</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="your.email@example.com" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label"><i className="fas fa-comment"></i> Message</label>
                                <textarea className="form-control" id="message" name="message" rows="5" placeholder="Type your message here..."></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary btn-lg"><i className="fas fa-paper-plane"></i>
                                    Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer className="footer">
        <div className="container">
            <p>&copy; Luis Antonio Jopia | C3A | Student Portfolio</p>
        </div>
    </footer>
    </>
  );
}

export default App;
