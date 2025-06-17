import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import InvestmentCalculator from "./InvestmentCalculator";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Villa with Sea View",
      location: "Phuket",
      price: "$950,000",
      bedrooms: 4,
      bathrooms: 5,
      area: "450 sqm",
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=500&h=350&q=80",
      featured: true,
    },
    {
      id: 2,
      title: "Modern City Condominium",
      location: "Bangkok, Sukhumvit",
      price: "$320,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "85 sqm",
      image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=500&h=350&q=80",
      featured: false,
    },
    {
      id: 3,
      title: "Beachfront Pool Villa",
      location: "Koh Samui",
      price: "$780,000",
      bedrooms: 3,
      bathrooms: 4,
      area: "350 sqm",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=500&h=350&q=80",
      featured: true,
    },
    {
      id: 4,
      title: "Riverside Townhouse",
      location: "Chiang Mai",
      price: "$280,000",
      bedrooms: 3,
      bathrooms: 3,
      area: "210 sqm",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=500&h=350&q=80",
      featured: false,
    },
    {
      id: 5,
      title: "Luxury Penthouse",
      location: "Bangkok, Riverside",
      price: "$1,200,000",
      bedrooms: 4,
      bathrooms: 5,
      area: "320 sqm",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=500&h=350&q=80",
      featured: true,
    },
    {
      id: 6,
      title: "Golf Resort Villa",
      location: "Hua Hin",
      price: "$425,000",
      bedrooms: 3,
      bathrooms: 3,
      area: "280 sqm",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&h=350&q=80",
      featured: false,
    },
  ];

  return (
    <section id="properties" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vestors-blue mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of the finest properties across Thailand's most desirable locations
          </p>
        </div>

        {/* Investment Calculator */}
        <div className="flex justify-center mb-16">
          <InvestmentCalculator />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                {property.featured && (
                  <Badge className="absolute top-3 right-3 bg-yellow-600 text-white border-none">
                    Featured
                  </Badge>
                )}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                  <span className="text-white font-medium">{property.location}</span>
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2 text-vestors-blue">
                  {property.title}
                </h3>
                <p className="text-yellow-600 text-xl font-bold mb-4">
                  {property.price}
                </p>
                <div className="flex justify-between text-sm text-gray-600 border-t border-gray-200 pt-4">
                  <span>{property.bedrooms} Bedrooms</span>
                  <span>{property.bathrooms} Bathrooms</span>
                  <span>{property.area}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-vestors-blue hover:bg-yellow-600 text-white">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-vestors-blue text-vestors-blue hover:bg-vestors-blue hover:text-white">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
