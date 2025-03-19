import { PathInformation } from '../../../components/molecules/PathInformation/PathInformation';
import { CompanyForm } from '../CompanyForm/CompanyForm';

export const CompanyAdd = () => {
  return (
    <div className="company__edit">
      <PathInformation
        style={{ marginBottom: '2rem' }}
        visibleSlash={true}
        paragraphText="Dodanie firmy"
        linkText="Firmy"
        linkHref="/firmy"
      />
      <CompanyForm />
    </div>
  );
};
