import React, { useState } from 'react';
import { 
  Heart, 
  Laptop, 
  Users, 
  MapPin, 
  CheckCircle, 
  DollarSign, 
  UserCheck,
  BarChart3,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Star,
  BookOpen,
  Eye,
} from 'lucide-react';
import DeviceUsage from './DeviceUsage';

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [showDeviceUsage, setShowDeviceUsage] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { label: "Devices Donated", value: "132", icon: Laptop },
    { label: "Students Taught", value: "540+", icon: Users },
    { label: "Villages Reached", value: "9", icon: MapPin }
  ];

  const faqs = [
    {
      question: "Can I send from outside India?",
      answer: "Yes! We accept international donations. Please contact us for shipping details and customs information. We'll guide you through the process."
    },
    {
      question: "Is my donation tax deductible?",
      answer: "Yes, Rohtas Rural Tech Foundation is a registered Public Charitable Trust. We provide 80G tax exemption certificates for all donations above ₹500."
    },
    {
      question: "How do you deliver devices to villages?",
      answer: "We have a network of local volunteers and partners in Bihar. We personally visit each village to ensure safe delivery and provide initial training to students and teachers."
    },
    {
      question: "Can I teach students online even if I don't speak Hindi fluently?",
      answer: "Yes! Our students understand basic English mixed with Hindi. You can teach in simple English, and we provide translation support when needed. What matters most is your patience and willingness to help these eager learners."
    },
    {
      question: "What skills can I teach as a volunteer teacher?",
      answer: "We need teachers for technical skills (coding, computer basics, digital marketing), soft skills (communication, English, presentation), and life skills (financial literacy, career guidance). Even basic computer literacy makes a huge difference!"
    },
    {
      question: "Can I visit the village or volunteer remotely?",
      answer: "Both! You can teach online from anywhere in the world, or visit our Bihar Rohtas center in person. Most of our volunteer teachers start with online sessions and later visit to meet their students."
    }
  ];

  const testimonials = [
    {
      name: "Priya Kumari",
      age: 14,
      village: "Rohtas District",
      quote: "I never thought I could learn coding in my village. Now I'm building my first website and dream of becoming a software engineer!",
      rating: 5
    },
    {
      name: "Ramesh Singh",
      role: "Parent",
      village: "Ara Village",
      quote: "My daughter now teaches me about computers. This program has opened doors we never knew existed for our children.",
      rating: 5
    },
    {
      name: "Anjali Sharma",
      role: "Volunteer Teacher",
      village: "Delhi (Teaching Online)",
      quote: "Teaching these kids for 3 hours weekly has been the most rewarding experience. Their eagerness to learn despite challenges is inspiring. I've learned more from them than I've taught!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/4F46E5/FFFFFF?text=Rural+Child+Learning+on+Laptop')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Rural India, Starting with Bihar
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Donate your unused device or become a monthly supporter — empower students in India's most underprivileged state to access technology and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                <Laptop className="inline mr-2" size={20} />
                Donate Device
              </button>
              <button className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
                <Heart className="inline mr-2" size={20} />
                Contribute Funds
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              🌱 Our Vision: Tech Education for Rural India
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Breaking barriers in Bihar and beyond — building futures through accessible technology education
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <BookOpen className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Digital Skills</h3>
              <p className="text-gray-600">Comprehensive tech education programs preparing students for local employment and remote opportunities in the digital economy.</p>
            </div>

            <div className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Laptop className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Device Access</h3>
              <p className="text-gray-600">We refurbish and distribute any functioning digital device - laptops, desktops, mobile phones, keyboards, mice to students across rural Bihar.</p>
            </div>

            <div className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Local & Remote Jobs</h3>
              <p className="text-gray-600">Creating pathways to both local tech employment and remote work opportunities, enabling students to earn from their villages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How They Use Your Device Section */}
      <section className="section-padding bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              💡 How They Use Your Device?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the incredible journey your donated device takes - from a simple gadget to a powerful tool that transforms lives and communities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-blue-600" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">15+ Skills</h3>
                <p className="text-gray-600 text-sm">From coding to digital marketing, students learn multiple valuable skills using your device.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-green-600" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Impact</h3>
                <p className="text-gray-600 text-sm">Each student becomes a digital leader, teaching their family and neighbors.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-purple-600" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Lifelong Change</h3>
                <p className="text-gray-600 text-sm">Your device creates opportunities that last for generations.</p>
              </div>
            </div>

            <button 
              onClick={() => setShowDeviceUsage(true)}
              className="btn-primary text-lg px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              <Eye className="inline mr-2" size={20} />
              See Detailed Impact Journey
            </button>
            
            <p className="text-gray-600 mt-4 italic">
              "Every penny you donate is a breath of satisfaction"
            </p>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl">
                      <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Your Old Tech Can Transform Rural India
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In Bihar - India's most underprivileged state - 80% of students have never used a laptop. With your support, they gain digital skills, confidence, and access to global opportunities.
              </p>
            </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Safe Delivery Guaranteed</h3>
                  <p className="text-gray-600">We arrange local pickup or postal shipping. Your devices reach the right hands safely with full tracking.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">100% Transparent</h3>
                  <p className="text-gray-600">Every rupee goes to education, not admin. We publish monthly reports showing exactly how your donation was used.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Real Impact Stories</h3>
                  <p className="text-gray-600">Get regular updates with photos and videos of students using your donated devices to learn and grow.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <div className="border-t pt-3">
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">
                      {testimonial.age ? `Age ${testimonial.age}, ` : ''}{testimonial.role ? `${testimonial.role}, ` : ''}{testimonial.village}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              📦 3 Ways You Can Make a Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Laptop className="text-blue-600" size={36} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">📬 Donate Device</h3>
              <p className="text-gray-600 mb-6">Any functioning digital device - laptop, desktop, mobile phone, keyboard, mouse. We'll refurbish and deliver it to students who need it most.</p>
              <button className="btn-primary w-full">Donate Device</button>
            </div>

            <div className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <DollarSign className="text-green-600" size={36} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">💸 Monthly Support</h3>
              <p className="text-gray-600 mb-6">Become a monthly supporter with any amount you're comfortable with. Start with ₹100 or choose your own amount to make sustained impact.</p>
              <button className="btn-secondary w-full">Start Monthly Support</button>
            </div>

            <div className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <UserCheck className="text-purple-600" size={36} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">🧑‍🏫 Teach Online</h3>
              <p className="text-gray-600 mb-6">Dedicate 2-3 hours weekly to teach students remotely. Make a lasting impact with your expertise.</p>
              <button className="btn-primary w-full bg-purple-600 hover:bg-purple-700">Become a Teacher</button>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Volunteer Section */}
      <section className="section-padding bg-gradient-to-r from-purple-100 to-blue-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              🧑‍🏫 Become a World-Class Teacher for Rural Students
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our students in Bihar Rohtas center need dedicated teachers who can teach in Hindi or simple English. 
              Help bridge the education gap with just 2-3 hours of your time weekly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="card bg-white">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">What Our Students Need</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600"><strong>Technical Skills:</strong> Basic computer, coding (HTML, CSS, JavaScript), mobile app development, digital marketing</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600"><strong>Soft Skills:</strong> Communication, English conversation, presentation skills, problem-solving, teamwork</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600"><strong>Life Skills:</strong> Financial literacy, career guidance, interview preparation, entrepreneurship basics</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600"><strong>Language:</strong> Teaching in Hindi or simple English (students understand Hindi + basic English mix)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <h3 className="text-2xl font-semibold mb-4">What You Get as a Teacher</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-300" size={20} />
                    <span>Certificate of Recognition from our foundation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-300" size={20} />
                    <span>Tax compensation for your volunteer hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-300" size={20} />
                    <span>Your name featured on our website</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-300" size={20} />
                    <span>Direct impact stories from your students</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-300" size={20} />
                    <span>Flexible timing - teach from anywhere</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-300" size={20} />
                    <span>Professional development in rural education</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="btn-primary text-lg px-8 py-4 bg-purple-600 hover:bg-purple-700">
                  <UserCheck className="inline mr-2" size={20} />
                  Register as Teacher
                </button>
                <p className="text-sm text-gray-600 mt-3">Join 25+ teachers already making a difference</p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Current Teaching Center</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-blue-600" size={28} />
                </div>
                <h4 className="font-semibold text-gray-800">Location</h4>
                <p className="text-gray-600">Bihar Rohtas District</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-green-600" size={28} />
                </div>
                <h4 className="font-semibold text-gray-800">Active Students</h4>
                <p className="text-gray-600">45+ eager learners</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-purple-600" size={28} />
                </div>
                <h4 className="font-semibold text-gray-800">Teaching Mode</h4>
                <p className="text-gray-600">Online + In-person</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Donation Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              📱 How Device Donation Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 4-step process to get your device to students who need it most. We handle everything with minimal cost to you.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Phone className="text-blue-600" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">1. Contact Us</h3>
              <p className="text-gray-600 text-sm">Email or call us with device details. We'll guide you through the process and answer any questions.</p>
            </div>

            <div className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <MapPin className="text-green-600" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">2. Collection</h3>
              <p className="text-gray-600 text-sm">We arrange pickup from nearest collection center, volunteer pickup, or you can ship directly with minimal charges.</p>
            </div>

            <div className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <CheckCircle className="text-purple-600" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">3. Confirmation</h3>
              <p className="text-gray-600 text-sm">We confirm receipt, refurbish the device, and send you updates on which student received your donation.</p>
            </div>

            <div className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <Star className="text-yellow-600" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">4. Recognition</h3>
              <p className="text-gray-600 text-sm">Receive tax certificate, recognition certificate, and your name on our donor wall. Stay connected with impact stories.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Donate Your Device?</h3>
              <p className="text-gray-600 mb-6">Contact us directly to start the process. We make it easy and transparent.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg mb-4">
                  <Phone className="text-blue-600 mx-auto" size={32} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Call Us</h4>
                <p className="text-blue-600 font-medium">+91 98765 43210</p>
                <p className="text-gray-600 text-sm">9 AM - 6 PM, Mon-Sat</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-lg mb-4">
                  <Mail className="text-green-600 mx-auto" size={32} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Email Us</h4>
                <p className="text-green-600 font-medium">donate@rohtasrural.org</p>
                <p className="text-gray-600 text-sm">Response within 24 hours</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-lg mb-4">
                  <UserCheck className="text-purple-600 mx-auto" size={32} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">WhatsApp</h4>
                <p className="text-purple-600 font-medium">+91 98765 43210</p>
                <p className="text-gray-600 text-sm">Quick response & photos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Your Impact Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              📊 Every Donation is Accounted For
            </h2>
            <p className="text-xl text-blue-100">
              Real-time transparency in how your contributions create impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={36} className="text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
              <BarChart3 className="inline mr-2" size={20} />
              See Monthly Report
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Who Are We?</h2>
          </div>

          <div className="card max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-4xl font-bold">BR</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Story</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded by <strong>Bibhu Ranjan</strong>, a software engineer who grew up in rural Bihar and understands the transformative power of technology education. After witnessing the digital divide firsthand, Bibhu started this foundation to ensure no child is left behind in the digital revolution.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our grassroots approach focuses on sustainable impact - training local youth, building community partnerships, and ensuring every donated device reaches the right hands.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Trust Registration:</strong> Rohtas Rural Tech Foundation | Public Charitable Trust<br/>
                    <strong>80G Registration:</strong> Tax exemption available for donations above ₹500
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <button
                  className="w-full text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="text-gray-500 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500 flex-shrink-0" size={20} />
                  )}
                </button>
                {openFaq === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Now CTA */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Be the bridge that connects rural India to digital opportunities.
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Your device or monthly support today creates lifelong opportunities for students in Bihar and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition duration-300 text-lg">
              <Laptop className="inline mr-2" size={20} />
              Donate Device
            </button>
            <button className="bg-green-500 hover:bg-green-400 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 text-lg">
              <Heart className="inline mr-2" size={20} />
              Start Monthly Support
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">Rohtas Rural Tech Foundation</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Empowering rural children in Bihar through technology education and device accessibility. Every donation creates a lasting impact.
              </p>
              <div className="flex space-x-4">
                <Phone className="text-green-400" size={20} />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex space-x-4 mt-2">
                <Mail className="text-blue-400" size={20} />
                <span className="text-gray-300">contact@rohtasrural.org</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#donate" className="hover:text-white transition">Donate Device</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#impact" className="hover:text-white transition">Impact Report</a></li>
                <li><a href="#volunteer" className="hover:text-white transition">Volunteer</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition">WhatsApp</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Rohtas Rural Tech Foundation. All rights reserved. | Public Charitable Trust</p>
          </div>
        </div>
      </footer>

      {/* Device Usage Modal */}
      {showDeviceUsage && (
        <DeviceUsage onClose={() => setShowDeviceUsage(false)} />
      )}
    </div>
  );
};

export default LandingPage;
