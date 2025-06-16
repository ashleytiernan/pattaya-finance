
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Australia",
      property: "Bangkok Condo",
      rating: 5,
      text: "Vestors.net made my Thai property investment seamless. The team's local knowledge and professional service exceeded my expectations. My rental yield is exactly as projected.",
      investment: "$320,000",
      yield: "8.2%"
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      property: "Phuket Villa",
      rating: 5,
      text: "Outstanding service from start to finish. The market analysis was spot-on, and the property has already appreciated 15% in just 18 months. Highly recommended!",
      investment: "$780,000",
      yield: "6.8%"
    },
    {
      name: "Emma Thompson",
      location: "UK",
      property: "Chiang Mai House",
      rating: 5,
      text: "As a first-time international investor, I was nervous. But Vestors.net guided me through every step. My property is fully rented and generating excellent returns.",
      investment: "$280,000",
      yield: "7.5%"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vestors-blue mb-4">
            What Our Investors Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from successful property investors who trusted Vestors.net with their Thai property investments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-vestors-gold fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-vestors-blue">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-vestors-gold">{testimonial.yield} Yield</p>
                      <p className="text-sm text-gray-500">{testimonial.investment}</p>
                    </div>
                  </div>
                  <p className="text-sm text-vestors-blue font-medium">{testimonial.property}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
