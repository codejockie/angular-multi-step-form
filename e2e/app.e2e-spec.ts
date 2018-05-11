import { AngularMultiStepPage } from './app.po';

describe('angular-multi-step App', () => {
  let page: AngularMultiStepPage;

  beforeEach(() => {
    page = new AngularMultiStepPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
