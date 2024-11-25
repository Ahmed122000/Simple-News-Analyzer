import { handleSubmit } from '../src/client/js/formHandler';
const { checkForUrl } = require('../src/client/js/urlChecker')
const { updateUI } = require('../src/client/js/UIFormatter');

//mock the dependencies 
jest.mock('../src/client/js/urlChecker', () => ({
  checkForUrl: jest.fn(),
}));

jest.mock('../src/client/js/UIFormatter', () => ({
  updateUI: jest.fn(),
}));


describe('handleSubmit', () => {
  beforeEach(() => {
    // Clear any previous mocks
    jest.clearAllMocks();

    global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({}),
    })
    );
  });

  //test first step --> the url should be checked and fetch only with valid url
  test('should validate the URL and alert if invalid', async () => {
    // Mock the DOM and invalid URL
    document.body.innerHTML = '<form id="urlForm"><input id="name" value="http://invalid.url"></form>';
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const event = { preventDefault: jest.fn() };

    // Mock `checkForUrl` to return false
    checkForUrl.mockReturnValue(false); 

    await handleSubmit(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(checkForUrl).toHaveBeenCalledWith('http://invalid.url'); //use example url for general usage 
    expect(mockAlert).toHaveBeenCalledWith(
      'the input URL is not correct\nplease enter another valid URL'
    );
    expect(fetch).not.toHaveBeenCalled(); //the fetch occur with valid urls only
  });


  //test second step --> update the UI after getting the fetched data
  test('should fetch and update UI if URL is valid', async () => {

    document.body.innerHTML = '<form id="urlForm"><input id="name" value="http://valid.url"></form>';
    const event = { preventDefault: jest.fn() };

    checkForUrl.mockReturnValue(true);
    
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: 'Success' }),
      })
    );

    await handleSubmit(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(checkForUrl).toHaveBeenCalledWith('http://valid.url');

    expect(fetch).toHaveBeenCalledWith('http://localhost:8000/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: 'http://valid.url' }),
    });
    expect(updateUI).toHaveBeenCalledWith({ message: 'Success' });
  });
});
