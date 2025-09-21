import API_Development from "@/components/API_Development";
import Servicecard from "@/components/Servicecard";
import TrustedbyComponents from "./../components/TrustedbyComponents";
import ProfileHighlight from "./../components/ProfileHighlight";
import DevolopmentServices from "./../components/DevolopmentServices";
import Benifitofdevoutsoucing from "./../components/Benifitofdevoutsoucing";
import DevelopmentWorkflow from "@/components/DevelopmentWorkflow";
import AdvancedTech from "./../components/Technology";
import ProjectPortfolio from "./../components/ProjectPortfolio";
import ClientTestimonialSlider from "./../components/ClientsTestimonials";
export default function OutsourcingServices() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-8">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 min-h-[80vh]">
        <div className="flex flex-col justify-center items-center text-center p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-snug">
            Software <br />
            Development <br />
            Outsourcing Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Expand your capabilities by hiring our expert developers. We deliver
            top-notch software outsourcing solutions tailored to your needs
            while saving your time and resources.
          </p>
        </div>

        {/* Rotating Circle */}
        <div className="flex justify-center items-center">
          <API_Development />
        </div>
      </div>

      {/* Service Cards */}
      <div className="mt-16">
        <Servicecard />
      </div>

      {/* Trusted By Section */}
      <div className="mt-16">
        <TrustedbyComponents />
      </div>

      {/* Profile Section */}
      <ProfileHighlight />

      {/* Development Services */}
      <h2 className="font-bold mt-12 text-3xl text-center">
        Software Development Services
      </h2>
      <DevolopmentServices />

      {/* Benefits Of Software Development Outsourcing */}

      <Benifitofdevoutsoucing />

      {/*  */}
      <DevelopmentWorkflow />

      {/*  */}
      <AdvancedTech />

      {/*  */}
      <ProjectPortfolio />
      {/*  */}

      <ClientTestimonialSlider />
    </div>
  );
}
