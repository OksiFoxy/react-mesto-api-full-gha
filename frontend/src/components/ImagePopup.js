function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_full_photo ${card && 'popup_is-opened'}`}>
      <div className="popup__photo">
        <button
          onClick={onClose}
          className="popup__close popup__close-full"
          id="button_form-close-full"
          aria-label="Закрыть"
          type="button">
        </button>
        <img
          className="popup__full-image"
          src={card && card.link}
          alt={card && card.name}
        />
        <h2 className="popup__full-name">{card && card.name}</h2>
      </div>
    </div>
  )
}

export default ImagePopup;
