import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Dog's Behavior?</h2>
        <p className="text-xl mb-8">Book a session or explore our online courses today!</p>
        <div className="space-x-4">
          <Link href="/booking" className="bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Book a Session
          </Link>
          <Link href="/courses" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
            View Online Courses
          </Link>
        </div>
      </div>
    </section>
  );
}