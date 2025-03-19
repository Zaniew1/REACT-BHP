import { PathInformation } from '../../../components/molecules/PathInformation/PathInformation';
import { WorkerForm } from '../WorkerForm/WorkerForm';
export const WorkerAdd = () => {
  return (
    <div className="worker__edit">
      <PathInformation
        style={{ marginBottom: '2rem' }}
        visibleSlash={true}
        paragraphText="Dodanie pracownika"
        linkText="Pracownicy"
        linkHref="/pracownicy"
      />
      <WorkerForm />
    </div>
  );
};
