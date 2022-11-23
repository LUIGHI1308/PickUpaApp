import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be blank', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
  });

  it("Imagen Logotipo", ()=>{
    expect(element(by.id("Logo_duoc")).getAttribute("src")).toContain("assets/2560px-Logo_DuocUC.svg.png");
  });

  

});
