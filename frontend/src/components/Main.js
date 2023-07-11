import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  // -------------------------------Получаем данные профиля и карточек вместе------------------------------------
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-section">
          <img className="profile__avatar"
            src={currentUser.avatar}
            alt="Аватар пользователя"
          />
          <button
            onClick={onEditAvatar}
            className="profile__avatar-button"
            type="button"
            aria-label="Редактировать аватар"></button>
        </div>
        <div className="profile__info">
          <div className="profile__info-content">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__about">{currentUser.about}</p>
          </div>
          <button onClick={onEditProfile}
            type="button" className="profile__button-edit"
            aria-label="Редактировать профиль">
          </button>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__button-add"
          aria-label="Добавить место">
        </button>
      </section>

      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;
