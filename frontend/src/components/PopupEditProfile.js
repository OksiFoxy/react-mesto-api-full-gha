import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function PopupEditProfile({ isOpen, onClose, onUpdateUser, isLoading }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({ name: name, about: description });
  }


  return (
    <PopupWithForm
      name="form-profile-edit"
      className="popup popup_type_edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      submitButton='Сохранить'
      submitBtnLoading='Сохраняем...'
    >
      <input
        type="text"
        id="profile-name"
        className="popup__input popup__input_type_name"
        value={name}
        onChange={handleNameChange}
        placeholder="Имя"
        name="name"
        minLength="2"
        maxLength="40"
        required />
      <span className="profile-name-error popup__input-error"></span>
      <input
        type="text"
        id="profile-about"
        className="popup__input popup__input_type_job"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="О себе"
        name="about"
        minLength="2"
        maxLength="200"
        required />
      <span className="profile-about-error popup__input-error"></span>
    </PopupWithForm>
  )
}

export default PopupEditProfile;
