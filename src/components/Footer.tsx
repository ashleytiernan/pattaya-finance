const Footer = () => {
  return (
    <footer className="bg-vestors-darkgray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/207fade1-694c-437b-b90b-f658532a83d6.png" 
                alt="Pattaya Finance Logo" 
                className="h-6 w-auto"
              />
              <h3 className="text-xl font-bold">Pattaya Finance</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Pattaya's premier property investment platform, connecting investors with exceptional real estate opportunities in Thailand.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#properties" className="text-gray-300 hover:text-yellow-600 transition-colors">Properties</a></li>
              <li><a href="#locations" className="text-gray-300 hover:text-yellow-600 transition-colors">Locations</a></li>
              <li><a href="#why-thailand" className="text-gray-300 hover:text-yellow-600 transition-colors">Why Thailand</a></li>
              <li><a href="/seller-financing" className="text-gray-300 hover:text-yellow-600 transition-colors">Seller Finance</a></li>
              <li><a href="/investor-services" className="text-gray-300 hover:text-yellow-600 transition-colors">Investor Services</a></li>
              <li><a href="#referral-program" className="text-gray-300 hover:text-yellow-600 transition-colors">Referral Program</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-yellow-600 transition-colors">Our Team</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yellow-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-yellow-600 transition-colors">Investment Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-600 transition-colors">Thai Property Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-600 transition-colors">Market Reports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-600 transition-colors">News & Updates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-600 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-yellow-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
            <p className="text-gray-300">
              Subscribe to our newsletter for the latest property updates and investment opportunities.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Pattaya Finance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
