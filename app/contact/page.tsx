import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import { FiMail, FiPhone, FiMapPin, FiGithub } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <>
      <Header />
      <section className="w-full px-6 py-16 bg-gradient-to-tr text-white min-h-screen">
        <div className="max-w-4xl mx-auto grid gap-16 md:grid-cols-2 items-start">
          {/* Contact Details */}
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-lime-400 drop-shadow-lg">
              Get in Touch
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Feel free to reach out to me through the form or directly using the details below.
            </p>
            <ul className="space-y-5 text-gray-300">
              <li className="flex items-center space-x-3 hover:text-lime-400 transition-colors duration-300">
                <FiMail className="w-6 h-6 text-lime-400" />
                <a
                  href="mailto:mybhakar1389@gmail.com"
                  className="underline hover:no-underline"
                >
                  mybhakar1389@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 hover:text-lime-400 transition-colors duration-300">
                <FiPhone className="w-6 h-6 text-lime-400" />
                <a href="tel:+911234567890" className="underline hover:no-underline">
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center space-x-3 hover:text-lime-400 transition-colors duration-300">
                <FiGithub className="w-6 h-6 text-lime-400" />
                <a
                  href="https://github.com/B-Acharekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  B-Acharekar
                </a>
              </li>
              <li className="flex items-center space-x-3 text-lime-300">
                <FiMapPin className="w-6 h-6" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
