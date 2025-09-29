import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand fw-bold fs-4" href="#">
        <img src="/images/logo.png" alt="SN15 LLC" style="height: 80px; filter: invert(1);" class="me-2">SN15 LLC
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link fs-5" href="#home">Home</a></li>
          <li class="nav-item"><a class="nav-link fs-5" href="#services">Services</a></li>
          <li class="nav-item"><a class="nav-link fs-5" href="#products">Products</a></li>
          <li class="nav-item"><a class="nav-link fs-5" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="hero-section text-white py-5">
    <div class="container">
      <div class="row align-items-center min-vh-100">
        <div class="col-lg-6">
          <h1 class="display-3 fw-bold mb-4">SN15 LLC</h1>
          <p class="lead mb-4">
            <i class="bi bi-robot me-2"></i>AI First • 
            <i class="bi bi-gear me-2"></i>Robotics • 
            <i class="bi bi-lightbulb me-2"></i>Innovation
          </p>
          <h2 class="h3 mb-4">Pioneering the Future with AI</h2>
          <p class="fs-5 mb-4">Leading AI First company delivering cutting-edge artificial intelligence solutions and advanced robotics technologies that transform industries and accelerate innovation.</p>
          <a href="#contact" class="btn btn-light btn-lg">
            <i class="bi bi-arrow-right me-2"></i>Get Started
          </a>
        </div>
        <div class="col-lg-6 text-center">
          <div class="logo-orbit-container position-relative d-inline-block" style="width:320px;height:320px;">
            <img src="/images/logo.png" alt="SN15 LLC Logo" class="img-fluid ai-robotics-logo position-absolute top-50 start-50 translate-middle" style="max-height: 180px; opacity: 0.9; mix-blend-mode: multiply; z-index:2;">
            <div class="logo-animated-labels position-absolute start-50 translate-middle-x" style="top: 90%; width: 100%; text-align: center;">
              <span class="animated-label label-ai">AI</span>
              <span class="animated-label label-robotics">Robotics</span>
              <span class="animated-label label-tech">Technology</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="display-5 fw-bold text-primary mb-3">Our Expertise</h2>
          <div class="border-bottom border-primary mx-auto" style="width: 60px; height: 3px;"></div>
        </div>
      </div>
      <div class="row g-4">
        <div class="col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center p-4">
              <i class="bi bi-robot display-4 text-primary mb-3"></i>
              <h4 class="card-title text-primary mb-3">AI Solutions</h4>
              <p class="card-text">Custom machine learning models, neural networks, and intelligent automation systems tailored to your business needs.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center p-4">
              <i class="bi bi-gear-fill display-4 text-primary mb-3"></i>
              <h4 class="card-title text-primary mb-3">Robotics Development</h4>
              <p class="card-text">Advanced robotic systems, autonomous navigation, and human-robot interaction technologies for industrial and commercial applications.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body text-center p-4">
              <i class="bi bi-brain display-4 text-primary mb-3"></i>
              <h4 class="card-title text-primary mb-3">AI Consulting</h4>
              <p class="card-text">Strategic AI implementation, technology assessment, and digital transformation guidance to accelerate your AI adoption journey.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Products Section -->
  <section id="products" class="py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h2 class="display-5 fw-bold text-primary mb-3">Our Products</h2>
          <div class="border-bottom border-primary mx-auto" style="width: 60px; height: 3px;"></div>
        </div>
      </div>
      <div class="row g-4">
        <div class="col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <i class="bi bi-arrow-repeat text-primary fs-3 me-3"></i>
                <h4 class="card-title text-primary mb-0">Intelligent Process Automation</h4>
              </div>
              <p class="card-text">AI-powered workflow optimization and automated decision-making systems that enhance operational efficiency.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <i class="bi bi-eye text-primary fs-3 me-3"></i>
                <h4 class="card-title text-primary mb-0">Robotic Vision Systems</h4>
              </div>
              <p class="card-text">Computer vision and sensor fusion technologies for autonomous navigation and object recognition in complex environments.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <i class="bi bi-graph-up text-primary fs-3 me-3"></i>
                <h4 class="card-title text-primary mb-0">Predictive Analytics Platform</h4>
              </div>
              <p class="card-text">Advanced analytics and forecasting tools powered by machine learning algorithms for data-driven insights.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-5 bg-primary text-white">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-lg-8">
          <h2 class="display-5 fw-bold mb-4">Partner with Us</h2>
          <p class="fs-5 mb-4">Ready to transform your business with AI and robotics? Let's build the future together.</p>
          <a href="mailto:info@sn15llc.ai" class="btn btn-light btn-lg">
            <i class="bi bi-envelope me-2"></i>Start Your AI Journey
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-dark text-white py-4">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <p class="mb-2">&copy; 2024 SN15 LLC. All rights reserved.</p>
          <p class="mb-0">Visit us at <a href="https://sn15llc.ai" class="text-light">sn15llc.ai</a></p>
        </div>
      </div>
    </div>
  </footer>
`