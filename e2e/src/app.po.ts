import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path= '/') {
    return browser.get(path);
  }

  getTitleText() {
    return element(by.css('demo-root h1')).getText();
  }

  getPcards() {

    return element.all(by.tagName('p-card'));
  }

  getCarLink() {
    return element(by.css('#carsLink'));
  }

  getPath() {
    return browser.getCurrentUrl();
  }
}
