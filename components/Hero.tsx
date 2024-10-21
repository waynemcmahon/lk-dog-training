import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
        alt="Happy dog with trainer"
        fill
        style={{ objectFit: 'cover' }}
        className="brightness-50"
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Transform Your Dog's Behavior</h1>
        <p className="text-xl md:text-2xl mb-8">Expert dog training services in Limerick</p>
        <Link href="/booking" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Book a Session
        </Link>
      </div>
    </div>
  );
}