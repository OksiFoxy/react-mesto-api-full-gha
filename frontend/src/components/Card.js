
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (
    `card__like ${isLiked && 'card__like-active'}`
  );;

  function handleCardClick() {
    onCardClick(card)
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <div className="card-template">
      <li className="card__item">
        {isOwn && <button className='card__delete' onClick={handleDeleteClick} />}
        <img
          className="card__photo"
          src={card.link}
          alt={card.name}
          onClick={handleCardClick}
        />
        <div className="card__description">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like-area">
            <button
              type="button"
              className={cardLikeButtonClassName}
              onClick={handleLikeClick}
              alt="Поставить лайк">
            </button>
            <p className="card__like-counter">{card.likes.length}</p>
          </div>
        </div>
      </li>
    </div>
  );
};
export default Card;
