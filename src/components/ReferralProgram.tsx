
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, Gift, Trophy } from "lucide-react";

const ReferralProgram = () => {
  return (
    <section id="referral-program" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-vestors-blue mb-4">
            Referral Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Earn rewards by referring friends and family to our investment opportunities. 
            The more you refer, the more you earn!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-vestors-blue mx-auto mb-4" />
              <CardTitle className="text-xl">Refer Friends</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Share your unique referral link with friends and family interested in Thai property investments.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <DollarSign className="h-12 w-12 text-vestors-blue mx-auto mb-4" />
              <CardTitle className="text-xl">Earn Commission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Receive up to 2% commission on every successful investment made through your referral.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Gift className="h-12 w-12 text-vestors-blue mx-auto mb-4" />
              <CardTitle className="text-xl">Bonus Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get additional bonuses for multiple referrals and milestone achievements.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Trophy className="h-12 w-12 text-vestors-blue mx-auto mb-4" />
              <CardTitle className="text-xl">VIP Status</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Top referrers gain VIP access to exclusive deals and priority property viewings.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="bg-vestors-lightgray rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-vestors-blue mb-4">
                How It Works
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-vestors-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-vestors-blue">Sign Up</h4>
                    <p className="text-gray-600">Join our referral program and get your unique link</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-vestors-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-vestors-blue">Share</h4>
                    <p className="text-gray-600">Share your link with friends via social media, email, or direct contact</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-vestors-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-vestors-blue">Earn</h4>
                    <p className="text-gray-600">Receive commissions when your referrals make successful investments</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-vestors-blue mb-4">
                Commission Structure
              </h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">First 5 Referrals</span>
                    <span className="text-vestors-blue font-bold">1.5%</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Next 10 Referrals</span>
                    <span className="text-vestors-blue font-bold">2.0%</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">VIP Level (15+)</span>
                    <span className="text-vestors-blue font-bold">2.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-vestors-blue mb-4">
            Ready to Start Earning?
          </h3>
          <p className="text-gray-600 mb-6">
            Join our referral program today and start earning from your network.
          </p>
          <Button className="bg-vestors-blue hover:bg-vestors-blue/90 text-white px-8 py-3">
            Join Referral Program
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReferralProgram;
