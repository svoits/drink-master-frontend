import { Container } from "../../components/Container/Container.styled";
import PageTitle from "../../components/PageTitle/PageTitle";
import { PrivacyPolicySection } from "./PrivacyPage.styled";


const PrivacyPolicy = () => {
    return(
        <PrivacyPolicySection>
            <Container>
                <PageTitle title="Privacy Policy" />
                <h2>Your privacy is important to us.</h2>
                <h3>
                    This section outlines how we collect, use, process, and protect your personal data. This Privacy Policy applies to the use of our website, applications, and services, so please take a moment to read it.
                </h3>
                <ul>
                    <li>
                        <h3>What personal data do we collect:</h3>
                        <p>
                            We may collect various types of personal data that you voluntarily provide when interacting with our website, registering an account or filling out forms. This may include your name, email address, phone number and more.
                        </p>
                    </li>
                    <li>
                        <h3>How we use your personal data:</h3>
                        <p>
                            We use the collected personal data to provide services, manage your account, provide you with information about our products and services, and to communicate with you regarding inquiries and updates.
                        </p>
                    </li>
                    <li>
                        <h3>Protection of personal data:</h3>
                        <p>
                            We take every effort to protect your information and use modern technologies to prevent unauthorized access, loss, or disclosure of your personal information.
                        </p>
                    </li>
                    <li>
                        <h3>Disclosure to third parties:</h3>
                        <p>
                            We do not disclose your personal data to third parties without your consent, except when required by law or to provide the services you requested.
                        </p>
                    </li>
                    <li>
                        <h3>Changes to the Privacy Policy:</h3>
                        <p>
                            We may periodically update this Privacy Policy. Please refer to this page to stay informed about any changes.
                        </p>
                    </li>
                    <li>
                        <h3>Contact us:</h3>
                        <p>
                            If you have any questions or concerns regarding this Privacy Policy or your information, please contact us using the contact details provided on our website.
                        </p>
                    </li>
                </ul>
            </Container>
        </PrivacyPolicySection>
    )
};

export default PrivacyPolicy;