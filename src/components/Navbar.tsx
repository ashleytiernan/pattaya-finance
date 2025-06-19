import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-6 fixed w-full shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/207fade1-694c-437b-b90b-f658532a83d6.png" 
              alt="Pattaya Finance Logo" 
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl text-vestors-blue">
              Pattaya Finance
            </span>
          </a>
        </div>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              onClick={toggleMenu}
              className="text-vestors-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </Button>
            {isMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 animate-fade-in">
                <div className="flex flex-col space-y-4">
                  <a
                    href="/"
                    className="text-vestors-blue hover:text-yellow-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#properties"
                    className="text-vestors-blue hover:text-yellow-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Properties
                  </a>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-left text-vestors-blue hover:text-yellow-600 transition-colors">
                      Locations
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <a href="#bangkok">Bangkok</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <a href="#phuket">Phuket</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <a href="#chiangmai">Chiang Mai</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <a href="#pattaya">Pattaya</a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <a
                    href="#why-thailand"
                    className="text-vestors-blue hover:text-yellow-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Why Thailand
                  </a>
                  <a
                    href="/seller-financing"
                    className="text-vestors-blue hover:text-yellow-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Seller Financing
                  </a>
                  <a
                    href="/investor-services"
                    className="text-vestors-blue hover:text-yellow-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Investor Services
                  </a>
                  <a
                    href="#referral-program"
                    className="text-vestors-blue hover:text-yellow-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Referrals Plan
                  </a>
                  <a
                    href="#team"
                    className="text-vestors-blue hover:text-yellow-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Team
                  </a>
                  <a
                    href="#contact"
                    className="text-vestors-blue hover:text-yellow-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-8">
            <a
              href="/"
              className="text-vestors-blue hover:text-yellow-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#properties"
              className="text-vestors-blue hover:text-yellow-600 transition-colors"
            >
              Properties
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-vestors-blue hover:text-yellow-600 transition-colors">
                Locations
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <a href="#bangkok">Bangkok</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#phuket">Phuket</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#chiangmai">Chiang Mai</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#pattaya">Pattaya</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              href="#why-thailand"
              className="text-vestors-blue hover:text-yellow-600 transition-colors"
            >
              Why Thailand
            </a>
            <a
              href="/seller-financing"
              className="text-vestors-blue hover:text-yellow-600 transition-colors"
            >
              Seller Financing
            </a>
            <a
              href="/investor-services"
              className="text-vestors-blue hover:text-yellow-600 transition-colors"
            >
              Investor Services
            </a>
            <a
              href="#referral-program"
              className="text-vestors-blue hover:text-yellow-600 transition-colors"
            >
              Referrals Plan
            </a>
            <a
              href="#team"
              className="text-vestors-blue hover:text-yellow-600 transition-colors"
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-vestors-blue hover:text-yellow-600 transition-colors font-medium"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
