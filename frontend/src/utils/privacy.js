const privacyKey = 'privacyRGPD';

const setPrivacyKey = () => {
  localStorage.setItem(privacyKey, 'true');
};

const checkPrivacyKey = () => {
  if (localStorage.getItem(privacyKey) === 'true') {
    return true;
  }
  return false;
};

export { setPrivacyKey, checkPrivacyKey };