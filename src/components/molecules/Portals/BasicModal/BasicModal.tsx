import ReactDOM from 'react-dom';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

type ModalType = {
    text: string,
    type: "success" | "error" | "info";
}

 export const BasicModal = (props: ModalType) => {
    const [show, setShow] = useState(true);
    const hideModal = () =>{
        setShow(false)
    }
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         hideModal()
    //     }, 5000)
    // },[])
  if (!props.text) return null;
  if (!show) return null;
  

  return ReactDOM.createPortal(
    <div className="portal"  >
      <div className="portal__popup"  >
        <h2 className="portal__popup__title">An Error Occurred</h2>
        <p className="portal__popup__message">{props.text}</p>
      </div>
        <button className="portal__close" onClick={hideModal}>
            <X />
        </button>
    </div>,
    document.getElementById('popup-root')
  );
};
