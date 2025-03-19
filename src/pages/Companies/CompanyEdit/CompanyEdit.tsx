import { useParams } from 'react-router-dom';
import { PathInformation } from '../../../components/molecules/PathInformation/PathInformation';
import { CompanyForm } from '../CompanyForm/CompanyForm';

export const CompanyEdit = () => {
  const { id } = useParams();
  const aaa = {
    nip: 123123123,
    name: '12asdasd',
    regon: 123123,
    pkd: '12asdasd',
    postalCode: '12asdasd',
    city: '12asdasd',
    street: '12asdasd',
    phoneNumber: 12312312,
    email: '12asdasd',
    notes: '12asdasd',
  };
  return (
    <div className="company__edit">
      <PathInformation
        style={{ marginBottom: '2rem' }}
        visibleSlash={true}
        paragraphText="Edycja firmy"
        linkText="Firmy"
        linkHref="/firmy"
      />
      <CompanyForm data={aaa} />
    </div>
  );
};
