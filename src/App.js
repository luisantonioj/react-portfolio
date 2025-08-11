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
                    <img src="images/luis-hero-pic.jpg" alt="Hero Image"
                        className="img-fluid rounded shadow w-75 w-md-100"></img>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default App;
