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
    { status: 'success', message: 'API test successful', response: { code: 200, data: 'Success data' } },
    { status: 'failure', message: 'API test failed', response: { code: 500, data: 'Failure data' } }
  ];
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  return randomResponse;
};