import React, { useState } from 'react';
import { 
  Heart, 
  Laptop, 
  Users, 
  MapPin, 
  CheckCircle,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Star,
  BookOpen,
  Eye,
  X,
  MessageCircle,
  Gift,
  GraduationCap,
  Building,
} from 'lucide-react';
import DeviceUsage from './DeviceUsage';

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [showDeviceUsage, setShowDeviceUsage] = useState(false);
  const [showPopup, setShowPopup] = useState({ isOpen: false, type: '' });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919155818219', '_blank');
  };

  const openPopupCard = (type) => {
    setShowPopup({ isOpen: true, type });
  };

  const closePopup = () => {
    setShowPopup({ isOpen: false, type: '' });
  };

  const stats = [
    { label: "Devices Donated", value: "132", icon: Laptop },
    { label: "Children Helped", value: "540+", icon: Users },
    { label: "Villages Reached", value: "9", icon: MapPin }
  ];

  const faqs = [
    {
      question: "How can I donate my old device?",
      answer: "Simply contact us through WhatsApp or email. We will guide you through the simple process of donating your device. We accept laptops, tablets, smartphones, and other digital devices in working condition."
    },
    {
      question: "Is my donation tax deductible?",
      answer: "Yes, Navpravaah Foundation is a registered trust. We provide tax exemption certificates for all donations. Our registration details are available upon request."
    },
    {
      question: "How do you ensure devices reach the right children?",
      answer: "We have a network of local volunteers and partners. We personally visit each location to ensure safe delivery and provide initial training to children and their families."
    },
    {
      question: "Can I volunteer as a teacher even if I don't speak Hindi?",
      answer: "Yes! Many of our children understand basic English. You can teach in simple English, and we provide translation support when needed. Your patience and willingness to help matters most."
    },
    {
      question: "What subjects can I teach as a volunteer?",
      answer: "We need volunteers for computer basics, coding, digital literacy, English communication, and life skills. Even basic computer knowledge can make a huge difference in a child's life."
    },
    {
      question: "Can I visit the children or only teach online?",
      answer: "Both options are available! You can teach online from anywhere, or visit our centers in person. Many volunteers start with online sessions and later visit to meet the children they've been helping."
    }
  ];

  const testimonials = [
    {
      name: "Priya Kumari",
      age: 14,
      village: "Rural Bihar",
      quote: "I never thought I could learn computers in my village. Now I'm learning coding and dream of helping other children like me!",
      rating: 5
    },
    {
      name: "Ramesh Singh",
      role: "Parent",
      village: "Village Parent",
      quote: "My daughter now teaches me about computers. This program has opened doors we never knew existed for our children. We are so grateful.",
      rating: 5
    },
    {
      name: "Anjali Sharma",
      role: "Volunteer Teacher",
      village: "Online Volunteer",
      quote: "Teaching these children has been the most rewarding experience of my life. Their eagerness to learn despite challenges is truly inspiring.",
      rating: 5
    }
  ];

  const PopupCard = ({ type, onClose }) => {
    const getPopupContent = () => {
      switch (type) {
        case 'donate':
          return {
            title: '🎁 Donate Your Device',
            content: (
              <div className="space-y-4">
                <p className="text-gray-600">Help a child access education by donating your unused device. Every device makes a difference!</p>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <p className="text-sm text-orange-800">
                    <strong>Online donation system coming soon!</strong> For now, please contact us directly.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-green-600" size={20} />
                    <span>+919155818219</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-600" size={20} />
                    <span>contactnavpravaah@gmail.com</span>
                  </div>
                </div>
              </div>
            )
          };
        case 'support':
          return {
            title: '💝 Start Monthly Support',
            content: (
              <div className="space-y-4">
                <p className="text-gray-600">Become a monthly supporter and help us reach more children consistently. Your regular support creates lasting impact!</p>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <p className="text-sm text-orange-800">
                    <strong>Online donation system coming soon!</strong> For now, please contact us to set up monthly support.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-green-600" size={20} />
                    <span>+919155818219</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-600" size={20} />
                    <span>contactnavpravaah@gmail.com</span>
                  </div>
                </div>
              </div>
            )
          };
        case 'teacher':
          return {
            title: '👩‍🏫 Become a Teacher',
            content: (
              <div className="space-y-4">
                <p className="text-gray-600">Share your knowledge and skills with children who need it most. Join our community of volunteer teachers!</p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">What we need:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Computer basics & digital literacy</li>
                    <li>• English conversation</li>
                    <li>• Basic coding & programming</li>
                    <li>• Life skills & career guidance</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-green-600" size={20} />
                    <span>+919155818219</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-600" size={20} />
                    <span>contactnavpravaah@gmail.com</span>
                  </div>
                </div>
              </div>
            )
          };
        default:
          return { title: '', content: null };
      }
    };

    const { title, content } = getPopupContent();

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
          <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
          {content}
          <div className="mt-6 flex space-x-3">
            <button
              onClick={openWhatsApp}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
            >
              <MessageCircle className="mr-2" size={18} />
              WhatsApp Chat
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Navpravaah Foundation
              </h1>
              <p className="text-lg text-orange-100 mb-4">नवप्रवाह - A New Flow of Hope</p>
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 leading-tight">
              Transforming Lives Through Education & Technology
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
              Join us in bringing hope, education, and opportunities to children in rural India. 
              Your kindness can change a child's future forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => openPopupCard('donate')}
                className="bg-white text-orange-600 font-semibold text-lg px-8 py-4 rounded-lg hover:bg-orange-50 transition duration-300 shadow-lg w-full sm:w-auto"
              >
                <Gift className="inline mr-2" size={20} />
                Donate Device
              </button>
              <button 
                onClick={() => openPopupCard('support')}
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg px-8 py-4 rounded-lg transition duration-300 shadow-lg w-full sm:w-auto"
              >
                <Heart className="inline mr-2" size={20} />
                Monthly Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              🌱 Our Mission: Education for Every Child
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Breaking barriers and building futures through accessible education and technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Quality Education</h3>
              <p className="text-gray-600">Providing comprehensive education programs that prepare children for a brighter future with modern skills and traditional values.</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laptop className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Technology Access</h3>
              <p className="text-gray-600">Bridging the digital divide by providing refurbished devices and technology training to children in underserved communities.</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Community Empowerment</h3>
              <p className="text-gray-600">Building stronger communities by educating children who become leaders and change-makers in their villages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How They Use Your Device Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              💡 How Your Donation Creates Magic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the incredible journey your kindness takes - from a simple gesture to a life-changing opportunity for a child.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-orange-100">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-orange-600" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Education Access</h3>
                <p className="text-gray-600 text-sm">Your device becomes a gateway to knowledge, helping children learn and grow beyond their circumstances.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border border-blue-100">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-blue-600" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Family Impact</h3>
                <p className="text-gray-600 text-sm">Each child becomes a teacher to their family, spreading digital literacy throughout their community.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border border-green-100">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-green-600" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Lasting Hope</h3>
                <p className="text-gray-600 text-sm">Your kindness creates opportunities that last for generations, building a better tomorrow.</p>
              </div>
            </div>

            <button 
              onClick={() => setShowDeviceUsage(true)}
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold text-lg px-8 py-4 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Eye className="inline mr-2" size={20} />
              See Our Impact Stories
            </button>
            
            <p className="text-gray-600 mt-4 italic">
              "Every act of kindness creates ripples of hope"
            </p>
          </div>
        </div>
      </section>

      {/* Why Support Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Your Support Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In rural India, many children have never seen a computer. With your support, they gain access to education, confidence, and hope for a better future.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">100% Transparent</h3>
                  <p className="text-gray-600">Every donation reaches the children directly. We maintain complete transparency in how your contributions are used.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Safe & Secure</h3>
                  <p className="text-gray-600">We ensure your donated devices reach the right children safely with proper tracking and delivery confirmation.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Real Impact Updates</h3>
                  <p className="text-gray-600">Get regular updates with photos and stories of children whose lives you've touched through your kindness.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              🤝 Three Ways to Make a Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="text-orange-600" size={36} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">🎁 Donate Device</h3>
              <p className="text-gray-600 mb-6">Give your unused laptop, tablet, or smartphone a new purpose. Help a child access the world of learning and possibilities.</p>
              <button 
                onClick={() => openPopupCard('donate')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 w-full"
              >
                Donate Now
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-100 hover:border-green-300">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-green-600" size={36} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">💝 Monthly Support</h3>
              <p className="text-gray-600 mb-6">Become a regular supporter and help us reach more children consistently. Every small contribution makes a big difference.</p>
              <button 
                onClick={() => openPopupCard('support')}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 w-full"
              >
                Start Supporting
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="text-blue-600" size={36} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">👩‍🏫 Teach Children</h3>
              <p className="text-gray-600 mb-6">Share your knowledge and skills with eager young minds. Dedicate 2-3 hours weekly to change lives through education.</p>
              <button 
                onClick={() => openPopupCard('teacher')}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 w-full"
              >
                Become Teacher
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Trust Info Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-pink-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              📞 Get in Touch with Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? Want to help? We're here to connect with kind hearts like yours.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone & WhatsApp</h4>
                    <p className="text-green-600 font-medium">+919155818219</p>
                    <p className="text-gray-600 text-sm">Available 9 AM - 8 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-blue-600 font-medium">contactnavpravaah@gmail.com</p>
                    <p className="text-gray-600 text-sm">Response within 24 hours</p>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400 mt-4">
                  <p className="text-sm text-orange-800">
                    <strong>Online donation system coming soon!</strong> For now, please contact us directly for all donations and support.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Foundation</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Building className="text-orange-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Navpravaah Foundation</h4>
                    <p className="text-gray-600">A registered trust dedicated to child education and community development</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Our Commitment</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 100% transparent use of donations</li>
                    <li>• Regular impact updates to donors</li>
                    <li>• Tax exemption certificates provided</li>
                    <li>• Direct community engagement</li>
                  </ul>
                </div>

                <div className="text-center mt-6">
                  <button
                    onClick={openWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
                  >
                    <MessageCircle className="inline mr-2" size={20} />
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-600 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              📊 Lives We've Touched Together
            </h2>
            <p className="text-xl text-orange-100">
              Real impact created through the kindness of amazing people like you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={36} className="text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-orange-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-orange-100 mb-4">
              "Together, we're creating waves of positive change across rural India"
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-orange-100 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-4xl font-bold">NF</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Navpravaah Foundation</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Navpravaah means "new flow" - representing our mission to create a new flow of hope, education, and opportunities in the lives of underprivileged children. Founded with the belief that every child deserves access to quality education regardless of their circumstances.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our grassroots approach focuses on sustainable impact - working directly with communities, training local volunteers, and ensuring every contribution creates lasting change in a child's life.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <p className="text-sm text-orange-800">
                    <strong>Registered Trust:</strong> Navpravaah Foundation | Committed to Transparency<br/>
                    <strong>Mission:</strong> Education, empowerment, and hope for every child
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
                <button
                  className="w-full text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="text-orange-500 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-orange-500 flex-shrink-0" size={20} />
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

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Be the Change You Want to See
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Your kindness today can transform a child's tomorrow. Join us in creating a brighter future for children who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openPopupCard('donate')}
              className="bg-white text-green-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition duration-300 text-lg shadow-lg"
            >
                             <Gift className="inline mr-2" size={20} />
               Donate Device
            </button>
            <button 
              onClick={() => openPopupCard('support')}
              className="bg-green-500 hover:bg-green-400 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 text-lg shadow-lg"
            >
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
              <h3 className="text-2xl font-bold mb-4">Navpravaah Foundation</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Creating new flows of hope and opportunity for children through education and technology access. Every child deserves a chance to shine.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="text-green-400" size={18} />
                  <span className="text-gray-300">+919155818219</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-400" size={18} />
                  <span className="text-gray-300">contactnavpravaah@gmail.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => openPopupCard('donate')} className="hover:text-white transition">Donate Device</button></li>
                <li><button onClick={() => openPopupCard('support')} className="hover:text-white transition">Monthly Support</button></li>
                <li><button onClick={() => openPopupCard('teacher')} className="hover:text-white transition">Become Teacher</button></li>
                <li><button onClick={openWhatsApp} className="hover:text-white transition">WhatsApp Chat</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={openWhatsApp} className="hover:text-white transition">WhatsApp</button></li>
                <li><a href="mailto:contactnavpravaah@gmail.com" className="hover:text-white transition">Email</a></li>
                <li><a href="tel:+919155818219" className="hover:text-white transition">Call Us</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Navpravaah Foundation. All rights reserved. | Spreading Hope Through Education</p>
          </div>
        </div>
      </footer>

      {/* Device Usage Modal */}
      {showDeviceUsage && (
        <DeviceUsage onClose={() => setShowDeviceUsage(false)} />
      )}

      {/* Popup Card */}
      {showPopup.isOpen && (
        <PopupCard type={showPopup.type} onClose={closePopup} />
      )}
    </div>
  );
};

export default LandingPage;
