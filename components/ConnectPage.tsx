import { MessageCircle, Mail, Instagram, Github } from 'lucide-react';
import SocialLink from './SocialLink';

const ConnectPage = () => {
  const phoneNumber = '62888211140720';
  const message = encodeURIComponent('Hello! I would like to discuss a project with you.');

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
        <p className="text-xl text-gray-600 mb-12">
          Have a project in mind? Let's work together to bring your ideas to life
        </p>
        
        <div className="space-y-6 mb-12">
          {/* WhatsApp */}
          <SocialLink
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            icon={MessageCircle}
            title="WhatsApp"
            subtitle="+62 882-1114-0720"
            bgColor="bg-green-100 text-green-600"
          />

          {/* Email */}
          <SocialLink
            href="mailto:ridho.rama976@gmail.com"
            icon={Mail}
            title="Email"
            subtitle="ridho.rama976@gmail.com"
            bgColor="bg-blue-100 text-blue-600"
          />

          {/* Instagram */}
          <SocialLink
            href="https://instagram.com/ddoyys"
            icon={Instagram}
            title="Instagram"
            bgColor="bg-pink-100 text-pink-600"
          />

          {/* GitHub */}
          <SocialLink
            href="https://github.com/ddoyys"
            icon={Github}
            title="GitHub"
            subtitle="@yddoyys"
            bgColor="bg-gray-100 text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
