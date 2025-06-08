import { Link } from "../../atoms/Link/Link";

type HistoryElementType ={
    whoChanged:"pracownicy" | "firmy" | "szkolenia";
    whoChangedId:string;
    typeOfChange:'create' | 'update' | 'delete';
    whatChanged?:string
    timeOfChange: Date
}
export const HistoryElement = (props:HistoryElementType) => {
    let type = '';
    const dotColor = {
        backgroundColor:'',
        color: '',
        boxShadow:''
    };
    if(props.typeOfChange == 'create'){
        dotColor.backgroundColor = 'rgb(113, 221, 55)';
        dotColor.boxShadow = 'rgba(113, 221, 55, 0.16) 0px 0px 0px 0.1875rem';
        type = 'Stworzono';
    }else if(props.typeOfChange == 'update'){
        dotColor.backgroundColor = 'rgb(3, 195, 236)';
        dotColor.boxShadow = 'rgba(3, 195, 236, 0.16) 0px 0px 0px 0.1875rem';
        type = 'Zaktualizowano';
    } else if(props.typeOfChange == 'delete'){
        dotColor.backgroundColor = 'rgb(255, 62, 29)';
        dotColor.boxShadow = 'rgba(255, 62, 29, 0.16) 0px 0px 0px 0.1875rem';
        type = 'Usunięto';
    }
  return (
    <div className="history__element">
        <div className="history__element__dots">
            <span style={dotColor} className="history__element__dots__dot"></span>
        </div>
        <div className="history__element__data">
            <Link style={{ fontSize:'1.2rem',color: 'rgb(105, 108, 255)'}} href={`/${props.whoChanged}/${props.whoChangedId}`}>{"Pracownik"}</Link>
            <div className="history__element__data__type">{type}</div>
            <div className="history__element__data__what">{props.whatChanged}</div>
        </div>
        <div className="history__element__time">{props.timeOfChange.toLocaleString()}</div>
    </div>
  )
}
