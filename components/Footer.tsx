import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LK Dog Training</h3>
            <p>Professional dog training services in Limerick. In-person and online courses available.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
              <li><Link href="/courses" className="hover:text-blue-400">Online Courses</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-400">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>123 Main Street, Limerick, Ireland</p>
            <p>Phone: +353 1 234 5678</p>
            <p>Email: info@lkdogtraining.com</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 LK Dog Training. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;