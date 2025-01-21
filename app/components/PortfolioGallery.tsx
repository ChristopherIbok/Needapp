import Image from "next/image";
import portfolioData from "../data/portfolio.json";
import Meta from "./Meta";

const PortfolioGallery = () => {
  return (
    <>
      {/* Meta Component for SEO */}
      <Meta
        title="Our Portfolio"
        description="Explore our stunning portfolio showcasing diverse projects that deliver results."
        keywords="portfolio, projects, web development, design, solutions"
        author="Your Company Name"
      />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Portfolio Header */}
          <div className="flex justify-center mb-4">
            <div className="tag">Portfolio</div>
          </div>
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Our Work</h2>
            <p className="section-description">
              Discover how we’ve helped businesses succeed through innovative
              solutions and exceptional designs.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
                {/* Project Image */}
                <div className="relative w-full h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Project Details */}
                  <div className="text-sm text-gray-700 space-y-2">
                    <p>
                      <strong>Client:</strong> {project.client}
                    </p>
                    <p>
                      <strong>Solution:</strong> {project.solution}
                    </p>
                    <p>
                      <strong>Result:</strong> {project.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioGallery;
