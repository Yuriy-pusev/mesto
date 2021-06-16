const profileEdit = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__input_forms_name');
const jobInput = document.querySelector('.popup__input_forms_job');
const profileName = document.querySelector('.profile__title'); 
const profileJob = document.querySelector('.profile__text');
const formElement = document.querySelector('.popup__form');

const formSubmitHandler = (evt) => {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}

const openPopup = () => {
  popup.classList.add('popup_open');  
  nameInput.value = profileName.textContent; 
  jobInput.value = profileJob.textContent;  
}

const closePopup = () => {
  popup.classList.remove('popup_open');
  }

profileEdit.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);