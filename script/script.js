const profile = document.querySelector('.profile');
const userName = profile.querySelector('.profile__title'); 
const aboutSelf = profile.querySelector('.profile__text');
const profileEdit = document.querySelector('.profile__edit');
const popups = document.querySelectorAll('.popup');
const profileButton = document.querySelector('.profile__button');
const popupEdit = document.querySelector('.popup_edit');
const nameInputEdit = popupEdit.querySelector('.popup__input_forms_name');
const jobInputEdit = popupEdit.querySelector('.popup__input_forms_job');
const popupAdd = document.querySelector('.popup_add');
const popupImageName = popupAdd.querySelector('.popup__input_forms_name');
const popupImageUrl = popupAdd.querySelector('.popup__input_forms_url')
const popupCloseAdd = document.querySelector('.popup__close_add');
const popupCloseEdit = document.querySelector('.popup__close_edit');
const nameInput = document.querySelector('.popup__input_forms_name');
const jobInput = document.querySelector('.popup__input_forms_job');
const profileName = document.querySelector('.profile__title'); 
const profileJob = document.querySelector('.profile__text');
const addForm = document.querySelector('.popup__form-add');
const popupCard = document.querySelector('.popup_card'); 
const cardHeading = popupCard.querySelector('.popup__card-heading'); 
const elementCardPopup = popupCard.querySelector('.popup__card-image');
const popupCardClose = popupCard.querySelector('.popup__close');
const placeContainer = document.querySelector('.element');
const placeTemplate = document.querySelector('#elements').content;
const keyEscape = 'Escape';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// инициализация карточек 
function render() { 
  initialCards.forEach(item => { 
    const placeElement = createCard(item.link, item.name); 
    placeContainer.append(placeElement); 
  }); 
} 
 
// добавление карточек 
function createCard(link, name) { 
  const element = placeTemplate.cloneNode(true); 
  const elementAddImg = element.querySelector('.element__photo'); 
  elementAddImg.src = link; 
  elementAddImg.alt = name; 
  element.querySelector('.element__title').textContent = name; 
 
  // установка обработчиков событий для карточек 
  element.querySelector('.element__like').addEventListener('click', likeHandler); 
  element.querySelector('.element__photo').addEventListener('click', cardPopupHandler); 
  element.querySelector('.element__delete').addEventListener('click', deleteCard); 

  return element; 
} 

// Удаление карточек

function deleteCard(evt)
{
  evt.target.closest('.element__list').remove();

}


 
// установка-сброс лайка с карточки 
function likeHandler(evt) {
  evt.target.classList.toggle('element__like-activ'); 
} 
 
//открытие попап формы с карточкой 
function cardPopupHandler(evt) { 
  const elementCardClick = evt.target.parentNode.querySelector('.element__photo'); 
  elementCardPopup.src = elementCardClick.src; 
  elementCardPopup.alt = elementCardClick.alt; 
  cardHeading.textContent = evt.target.parentNode.querySelector('.element__title').textContent; 
 
  togglePopup(popupCard); 
 
}

//открытие-закрытие форм
function togglePopup(element) {
  element.classList.toggle('popup_opened');
  if (element.classList.contains('popup_opened')) {
    document.addEventListener('keydown', keyHandler);
  }
  else
  {
    document.removeEventListener('keydown', keyHandler);
  }
}


document.querySelectorAll('.popup__input').forEach((element) => {
  element.oninput = function(evt)
  {
    evt.target.value;
  }
})

//закрытие форм кнопкой Esc
function keyHandler(evt) {

  if (evt.key === keyEscape) {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
  }
  
}

//закрытие форм при клике на оверлей
const popupClickOnOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    togglePopup(evt.target);
  }
};

//обработчик события submit формы 
const formSubmitHandler = (evt, element) => { 
 
  evt.preventDefault(); 

  togglePopup(element); 
} 
 
//слушатели событий
profileEdit.addEventListener('click', () => {

  nameInputEdit.value = userName.textContent;
  jobInputEdit.value = aboutSelf.textContent;
  togglePopup(popupEdit);

}); 

profileButton.addEventListener('click', () => {
  
  addForm.reset();
  togglePopup(popupAdd);

}); 

popupCloseEdit.addEventListener('click', () => togglePopup(popupEdit)); 
popupCloseAdd.addEventListener('click', () => togglePopup(popupAdd)); 
popupCardClose.addEventListener('click', () => togglePopup(popupCard)); 

popupEdit.addEventListener('submit', (evt) => {

  userName.textContent = nameInputEdit.value; 
  aboutSelf.textContent = jobInputEdit.value;

  formSubmitHandler(evt, popupEdit);

}); 

popupAdd.addEventListener('submit', (evt) => {

  const placeElement = createCard(popupImageUrl.value, popupImageName.value) 
  placeContainer.prepend(placeElement); 

  formSubmitHandler(evt, popupAdd);

});
popups.forEach(el => el.addEventListener('click', popupClickOnOverlay));

render();


