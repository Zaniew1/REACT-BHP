import { Paragraph } from '../../atoms/Paragraph/Paragraph'
import { HistoryElement } from '../../molecules/HistoryElement/HistoryElement'
export const HistoryBlock = () => {
  const changes=[{change:'asdasd'},{change:'123123'}]
  return (
    <div className={'history__block'}>
      <Paragraph style={{fontSize:'1.3rem', color: '#babad1', margin: '2rem '}} text={'Ostatnie zmiany dokonane na Twoim koncie'}/>
      <div className="history__block__elements">
        <HistoryElement  whoChanged='pracownicy' whoChangedId='1' typeOfChange="delete" timeOfChange={new Date()}/>
        <HistoryElement whatChanged={'Notatki'}  whoChanged='firmy' whoChangedId='2' typeOfChange="update" timeOfChange={new Date()}/>
        <HistoryElement   whoChanged='szkolenia' whoChangedId='3' typeOfChange="create" timeOfChange={new Date()}/>

      </div>
    </div>
  )
}
