const profileEdit = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const nameInput = document.querySelector('.popup__name-input');
const jobInput = document.querySelector('.popup__job-input');
const profileName = document.querySelector('.profile__title'); 
const profileJob = document.querySelector('.profile__text');

const formSubmitHandler = (evt) => {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup();
}

const openPopup = () => {
  popup.classList.add('popup_open');    
}

const closePopup = () => {
  popup.classList.remove('popup_open');
  }

profileEdit.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
popup.addEventListener('submit', formSubmitHandler);