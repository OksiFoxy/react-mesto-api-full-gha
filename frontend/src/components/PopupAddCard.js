import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupAddCard({ isOpen, onClose, onAddPlace, isLoading }) {

  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');

  React.useEffect(() => {
    if (isOpen) {
      setTitle('');
      setLink('');
    }
  }, [isOpen])

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleLinkChange(event) {
    setLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddPlace({
      name: title,
      link: link
    });
  }

  return (
    <PopupWithForm
      name="popup_type_card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      submitButton='Добавить'
      submitBtnLoading='Добавляем...'
    >
      <input
        type="text"
        id="cardname"
        className="popup__input popup__input_type_card"
        placeholder="Название места"
        name="name"
        minLength="2"
        maxLength="30"
        value={title}
        onChange={handleTitleChange}
        required
      />
      <span className="cardname-error popup__input-error"></span>
      <input
        type="url"
        id="cardlink"
        className="popup__input popup__input_type_card-link"
        placeholder="Ссылка на картинку"
        name="link"
        value={link}
        onChange={handleLinkChange}
        required
      />
      <span className="cardlink-error popup__input-error"></span>
    </PopupWithForm>
  )
}

export default PopupAddCard;
