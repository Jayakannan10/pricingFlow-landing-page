export const aboutUsLink = '#';
export const contactLink = '#';
export const twitterLink = 'https://twitter.com';
export const facebookLink = 'https://facebook.com';
export const instagramLink = 'https://instagram.com';
export const linkedInLink = 'https://linkedin.com';
export const gitHubLink = 'https://github.com';
export const apiTestingLink = '#';
export const checkApiLink = () => {
  const responses = [
    { status: 'success', message: 'API test successful' },
    { status: 'failure', message: 'API test failed' }
  ];
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  return randomResponse;
};