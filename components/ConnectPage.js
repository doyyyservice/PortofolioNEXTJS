import { MessageCircle, Mail, Instagram, Github, Linkedin } from 'lucide-react'
import SocialLink from './SocialLink'

const ConnectPage = () => {
  const phoneNumber = '6281234567890' // Ganti dengan nomor WhatsApp Anda
  const message = encodeURIComponent('Hello! I would like to discuss a project with you.')

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s Connect</h2>
        <p className="text-xl text-gray-600 mb-12">
          Have a project in mind? Let&apos;s work together to bring your ideas to life
        </p>
        
        <div className="space-y-6 mb-12">
          <SocialLink
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            icon={MessageCircle}
            title="WhatsApp"
            subtitle="+62 812-3456-7890"
            bgColor="bg-green-100 text-green-600"
          />

          <SocialLink
            href="mailto:your.email@example.com"
            icon={Mail}
            title="Email"
            subtitle="your.email@example.com"
            bgColor="bg-blue-100 text-blue-600"
          />

          <SocialLink
            href="https://instagram.com/yourusername"
            icon={Instagram}
            title="Instagram"
            subtitle="@yourusername"
            bgColor="bg-pink-100 text-pink-600"
          />

          <SocialLink
            href="https://github.com/yourusername"
            icon={Github}
            title="GitHub"
            subtitle="@yourusername"
            bgColor="bg-gray-100 text-gray-800"
          />

          <SocialLink
            href="https://linkedin.com/in/yourusername"
            icon={Linkedin}
            title="LinkedIn"
            subtitle="@yourusername"
            bgColor="bg-blue-100 text-blue-600"
          />
        </div>

        <div className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 text-center">
          <MessageCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Quick Message</h3>
          <p className="text-gray-600 mb-6">
            Click the button below to start a conversation on WhatsApp
          </p>
          <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default ConnectPage