import os
import re

footer_css = '''
/* Simple & Modern Site Footer */
.site-footer {
  background: var(--bg-color, #ffffff);
  border-top: 1px solid rgba(0, 191, 175, 0.15);
  padding: 5rem 5% 2rem;
  margin-top: 4rem;
  color: var(--text-color, #494545);
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 3rem;
}

.footer-brand .logo {
  margin-bottom: 1.5rem;
  display: inline-block;
}

.footer-brand .logo .name {
  font-size: 1.5rem;
  color: var(--accent-gold, #00bfaf);
  font-weight: 800;
  font-family: var(--font-heading, 'Outfit', sans-serif);
}

.footer-brand .footer-desc {
  color: var(--text-muted, #666);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.footer-contact span {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
  color: var(--text-muted, #666);
}

.footer-contact span i {
  color: var(--accent-gold, #00bfaf);
  width: 16px;
  text-align: center;
}

.footer-col h3 {
  font-size: 1.2rem;
  color: var(--text-color, #494545);
  margin-bottom: 1.5rem;
  position: relative;
  font-family: var(--font-heading, 'Outfit', sans-serif);
}

.footer-col h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 30px;
  height: 2px;
  background: var(--accent-gold, #00bfaf);
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links ul li {
  margin-bottom: 0.8rem;
}

.footer-links ul li a {
  text-decoration: none;
  color: var(--text-muted, #666);
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.footer-links ul li a:hover {
  color: var(--accent-gold, #00bfaf);
  transform: translateX(5px);
}

.footer-social .social-icons {
  display: flex;
  gap: 1rem;
}

.footer-social .social-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(0, 191, 175, 0.08);
  color: var(--accent-gold, #00bfaf);
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.1rem;
}

.footer-social .social-icons a:hover {
  background: var(--accent-gold, #00bfaf);
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 191, 175, 0.2);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 191, 175, 0.1);
  color: var(--text-muted, #666);
  font-size: 0.85rem;
}
'''

with open(r'c:\Users\sachi\OneDrive\Desktop\testing\css\style.css', 'a', encoding='utf-8') as f:
    f.write('\n' + footer_css)

for filename in ['index.html', 'pages/about.html', 'pages/services.html', 'pages/portfolio.html', 'pages/contactus.html']:
    path = os.path.join(r'c:\Users\sachi\OneDrive\Desktop\testing', filename)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Prefix for links based on dir
    if filename == 'index.html':
        home_href = './index.html'
        about_href = './pages/about.html'
        services_href = './pages/services.html'
        portfolio_href = './pages/portfolio.html'
        contact_href = './pages/contactus.html'
    else:
        home_href = '../index.html'
        about_href = './about.html'
        services_href = './services.html'
        portfolio_href = './portfolio.html'
        contact_href = './contactus.html'

    new_footer = f'''    <footer class="site-footer" id="contact">
      <div class="footer-container">
        <div class="footer-col footer-brand">
          <div class="logo">
            <span class="name">DKSDesign</span>
          </div>
          <p class="footer-desc">Delivering technically accurate BIM models, coordinated MEPF systems, and construction-ready documentation.</p>
          <div class="footer-contact">
            <span><i class="fas fa-map-marker-alt"></i> Janakpuri, New Delhi – 110058</span>
            <span><i class="fas fa-phone"></i> +91 9810464942</span>
            <span><i class="fas fa-envelope"></i> dks@dksdesign.in</span>
          </div>
        </div>
        
        <div class="footer-col footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="{home_href}">Home</a></li>
            <li><a href="{about_href}">About Us</a></li>
            <li><a href="{services_href}">Services</a></li>
            <li><a href="{portfolio_href}">Portfolio</a></li>
            <li><a href="{contact_href}">Contact</a></li>
          </ul>
        </div>

        <div class="footer-col footer-links">
          <h3>Our Expertise</h3>
          <ul>
            <li><a href="{services_href}#expertise">Steel Detailing</a></li>
            <li><a href="{services_href}#expertise">3D Rendering</a></li>
            <li><a href="{services_href}#expertise">BIM Services</a></li>
            <li><a href="{services_href}#expertise">MEPF Services</a></li>
            <li><a href="{services_href}#expertise">Shop Drawings</a></li>
          </ul>
        </div>

        <div class="footer-col footer-social">
          <h3>Connect With Us</h3>
          <div class="social-icons">
            <a href="https://wa.me/919810464942" target="_blank" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            <a href="https://www.instagram.com/dksdesign.in" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61575144633559" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/company/dks-design/" target="_blank" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>© 2024 DKS Design. All Rights Reserved.</p>
      </div>
    </footer>'''

    content = re.sub(r'<footer .*?class="cta-footer".*?</footer\s*>', new_footer, content, flags=re.DOTALL)
    
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
