const SocialLink = ({ href, icon: Icon, title, subtitle, bgColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
    >
      <div className={\`w-12 h-12 \${bgColor} rounded-full flex items-center justify-center\`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </a>
  );
};

export default SocialLink;