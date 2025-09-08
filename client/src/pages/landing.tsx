import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Cloud, 
  Calendar, 
  FileText, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Rocket, 
  DollarSign, 
  Lock, 
  Settings, 
  BarChart3, 
  Star, 
  Code, 
  Wrench, 
  Award, 
  Clock,
  HelpCircle,
  CalendarCheck
} from "lucide-react";
import logoHorizontal from "@assets/cloudnative_logo_1_1757348518870.png";

export default function LandingPage() {
  const handleCTAClick = (action: string) => {
    console.log('CTA clicked:', action);
    // TODO: Implement actual booking/lead generation logic
    switch(action) {
      case 'bookCall':
      case 'bookSnapshotCall':
      case 'bookSnapshotSlot':
      case 'reserveSnapshotSlot':
      case 'bookFinalCall':
        alert('Booking functionality would redirect to calendar booking system');
        break;
      case 'seeSampleReport':
      case 'viewSampleReport':
        alert('Sample report would open in new window/modal');
        break;
      default:
        alert('Action: ' + action);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={logoHorizontal} 
                alt="CloudNative Inc." 
                className="h-8"
                data-testid="logo-header"
              />
            </div>
            <Button 
              onClick={() => handleCTAClick('bookCall')}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:bg-[#176ba2] transition-colors"
              data-testid="button-header-book-call"
            >Reserve My Snapshot</Button>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">Cut $10k+ from Your Kubernetes Bill in 1 Week - or Your Money Back</h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">Your cloud costs keep climbing. Security audits feel risky. Engineers are firefighting instead of building. Snapshot fixes that in just 1 week.</p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-start mb-12">
              <div className="text-center">
                <Button 
                  onClick={() => handleCTAClick('bookSnapshotCall')}
                  className="bg-[#4f89a8] text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#176ba2] transition-colors w-full sm:w-auto"
                  data-testid="button-hero-book-snapshot-call"
                >
                  <CalendarCheck className="mr-2 h-5 w-5" />
                  Get My Kubernetes Snapshot
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  15-min call to see if you qualify
                </p>
              </div>
              <div className="text-center">
                <Button 
                  onClick={() => handleCTAClick('seeSampleReport')}
                  variant="outline"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#176ba2] hover:text-primary-foreground transition-colors w-full sm:w-auto"
                  data-testid="button-hero-see-sample-report"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  See Sample Report
                </Button>
                <p className="text-sm text-transparent mt-2">
                  Placeholder for alignment
                </p>
              </div>
            </div>

            {/* Credibility Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-card px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground">
                <Award className="inline mr-2 h-4 w-4 text-accent" />8+ yrs K8s experience
              </div>
              <div className="bg-card px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground">
                <Star className="inline mr-2 h-4 w-4 text-accent" />Ex-Red Hat
              </div>
              <div className="bg-card px-4 py-2 rounded-full border border-border text-sm font-medium text-muted-foreground">
                <Shield className="inline mr-2 h-4 w-4 text-accent" />Trusted by SMEs on AWS/GCP/Azure
              </div>
            </div>

            {/* Pain Points */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center bg-card p-4 rounded-lg border border-border">
                <CheckCircle className="text-accent h-5 w-5 mr-3" />
                <span className="text-foreground font-medium">Slash wasted Kubernetes spend</span>
              </div>
              <div className="flex items-center bg-card p-4 rounded-lg border border-border">
                <CheckCircle className="text-accent h-5 w-5 mr-3" />
                <span className="text-foreground font-medium">Close critical security gaps (CIS + access controls)</span>
              </div>
              <div className="flex items-center bg-card p-4 rounded-lg border border-border">
                <CheckCircle className="text-accent h-5 w-5 mr-3" />
                <span className="text-foreground font-medium">Free your engineers to ship, not firefight</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pain Agitation Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Are These Kubernetes Challenges Costing You?
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 bg-card rounded-xl border border-border">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-red-500 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Cloud bills growing unpredictably</h3>
              <p className="text-muted-foreground">Your Kubernetes costs are spiraling out of control with little visibility into what's actually driving the expense.</p>
            </Card>
            
            <Card className="text-center p-8 bg-card rounded-xl border border-border">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-red-500 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Security & audit anxiety</h3>
              <p className="text-muted-foreground">You're concerned that a hidden misconfiguration could lead to a security breach or failed compliance audit.</p>
            </Card>
            
            <Card className="text-center p-8 bg-card rounded-xl border border-border">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="text-red-500 h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.5 2h2.5v4h2.5L12 7.5 10.5 6H8.5V2zM12 12L8.5 9h7L12 12z"/>
                  <path d="M4 14v6h16v-6H4zm14 4H6v-2h12v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Engineers firefighting instead of shipping</h3>
              <p className="text-muted-foreground">Your team spends more time fixing issues than delivering features.</p>
            </Card>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => handleCTAClick('showHowSnapshot')}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#176ba2] transition-colors"
              data-testid="button-pain-show-how-snapshot"
            >Yes - show me how the Snapshot works</Button>
          </div>
        </div>
      </section>
      {/* Solution Section */}
      <section className="py-16 lg:py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our 3-Pillar Diagnostic Process
            </h2>
            <p className="text-xl text-muted-foreground">From kick-off on Monday to findings read-out on Friday, we reveal:</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 bg-card rounded-xl border border-border">
              <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="text-yellow-600 h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Save on Costs</h3>
              <p className="text-muted-foreground">We analyze your cluster's resource utilization to identify idle assets and over-provisioned workloads, delivering immediate savings opportunities.</p>
            </Card>
            
            <Card className="text-center p-8 bg-card rounded-xl border border-border">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="text-blue-600 h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Close Security Gaps</h3>
              <p className="text-muted-foreground">We audit your cluster against the industry-standard CIS Benchmark to find and prioritize your most critical configuration gaps.</p>
            </Card>
            
            <Card className="text-center p-8 bg-card rounded-xl border border-border">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="text-accent h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Stabilize Performance</h3>
              <p className="text-muted-foreground">We identify the root causes of instability, like resource bottlenecks and missing health probes, through workload rightsizing analysis.</p>
            </Card>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => handleCTAClick('bookSnapshotSlot')}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#176ba2] transition-colors"
              data-testid="button-solution-book-snapshot-slot"
            >
              Book Your Snapshot Slot
            </Button>
          </div>
        </div>
      </section>
      {/* Deliverables Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What You'll Get in Just 1 Week
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You won't receive a raw data dump. Our deliverable is a professional, executive-ready report that translates complex technical findings into a clear, prioritized business case for action.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <Card className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Executive-ready report</h3>
                  <p className="text-muted-foreground">PDF/HTML summary with prioritized findings and next steps.</p>
                </div>
              </Card>
              
              <Card className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="text-yellow-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Top 5 issues & savings opportunities</h3>
                  <p className="text-muted-foreground">Clear overview for decision makers.</p>
                </div>
              </Card>
              
              <Card className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="text-purple-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Technical evidence bundle</h3>
                  <p className="text-muted-foreground">CSV/JSON data from Kubecost, Goldilocks, Kube-bench, Kube-score.</p>
                </div>
              </Card>
              
              <Card className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench className="text-accent h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Remediation steps</h3>
                  <p className="text-muted-foreground">Owner, impact, and copy-paste fixes for each key finding.</p>
                </div>
              </Card>
            </div>
            
            <div className="flex items-center justify-center">
              <Card className="bg-card p-8 rounded-xl border border-border text-center">
                <div className="w-full h-80 bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <FileText className="text-muted-foreground h-16 w-16 mx-auto mb-2" />
                    <p className="text-muted-foreground font-medium">Sample Report Preview</p>
                    <p className="text-sm text-muted-foreground">Executive Summary & Action Plan</p>
                  </div>
                </div>
                <Button 
                  variant="link"
                  onClick={() => handleCTAClick('viewSampleReport')}
                  className="text-primary hover:underline font-medium"
                  data-testid="button-deliverables-view-sample-report"
                >
                  View Full Sample Report →
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-16 lg:py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="flex items-center justify-center mb-4">
                <CalendarCheck className="text-primary h-6 w-6 mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Kickoff (Mon)</h3>
              </div>
              <p className="text-muted-foreground">30-min call to confirm scope and agree on a simple collector deployment (zero-access by default).</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="flex items-center justify-center mb-4">
                <Settings className="text-primary h-6 w-6 mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Analysis (Tue–Thu)</h3>
              </div>
              <p className="text-muted-foreground">Run tooling, synthesize findings, prep report. You run collectors, we analyze results.</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="flex items-center justify-center mb-4">
                <BarChart3 className="text-primary h-6 w-6 mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Readout (Fri)</h3>
              </div>
              <p className="text-muted-foreground">45-min exec briefing with prioritized action plan.</p>
            </div>
          </div>
          
          <Card className="bg-card p-6 rounded-xl border border-border text-center">
            <p className="text-muted-foreground">
              <Shield className="inline text-accent mr-2 h-5 w-5" />
              <strong>Zero access required</strong> — your team runs a simple one-liner job.
            </p>
          </Card>
        </div>
      </section>
      {/* Credibility Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Trusted Kubernetes Expertise
            </h2>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Card className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="text-red-600 h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Ex-Red Hat</h3>
                <p className="text-sm text-muted-foreground">Enterprise Kubernetes experience</p>
              </Card>
              
              <Card className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-primary h-8 w-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">8+ Years</h3>
                <p className="text-sm text-muted-foreground">K8s platform experience</p>
              </Card>
              
              <Card className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="text-accent h-8 w-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Multi-Cloud</h3>
                <p className="text-sm text-muted-foreground">AWS/GCP/Azure SMEs</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Risk Reversal Section */}
      <section className="py-16 lg:py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card p-8 lg:p-12 rounded-2xl border-2 border-primary">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-primary-foreground h-10 w-10" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Risk-Free Guarantee
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                If we don't uncover <strong className="text-foreground">$10k+</strong> in annualized savings or at least <strong className="text-foreground">one critical security gap*</strong>, we refund <strong className="text-foreground">100% of your fee</strong>. No risk, no hidden catches.
              </p>
              <p className="text-sm text-muted-foreground">
                *Excludes non-actionable findings on managed services (e.g., GKE, EKS).
              </p>
            </div>
          </Card>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Simple, Fixed-Fee Engagement
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            No hidden costs. No per-node pricing. Just a flat fee.
          </p>
          
          <Card className="bg-card p-8 lg:p-12 rounded-2xl border border-border max-w-lg mx-auto mb-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                CA $4,950
              </div>
              <div className="text-lg text-muted-foreground mb-6">
                (US $3,750)
              </div>
              <div className="text-sm text-muted-foreground mb-8">
                The K8s Snapshot is backed by a tailored guarantee and a fixed-fee with no hidden costs.
              </div>
            </div>
          </Card>
          
          <Button 
            onClick={() => handleCTAClick('reserveSnapshotSlot')}
            className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-xl font-semibold hover:bg-[#176ba2] transition-colors"
            data-testid="button-pricing-reserve-snapshot-slot"
          >
            Reserve Your Snapshot Slot Today
          </Button>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Lock className="text-primary-foreground h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">What access do you need?</h3>
                  <p className="text-muted-foreground">Zero-access: your engineer runs our one-liner job, which gathers evidence and outputs a tarball.</p>
                </div>
              </div>
            </Card>
            
            <Card className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary-foreground h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Will this slow my team down?</h3>
                  <p className="text-muted-foreground">No. Your total time investment is ~2 hours across the week.</p>
                </div>
              </div>
            </Card>
            
            <Card className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="text-primary-foreground h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">What if you don't find anything?</h3>
                  <p className="text-muted-foreground">Our guarantee covers you: we refund 100% of your fee if we don't uncover at least CA $10,000 in savings or one critical security gap.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-16 lg:py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Cut Costs and Close Gaps in Just 1 Week?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join SMEs who've already saved thousands on their Kubernetes infrastructure while improving security and stability.
          </p>
          
          <Button 
            onClick={() => handleCTAClick('bookFinalCall')}
            className="bg-primary text-primary-foreground px-12 py-5 rounded-full text-xl font-semibold hover:bg-[#176ba2] transition-colors mb-6"
            data-testid="button-final-book-call"
          >
            <CalendarCheck className="mr-3 h-6 w-6" />
            Book Your 15-min Snapshot Call
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Limited slots available each month.
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src={logoHorizontal} 
                alt="CloudNative Inc." 
                className="h-5"
                data-testid="logo-footer"
              />
            </div>
            <p className="text-muted-foreground mb-4">
              <a href="mailto:snapshot@cloudnativeinc.io" className="text-primary hover:underline">snapshot@cloudnativeinc.io</a> | 
              <a href="tel:647-963-6589" className="text-primary hover:underline ml-2">647-963-6589</a>
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 CloudNative Inc.—All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
