import { StudentManagmentSystemPage } from './app.po';

describe('student-managment-system App', function() {
  let page: StudentManagmentSystemPage;

  beforeEach(() => {
    page = new StudentManagmentSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
