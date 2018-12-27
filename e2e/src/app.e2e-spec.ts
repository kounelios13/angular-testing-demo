import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Home', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Home');
  });
  it('should display 3 p-card elements',async()=>{
    page.navigateTo();
    //Using await will cause an error here so I use a promise instead
    page.getPcards()
      .then(cards=>expect(cards.length).toEqual(3))
    ;
  });
});
