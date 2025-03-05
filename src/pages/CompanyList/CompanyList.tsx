import { DataTable } from '../../components/organisms/Table/Table';
import { Plus, Trash2, HardDriveDownload , HardDriveUpload  } from 'lucide-react';
import { InputText } from '../../components/molecules/Input/Text/InputText';
import { Button } from '../../components/atoms/Button/Button';
export type CompanyType = {
  id: number;
  name: string;
  adress: string;
  nip: number;
  coworkers: boolean;
};
export const CompanyList = () => {
  return (
    <div className="list__company__container">
      <h2 className="Header__2">Firmy</h2>
      <div className="list__company__wrapper">
        <div>
          <h3 className="Header__3">Firmy</h3>
          {/* <DropDownButton></DropDownButton> */}
        </div >
        <div style={{display: 'flex', justifyContent:'flex-end', width:'100%'}}>
          <InputText style={{marginRight: '2rem'}} placeholder={'Szukaj...'} id={'list__company__search'}/>
          <Button disabled={true} onClick={()=>{}} class='button--red'><Trash2/>Usuń</Button>
          {/* <DropDownButton><HardDriveUpload/> Export</DropDownButton> */}
          <Button onClick={()=>{}} class='button--gray'><HardDriveDownload/>Import</Button>
          <Button onClick={()=>{}} class='button--blue'><Plus/>Nowa Firma</Button>
        </div>
        <DataTable />
      </div>
    </div>
  )
}
