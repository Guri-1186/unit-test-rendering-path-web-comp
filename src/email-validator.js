const VALID_EMAIL_ENDINGS = ['gmail.com', 'outlook.com', 'yandex.ru']

export function validate(email) {
  const emailEnding = email.split('@')[1];
   return VALID_EMAIL_ENDINGS.includes(emailEnding);
  
}


export function validateAsync(email) {
  return new Promise((resolve, reject) => {
    const emailEnding = email.split('@')[1];
    if (VALID_EMAIL_ENDINGS.includes(emailEnding)) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}


export function validateWithThrow(email){
  const emailEnding = email.split('@')[1];
  if (VALID_EMAIL_ENDINGS.includes(emailEnding)) {
    return true;
  } else {
    throw new Error ('provided email is invalid.');
  }
};


export function validateWithLog(email) {
 const isValid = validate(email);
 console.log('Result:', isValid);
  return isValid;
};




