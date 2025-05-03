
import { Card, CardContent } from "@/components/ui/card";

const Locations = () => {
  const locations = [
    {
      id: "bangkok",
      name: "Bangkok",
      description: "Thailand's vibrant capital offers luxury condominiums in prime areas with strong rental yields.",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "phuket",
      name: "Phuket",
      description: "Thailand's largest island features stunning villas and resort properties with ocean views.",
      image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "chiangmai",
      name: "Chiang Mai",
      description: "The cultural northern hub offers traditional homes and modern developments in a serene setting.",
      image: "https://images.unsplash.com/photo-1599952480006-62d8e2f11f46?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "pattaya",
      name: "Pattaya",
      description: "This beach resort city presents affordable seafront condos and villas with excellent rental potential.",
      image: "https://images.unsplash.com/photo-1673487483028-1ce18954eb15?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="locations" className="py-20 bg-vestors-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vestors-blue mb-4">
            Popular Locations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore Thailand's most sought-after property investment destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <Card key={location.id} id={location.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-64">
              <div className="relative h-full group">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-60">
                  <CardContent className="relative h-full flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {location.name}
                    </h3>
                    <p className="text-white text-opacity-90 mb-4 hidden md:block">
                      {location.description}
                    </p>
                    <a
                      href={`#${location.id}`}
                      className="text-vestors-gold hover:underline inline-flex items-center"
                    >
                      View Properties
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
