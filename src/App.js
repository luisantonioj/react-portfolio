import logo from './logo.svg';
import './App.css';

function App() {
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
                        <div className="project-image"><img src="images/proj1-ems.png" alt="Enrollment"></img></div>
                        <div className="card-body p-4 d-flex flex-column">
                            <h5 className="project-title" onclick="changeBackground()">Enrollment Management System</h5>
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
                        <div className="project-image"><img src="images/proj2-equicity.png" alt="Gen-D"></img></div>
                        <div className="card-body p-4 d-flex flex-column">
                            <h5 className="project-title" onclick="changeBackground()">EquiCity: Web-Based Urban Planner
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
                        <div className="project-image"><img src="images/proj3-capstone.png" alt="KoKoDishApp"></img></div>
                        <div className="card-body p-4 d-flex flex-column">
                            <h5 className="project-title" onclick="changeBackground()">KoKoDishApp: Capstone Product Selling
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

    <section id="contact" className="contact-section">
        <div className="container">
            <h2 className="section-title">Let's Connect</h2>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-form">
                        <form id="contactForm">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="firstName" className="form-label"><i className="fas fa-user"></i> First
                                        Name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" required/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="lastName" className="form-label"><i className="fas fa-user"></i> Last
                                        Name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" required/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label"><i className="fas fa-envelope"></i> Email
                                    Address</label>
                                <input type="email" className="form-control" id="email" placeholder="your.email@example.com" required/>
                            </div>
                            <div className="mb-3">
                                <label for="message" className="form-label"><i className="fas fa-comment"></i> Message</label>
                                <textarea className="form-control" id="message" rows="5" placeholder="Type your message here..."></textarea>
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

    <footer class="footer">
        <div class="container">
            <p>&copy; Luis Antonio Jopia | C3A | Student Portfolio</p>
        </div>
    </footer>
    </>
  );
}

export default App;
