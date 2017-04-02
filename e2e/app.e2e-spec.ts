import { AngularAgent4jPage } from './app.po';

describe('angular-agent4j App', function() {
  let page: AngularAgent4jPage;

  beforeEach(() => {
    page = new AngularAgent4jPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
