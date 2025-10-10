import ReactDOM from 'react-dom';

 export const ModalWithBlackBackground = ({ error, onClose, onAccept}) => {
  if (!error) return null;

  return ReactDOM.createPortal(
    <div className="error-popup-overlay"  onClick={onClose} >
      <div className="error-popup"  onClick={(e) => e.stopPropagation()}>
        <h2 className="error-popup__title">An Error Occurred</h2>
        <p className="error-popup__message">{error}</p>
        <button onClick={onClose} className="error-popup__close-button">
          Close
        </button>
      </div>
    </div>,
    document.getElementById('popup-root')
  );
};
