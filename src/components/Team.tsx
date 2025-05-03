
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Managing Director",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
      bio: "With over 15 years of experience in Thai real estate, Sarah leads our team with unparalleled market knowledge.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Investment Advisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
      bio: "Michael specializes in matching investors with high-yield properties across Thailand's most promising markets.",
    },
    {
      id: 3,
      name: "Apinya Suwannapong",
      position: "Property Consultant",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
      bio: "Apinya's local insights and negotiation skills ensure our clients secure the best properties at optimal prices.",
    },
    {
      id: 4,
      name: "David Wilson",
      position: "Legal Advisor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
      bio: "David guides our clients through Thailand's property laws, ensuring seamless and legally sound transactions.",
    },
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vestors-blue mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our experts are dedicated to helping you find the perfect Thai property investment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <CardContent className="pt-8 pb-6">
                <Avatar className="w-28 h-28 mx-auto mb-6">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-vestors-blue mb-1">
                  {member.name}
                </h3>
                <p className="text-vestors-gold font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
