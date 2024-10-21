import { Paw, Video, Users } from 'lucide-react';

const services = [
  {
    title: 'In-Person Training',
    description: 'One-on-one sessions tailored to your dog\'s needs',
    icon: Paw,
  },
  {
    title: 'Online Courses',
    description: 'Learn at your own pace with our comprehensive video courses',
    icon: Video,
  },
  {
    title: 'Group Classes',
    description: 'Socialize your dog while learning essential skills',
    icon: Users,
  },
];

export default function Services() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <service.icon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}