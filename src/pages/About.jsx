import SectionCard from "../components/SectionCard";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const contact = t("about.contact", { returnObjects: true });
  const professionalExperience = t("about.professionalExperience", { returnObjects: true });
  const technicalSkills = t("about.technicalSkills", { returnObjects: true });
  const education = t("about.education", { returnObjects: true });
  const additionalInfo = t("about.additionalInfo", { returnObjects: true });

  return (
    <section id="about" className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">{t("about.title")}</h1>

        {/* Contact Info */}
        <div className="text-center mb-10 text-gray-700">
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <p>{contact.location}</p>
          <p className="mt-2 font-semibold">{contact.objective}</p>
        </div>

        {/* Professional Experience */}
        <SectionCard title={t("about.professionalExperienceTitle", "Professional Experience")} initialOpen={true}>
          <div className="space-y-6 border-l-2 border-gray-300 pl-4">
            {professionalExperience.map((exp, i) => (
              <div key={i}>
                <p className="font-semibold">{exp.date}</p>
                <p>
                  {exp.role} – <span className="font-semibold">{exp.company}</span>
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-600 mt-1">
                  {exp.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Technical Skills */}
        <SectionCard title={t("about.technicalSkillsTitle", "Technical Skills")}>
          <p><span className="font-semibold">{t("about.skills.languagesLabel", "Languages:")}</span> {technicalSkills.languages}</p>
          <p><span className="font-semibold">{t("about.skills.frameworksLabel", "Frameworks & Tools:")}</span> {technicalSkills.frameworks}</p>
          <p><span className="font-semibold">{t("about.skills.databasesLabel", "Databases:")}</span> {technicalSkills.databases}</p>
          <p><span className="font-semibold">{t("about.skills.environmentsLabel", "Environments:")}</span> {technicalSkills.environments}</p>
        </SectionCard>

        {/* Education */}
        <SectionCard title={t("about.educationTitle", "Education")}>
          <div className="space-y-6 border-l-2 border-gray-300 pl-4">
            {education.map((edu, i) => (
              <div key={i}>
                <p className="font-semibold">{edu.date}</p>
                <p>{edu.degree} – <span className="font-semibold">{edu.school}</span></p>
                <p className="text-sm text-gray-600">{edu.details}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Additional Information */}
        <SectionCard title={t("about.additionalInfoTitle", "Additional Information")}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p><span className="font-semibold">{t("about.additionalInfo.languagesLabel", "Languages:")}</span> {additionalInfo.languages}</p>
              <p><span className="font-semibold">{t("about.additionalInfo.certificationsLabel", "Certifications:")}</span> {additionalInfo.certifications}</p>
              <p><span className="font-semibold">{t("about.additionalInfo.softSkillsLabel", "Soft Skills:")}</span> {additionalInfo.softSkills}</p>
            </div>
            <div>
              <p><span className="font-semibold">{t("about.additionalInfo.interestsLabel", "Interests:")}</span></p>
              <ul className="list-disc pl-5">
                {additionalInfo.interests.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </SectionCard>
      </div>
    </section>
  );
}
