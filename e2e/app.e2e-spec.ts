import { Projet1Page } from './app.po';

describe('projet1 App', () => {
  let page: Projet1Page;

  beforeEach(() => {
    page = new Projet1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
