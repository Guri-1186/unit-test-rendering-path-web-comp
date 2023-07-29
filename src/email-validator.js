
const VALID_EMAIL_ENDINGS = ['gmail.com', 'outlook.com', 'yandex.ru']
// eslint-disable-next-line
export function validate(email) {
  const emailEnding = email.split('@')[1];
  return VALID_EMAIL_ENDINGS.includes(emailEnding);
} 
