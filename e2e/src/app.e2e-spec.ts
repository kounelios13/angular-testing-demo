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
  it('should display 3 p-card elements', async() => {
    await page.navigateTo();
    // Using await will cause an error here so I use a promise instead
    const cards = await page.getPcards();
    expect(cards.length).toBe(3);
  });

  it('Clicking Navigate to cars component should take you to cars', async() => {
    await page.getCarLink()
      .click();
    const path: string = await page.getPath();
    expect(path.split('/').pop()).toBe('cars');
  });
});
