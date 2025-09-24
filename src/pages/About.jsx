import SectionCard from "../components/SectionCard";

export default function About() {
  return (
    <section id="about" className="bg-white">
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

      {/* Contact Info */}
      <div className="text-center mb-10 text-gray-700">
        <p>📧 coralie.tadjifoue@gmail.com</p>
        <p>📞 +33 86 06 41 56</p>
        <p>📍 93230 Romainville, France</p>
        <p className="mt-2 font-semibold">
          Looking for a 6-month to one year internship in Software Development or Data Science
        </p>
      </div>

      {/* Professional Experience */}
      <SectionCard title="Professional Experience" initialOpen={true}>
        <div className="space-y-6 border-l-2 border-gray-300 pl-4">
          <div>
            <p className="font-semibold">Apr–Aug 2025</p>
            <p>Software Development Intern – <span className="font-semibold">SII, France</span></p>
            <ul className="list-disc pl-5 text-sm text-gray-600 mt-1">
              <li>Designed and implemented a C#/.NET tool for badge security management</li>
              <li>Created a user interface, integrated business rules and CI/CD pipelines</li>
              <li>Conducted user needs analysis and delivered technical documentation</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Jul 2023</p>
            <p>Data Analyst Intern – <span className="font-semibold">Ministry of Armed Forces (ACSIA, France)</span></p>
            <ul className="list-disc pl-5 text-sm text-gray-600 mt-1">
              <li>Maintained and updated SQL databases with focus on security and integrity</li>
              <li>Helped streamline administrative workflows</li>
            </ul>
            </div>
            <div>
            <p className="font-semibold">Sept 2024–Jan 2025</p>
            <p>Unpaid mission alongside classes– <span className="font-semibold">MC2i, France</span></p>
            <ul className="list-disc pl-5 text-sm text-gray-600 mt-1">
              <li>Currently developing an interactive executive dashboard (COMEX) integrating external data (market, environment, opinion, demographics)</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Technical Skills */}
      <SectionCard title="Technical Skills">
        <p><span className="font-semibold">Languages:</span> Python, R, C, Java, C#, JavaScript, HTML, CSS, SQL</p>
        <p><span className="font-semibold">Frameworks & Tools:</span> .NET, Tensorflow, Docker, Jenkins, Swagger, Hadoop, PowerBI</p>
        <p><span className="font-semibold">Databases:</span> SQLite, MySQL, MongoDB, Neo4j, Hive</p>
        <p><span className="font-semibold">Environments:</span> Visual Studio, Git, Linux</p>
      </SectionCard>

      {/* Education */}
      <SectionCard title="Education">
        <div className="space-y-6 border-l-2 border-gray-300 pl-4">
          <div>
            <p className="font-semibold">2021–2025</p>
            <p> Master’s in Computer Engineering – <span className="font-semibold">ESIEA, Ivry-sur-Seine</span></p>
            <p className="text-sm text-gray-600">Software Engineering, DevOps, Machine Learning, Cybersecurity</p>
          </div>
          <div>
            <p className="font-semibold">Jan–May 2024</p>
            <p>Exchange Semester – <span className="font-semibold">King Mongkut's University of Technology Thonburi, Bangkok, Thailand</span></p>
            <p className="text-sm text-gray-600">Courses: Machine Learning, Python, Tensorflow, PowerBI | TOEIC 975/990</p>
          </div>
          <div>
            <p className="font-semibold">2018–2020</p>
            <p>Preparatory Class (MP) – <span className="font-semibold">Lycee Chaptal, Paris</span></p>
            <p className="text-sm text-gray-600">Math-Physics specialization (intensive courses)</p>
          </div>
        </div>
      </SectionCard>

      {/* Additional Information */}
      <SectionCard title="Additional Information">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Column 1 */}
          <div>
            <p><span className="font-semibold">Languages:</span> French (native), English (fluent), German (basic)</p>
            <p><span className="font-semibold">Certifications:</span> TOEIC 975/990, FreeCodeCamp ML</p>
            <p><span className="font-semibold">Soft Skills:</span> Team spirit, Rigor, Organization, Autonomy, Agile</p>
          </div>
          {/* Column 2 */}
          <div>
            <p><span className="font-semibold">Interests:</span></p>
            <ul className="list-disc pl-5">
              <li>Piano</li>
              <li>Tennis</li>
              <li>Drawing</li>
              <li>Creative Writing</li>
            </ul>
          </div>
        </div>
      </SectionCard>
    </div>
    </section>
  );
}
