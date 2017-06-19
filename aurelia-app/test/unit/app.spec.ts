import {App} from '../../src/app';

describe('the app', () => {

  let unit: App;
  
  beforeEach( () => {
    unit = new App();
  });
  
  it("Fetched data length", () => {
    // Initial data array is empty
    console.log(unit.users.length)
    expect(unit.users.length).toBe(0);
    // Fetched data size is set to 20 in datafetch.ts
    DataLoader.fetchData
      .then( () => {
        console.log(unit.users.length)
        expect(unit.users.length).toBe(20);
      })
  });
  
});
