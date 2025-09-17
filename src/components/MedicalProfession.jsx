import ContactForm from "../../../Hook/src/components/Contact";
import Footer from "../../../Hook/src/components/Footer";
import Groth from "../../../Hook/src/components/Groth";
import GrowthFAQ from "../../../Hook/src/components/GrothFAQ";
import ClinicPromo from "../../../Hook/src/components/Home";
import Include from "../../../Hook/src/components/Include";
import Page from "../../../Hook/src/components/Page";
import Results from "../../../Hook/src/components/Result";
import SideShow from "../../../Hook/src/components/SideShow";
import Testimonial from "../../../Hook/src/components/Testimonials";

function MedicalProfession() {
    return (
        <div>
            <ClinicPromo />
            <Page />
            <Groth />
            <Include />
            <Testimonial />
            <SideShow />
            <Results />

            <GrowthFAQ />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default MedicalProfession;
