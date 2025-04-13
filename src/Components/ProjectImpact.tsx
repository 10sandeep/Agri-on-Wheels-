import React from "react";
import { Users, MapPin, BarChart3, BookOpen } from "lucide-react";

// Define the type for each metric item
interface Metric {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const ProjectImpact: React.FC = () => {
  // Define the metrics data
  const metrics: Metric[] = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "20",
      label: "Farmers Trained",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      value: "1",
      label: "Month Program",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      value: "100%",
      label: "Hands-on Training",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      value: "5+",
      label: "Training Modules",
    },
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Project Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <div className="text-green-600 flex justify-center mb-4">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <div className="text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectImpact;
