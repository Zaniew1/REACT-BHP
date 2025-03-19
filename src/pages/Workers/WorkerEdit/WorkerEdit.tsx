import { PathInformation } from '../../../components/molecules/PathInformation/PathInformation';
import { WorkerForm } from '../WorkerForm/WorkerForm';
import { useParams } from 'react-router-dom';

export const WorkerEdit = () => {
  const { id } = useParams();
  const aaa = {
    name: 'asda',
    surname: 'asda',
    secondName: 'asda',
    sex: 'men',
    trainingEntry: new Date(),
    trainingPeriodic: new Date(),
    medicalExamination: new Date(),
    department: '',
    employmentForm: '1',
    absence: '',
    pesel: 123123123123,
    IdCardNumber: 'asda',
    dateOfBirth: new Date(),
    placeOfBirth: 'asda',
    disability: false,
    postalCode: 'asda',
    city: 'asda',
    street: 'asda',
    phoneNumber: 123123123,
    email: 'asda',
    position: 'asda',
    positionType: 'asda',
    positionSection: 'asda',
    positionNotes: 'asda',
    youth: false,
    nightShift: false,
    notes: 'asda',
  };
  return (
    <div className="worker__edit">
      <PathInformation
        style={{ marginBottom: '2rem' }}
        visibleSlash={true}
        paragraphText="Edycja pracownika"
        linkText="Pracownicy"
        linkHref="/pracownicy"
      />
      <WorkerForm data={aaa} />
    </div>
  );
};
