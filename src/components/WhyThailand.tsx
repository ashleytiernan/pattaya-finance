import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const WhyThailand = () => {
  const reasons = [{
    title: "Strong Economic Growth",
    description: "Thailand has demonstrated remarkable economic resilience with consistent GDP growth, making it an attractive destination for property investment.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
  }, {
    title: "Tourism Hotspot",
    description: "As one of the world's most visited destinations, Thailand offers excellent rental yields for property investors in tourist-favored locations.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </svg>
  }, {
    title: "Affordable Luxury",
    description: "Thailand offers premium real estate at competitive prices compared to other global property markets, providing more value for your investment.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"></path>
          <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"></path>
          <line x1="12" y1="22" x2="12" y2="13"></line>
          <path d="M17 13.5v3.37a2.06 2.06 0 0 1-.56 1.4L12 22l-4.5-3.9a2.06 2.06 0 0 1-.54-1.37v-3.46"></path>
        </svg>
  }, {
    title: "Strategic Location",
    description: "Centrally positioned in Southeast Asia, Thailand serves as an ideal hub for business and travel throughout the Asia-Pacific region.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
  }];
  return <section id="why-thailand" className="py-20 bg-vestors-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vestors-blue mb-4">
            Why Invest in Thai Property?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Thailand offers unique advantages for property investors looking for strong returns and lifestyle benefits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="rounded-full w-12 h-12 flex items-center justify-center mb-4 text-white bg-yellow-500">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-vestors-blue">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-vestors-blue hover:bg-vestors-gold text-white px-8 py-6 text-lg">
            Download Investment Guide
          </Button>
        </div>
      </div>
    </section>;
};
export default WhyThailand;