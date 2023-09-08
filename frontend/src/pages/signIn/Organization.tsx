import Section from "@/components/layouts/Section";
import SetUpOrgForm from "./components/SetUpOrgForm";

const Organization = () => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row py-28 md:py-40 items-center md:justify-between">
        <h1 className="md:w-1/2 text-center md:text-left">
          Setup your <span className="text-[#471AA0] ">organization</span>
        </h1>
        <SetUpOrgForm />
      </div>
    </Section>
  );
};

export default Organization;
