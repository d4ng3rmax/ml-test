import { MlPage } from './app.po';

describe('ml App', () => {
  let page: MlPage;

  beforeEach(() => {
    page = new MlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
