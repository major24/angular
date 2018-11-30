import { MyCompConsumeHeaderPage } from './app.po';

describe('my-comp-consume-header App', () => {
  let page: MyCompConsumeHeaderPage;

  beforeEach(() => {
    page = new MyCompConsumeHeaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
