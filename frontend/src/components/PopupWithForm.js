function PopupWithForm({ isOpen, onClose, onSubmit, name, title, children, isLoading, submitButton, submitBtnLoading }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_is-opened"}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close popup__close-profile"
          id="button_form-close-edit"
          name="button_form-close"
          aria-label="Закрыть форму"
          onClick={onClose}
        >
        </button>
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form popup__form-profile"
          name={name}
          onSubmit={onSubmit}
        >
          {children}
          <button
            type="submit"
            className="popup__submit-button"
            name="submit-profile"
          >
          {isLoading ? submitBtnLoading : submitButton}
          </button>
        </form>
      </div>
    </div>


  )
}

export default PopupWithForm;
