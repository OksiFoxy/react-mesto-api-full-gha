// InfoTooltip (попап, который показывает сообщение об успешной регистрации или же возникшей
// ошибке. Управление им происходит через пропсы из стейта компонента App)

export default function InfoTooltip({ popupStatus, isOpen, onClose }) {
  return (
    <section
    className={`popup popup_type_infoTooltip ${isOpen && "popup_is-opened"}`}>
      <div className="popup__container">
        <button
          onClick={onClose}
          className="popup__close"
          type="button">
        </button>
        <img
          className="popup__icon"
          src={popupStatus.image}
          alt={`Информационное сообщение: ${popupStatus.message}`}
           />
        <p className="popup__icon-caption">{popupStatus.message}</p>
      </div>
    </section>
  );
};
