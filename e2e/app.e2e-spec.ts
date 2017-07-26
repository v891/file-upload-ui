import { UploaderUiPage } from './app.po';

describe('uploader-ui App', () => {
  let page: UploaderUiPage;

  beforeEach(() => {
    page = new UploaderUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
