import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupEditAvatar({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const ref = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateAvatar({
      avatar: ref.current.value
    });
  }

  React.useEffect(() => {
    ref.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      name="popup_avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      submitButton='Обновить'
      submitBtnLoading='Обновляем...'
    >
      <input
        type="url"
        id="avatarlink"
        className="popup__input popup__input_type_card-link"
        placeholder="Ссылка на фото"
        name="avatarlink"
        ref={ref}
        required
      />
      <span className="avatarlink-error popup__input-error"></span>
    </PopupWithForm>
  )
}

export default PopupEditAvatar;
