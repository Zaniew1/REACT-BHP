import { DataTable } from '../../../components/organisms/Table/DataTable';
import { Plus, Trash2, HardDriveDownload, HardDriveUpload, Settings } from 'lucide-react';
import { InputText } from '../../../components/molecules/Input/Text/InputText';
import { Button } from '../../../components/atoms/Button/Button';
import { ButtonDropDown } from '../../../components/molecules/ButtonDropDown/ButtonDropDown';
import { useEffect, useState } from 'react';
import { DropDownExport } from '../../../components/molecules/ButtonDropDown/DropDownExport';
import { CompanyColumnsType, CompanyListColumnsSwitch } from './CompanyListColumnsSwitch';
import { columns} from './CompanyListData';
import { Link } from '../../../components/atoms/Link/Link';
import useAxios from '../../../hooks/useAxios';
export type CompanyType = {
  id: string;
  name: string;
  adress: string;
  nip: number;
  coworkers: boolean;
};

function deleteCompany(){
  
}
export const CompaniesList = () => {
  const {response, error, loading, fetchData} =  useAxios();

  const [searchText, setSearchText] = useState<string>('');
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [showColumns, setShowColumns] = useState<CompanyColumnsType>({
    name: true,
    adress: true,
    nip: true,
  });
    const getCompanies = async () =>{
      return await fetchData({
        url: '/company',
        method: "GET",
      })
    }
    useEffect(()=>{
      getCompanies()
    },[])
    function deleteCompanies(ids: number[]){
      console.log(ids)
      ids.forEach(async (id:number)=>{
         await fetchData({
              url: '/company/'+id,
              method: "DELETE",
            })
        
      })
    }
  return (
    <div className="list__company__container">
      <h2 className="Header__2">Firmy</h2>
      <div className="list__company__wrapper">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '2rem',
          }}
        >
          <h3 className="Header__3">Firmy</h3>
          <ButtonDropDown
            buttonText={'Kolumny'}
            buttonClass={'button--none'}
            buttonIcon={<Settings size={18} />}
            dropDownChildren={<CompanyListColumnsSwitch setColumnsSwitch={setShowColumns} />}
            showArrow={false}
          ></ButtonDropDown>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          <InputText
            style={{ marginRight: '2rem' }}
            placeholder={'Szukaj po nazwie...'}
            id={'list__company__search'}
            value={setSearchText}
          />
          <Button
            id={'list__company__delete'}
            disabled={selectedRows.length === 0 ? true : false}
            onClick={() => {
              deleteCompanies(selectedRows);
            }}
            class="button--red"
          >
            <Trash2 />
            Usuń
          </Button>
          <ButtonDropDown
            id={'list__company__export'}
            buttonText={'Export'}
            buttonIcon={<HardDriveUpload />}
            dropDownChildren={<DropDownExport />}
            showArrow={true}
          ></ButtonDropDown>
          <Button onClick={() => {}} class="button--gray">
            <HardDriveDownload />
            Import
          </Button>
          <Link href="/firmy/dodanie" style={{ width: '250px' }} class="button--blue">
            <Plus />
            Nowa Firma
          </Link>
        </div>
        <DataTable
          columns={columns}
          loading={loading}
          rows={response?.companies}
          filterColumns={showColumns}
          searchText={searchText}
          getSelectedRows={setSelectedRows}
        />
      </div>
    </div>
  );
};
