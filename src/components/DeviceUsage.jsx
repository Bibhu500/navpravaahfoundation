import React from 'react';
import { 
  Code, 
  Wrench, 
  Palette, 
  Lightbulb, 
  MessageCircle,
  Video,
  Heart,
  TrendingUp,
  Cpu,
  DollarSign,
  Megaphone,
  X,
  Play,
  Users,
  BookOpen,
  Globe,
  Zap
} from 'lucide-react';

const DeviceUsage = ({ onClose }) => {
  const usageCategories = [
    {
      category: "Technical Skills",
      icon: Code,
      color: "blue",
      skills: [
        {
          name: "Coding & Programming",
          description: "HTML, CSS, JavaScript, Python - building websites and basic applications",
          icon: Code,
          example: "Building their first personal website in Hindi and English"
        },
        {
          name: "System Design",
          description: "Understanding computer architecture, troubleshooting, and optimization",
          icon: Cpu,
          example: "Learning how computers work and fixing common software issues"
        },
        {
          name: "Device Repairing",
          description: "Hardware troubleshooting, component replacement, and basic electronics",
          icon: Wrench,
          example: "Fixing laptops and phones for their community, creating local employment"
        }
      ]
    },
    {
      category: "Digital Marketing & Communication",
      icon: Megaphone,
      color: "green",
      skills: [
        {
          name: "Digital Marketing",
          description: "Social media marketing, content creation, and online brand building",
          icon: TrendingUp,
          example: "Promoting local businesses online and creating digital campaigns"
        },
        {
          name: "Educational Reels",
          description: "Creating engaging educational content in Hindi for rural communities",
          icon: Video,
          example: "Making videos to teach other villagers about health, agriculture, and technology"
        },
        {
          name: "Communication Skills",
          description: "English conversation, presentation skills, and professional communication",
          icon: MessageCircle,
          example: "Preparing for job interviews and client interactions"
        }
      ]
    },
    {
      category: "Creative & Problem Solving",
      icon: Palette,
      color: "purple",
      skills: [
        {
          name: "Product Design",
          description: "UI/UX design, graphic design, and digital product development",
          icon: Palette,
          example: "Designing mobile apps to solve local problems like crop monitoring"
        },
        {
          name: "Problem Solving",
          description: "Analytical thinking, project management, and innovative solutions",
          icon: Lightbulb,
          example: "Creating digital solutions for local challenges like water management"
        },
        {
          name: "Educational Content",
          description: "Creating learning materials and tutorials for rural education",
          icon: BookOpen,
          example: "Developing learning apps in Hindi for primary school children"
        }
      ]
    },
    {
      category: "Entrepreneurship & Finance",
      icon: DollarSign,
      color: "orange",
      skills: [
        {
          name: "Entrepreneurship",
          description: "Business planning, startup development, and digital business models",
          icon: TrendingUp,
          example: "Starting online businesses selling local products globally"
        },
        {
          name: "Financial Literacy",
          description: "Digital payments, online banking, and financial planning",
          icon: DollarSign,
          example: "Managing finances digitally and understanding investment basics"
        },
        {
          name: "E-commerce & Marketing",
          description: "Online selling, customer engagement, and digital marketplace management",
          icon: Globe,
          example: "Setting up online stores for local handicrafts and agricultural products"
        }
      ]
    },
    {
      category: "Community Impact",
      icon: Heart,
      color: "red",
      skills: [
        {
          name: "Helping Others",
          description: "Teaching digital skills to community members and family",
          icon: Users,
          example: "Teaching parents and neighbors how to use smartphones and internet banking"
        },
        {
          name: "Local Tech Support",
          description: "Becoming the go-to tech person in their village",
          icon: Zap,
          example: "Helping local businesses go digital and solving tech problems"
        },
        {
          name: "Educational Leadership",
          description: "Mentoring younger students and spreading digital literacy",
          icon: Play,
          example: "Running computer classes for primary school children in their area"
        }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
        gradient: "from-blue-500 to-blue-600"
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-200",
        gradient: "from-green-500 to-green-600"
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-200",
        gradient: "from-purple-500 to-purple-600"
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        border: "border-orange-200",
        gradient: "from-orange-500 to-orange-600"
      },
      red: {
        bg: "bg-red-100",
        text: "text-red-600",
        border: "border-red-200",
        gradient: "from-red-500 to-red-600"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-6 rounded-t-xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                📱 How They Use Your Device
              </h2>
              <p className="text-gray-600">
                Every donated device becomes a gateway to multiple skills and opportunities
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-12">
            {usageCategories.map((category, categoryIndex) => {
              const colorClasses = getColorClasses(category.color);
              return (
                <div key={categoryIndex} className="space-y-6">
                  {/* Category Header */}
                  <div className="text-center">
                    <div className={`inline-flex items-center space-x-3 bg-gradient-to-r ${colorClasses.gradient} text-white px-6 py-3 rounded-full`}>
                      <category.icon size={24} />
                      <h3 className="text-xl font-semibold">{category.category}</h3>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className={`card border-2 ${colorClasses.border} hover:shadow-xl transition-all duration-300`}>
                        <div className={`${colorClasses.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                          <skill.icon className={colorClasses.text} size={28} />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 text-center">{skill.name}</h4>
                        <p className="text-gray-600 mb-4 text-center">{skill.description}</p>
                        <div className={`${colorClasses.bg} p-3 rounded-lg border-l-4 ${colorClasses.border}`}>
                          <p className="text-sm text-gray-700">
                            <strong>Real Example:</strong> {skill.example}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Impact Statement */}
          <div className="mt-16 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-xl p-8 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="bg-white bg-opacity-30 w-20 h-20 rounded-full flex items-center justify-center border-2 border-white border-opacity-40">
                  <Heart className="text-pink-100" size={36} />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">Every Device Creates Multiple Opportunities</h3>
              <p className="text-xl mb-6 text-orange-100">
                Your single donation enables a student to learn 10+ different skills, help their entire community, 
                and become a digital leader in rural India.
              </p>
              <div className="bg-white bg-opacity-25 p-6 rounded-lg border border-white border-opacity-30">
                <p className="text-2xl font-semibold mb-2 text-white">
                  "Every act of kindness creates ripples of hope"
                </p>
                <p className="text-orange-100">
                  Knowing that your device is empowering an entire generation of rural children to dream bigger and achieve more.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">10+</div>
              <div className="text-gray-600">Skills per Student</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">5+</div>
              <div className="text-gray-600">Family Members Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">50+</div>
              <div className="text-gray-600">Community Impact</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">∞</div>
              <div className="text-gray-600">Generational Impact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceUsage;