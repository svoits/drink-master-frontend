import { Container } from "../../components/Container/Container.styled";
import PageTitle from "../../components/PageTitle/PageTitle";
import { MdOutlinePolicy } from 'react-icons/md';
import { TermsOfServiceNameInput } from "../TermsOfService/TermsOfService.styled";
import { PrivacyPolicyDescription, PrivacyPolicyList, PrivacyPolicySection, PrivacyPolicyTitle } from "./PrivacyPage.styled";


const PrivacyPolicy = () => {
    return(
        <PrivacyPolicySection>
            <Container>
                <PageTitle title="Privacy Policy" />
                <PrivacyPolicyTitle>Your privacy is important to us.</PrivacyPolicyTitle>
                <PrivacyPolicyDescription>
                    This section outlines how we collect, use, process, and protect your personal data. This Privacy Policy applies to the use of our website, applications, and services, so please take a moment to read it.
                </PrivacyPolicyDescription>
                <PrivacyPolicyList>
                    <li>
                        <TermsOfServiceNameInput> <MdOutlinePolicy size={20}/> What personal data do we collect:</TermsOfServiceNameInput>
                        <PrivacyPolicyDescription>
                            We may collect various types of personal data that you voluntarily provide when interacting with our website, registering an account or filling out forms. This may include your name, email address, phone number and more.
                        </PrivacyPolicyDescription>
                    </li>
                    <li>
                        <TermsOfServiceNameInput><MdOutlinePolicy size={20}/>How we use your personal data:</TermsOfServiceNameInput>
                        <PrivacyPolicyDescription>
                            We use the collected personal data to provide services, manage your account, provide you with information about our products and services, and to communicate with you regarding inquiries and updates.
                        </PrivacyPolicyDescription>
                    </li>
                    <li>
                        <TermsOfServiceNameInput><MdOutlinePolicy size={20}/>Protection of personal data:</TermsOfServiceNameInput>
                        <PrivacyPolicyDescription>
                            We take every effort to protect your information and use modern technologies to prevent unauthorized access, loss, or disclosure of your personal information.
                        </PrivacyPolicyDescription>
                    </li>
                    <li>
                        <TermsOfServiceNameInput><MdOutlinePolicy size={20}/>Disclosure to third parties:</TermsOfServiceNameInput>
                        <PrivacyPolicyDescription>
                            We do not disclose your personal data to third parties without your consent, except when required by law or to provide the services you requested.
                        </PrivacyPolicyDescription>
                    </li>
                    <li>
                        <TermsOfServiceNameInput><MdOutlinePolicy size={20}/>Changes to the Privacy Policy:</TermsOfServiceNameInput>
                        <PrivacyPolicyDescription>
                            We may periodically update this Privacy Policy. Please refer to this page to stay informed about any changes.
                        </PrivacyPolicyDescription>
                    </li>
                    <li>
                        <TermsOfServiceNameInput><MdOutlinePolicy size={20}/>Contact us:</TermsOfServiceNameInput>
                        <PrivacyPolicyDescription>
                            If you have any questions or concerns regarding this Privacy Policy or your information, please contact us using the contact details provided on our website.
                        </PrivacyPolicyDescription>
                    </li>
                </PrivacyPolicyList>
            </Container>
        </PrivacyPolicySection>
    )
};

export default PrivacyPolicy;