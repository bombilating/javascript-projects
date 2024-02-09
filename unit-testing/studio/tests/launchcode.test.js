// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  // launchcode object properties
  test("key value of 'organization' should return 'nonprofit'", function() {
    expect(launchcode.launchcode["organization"]).toBe('nonprofit');
  });

  test("key value of 'executiveDirector' should return 'Jeff' in the object launchcode", function() {
    expect(launchcode.launchcode["executiveDirector"]).toBe('Jeff');
  })

  test("key value of 'percentageCoolEmployees' should return '100'", function() {
    expect(launchcode.launchcode["percentageCoolEmployees"]).toBe(100);
  })

  test("key value of 'programsOffered' should return an array of ['Web Development', 'Data Analysis', 'Liftoff']", function() {
    expect(launchcode.launchcode["programsOffered"][0]).toBe('Web Development');
    expect(launchcode.launchcode["programsOffered"][1]).toBe('Data Analysis');
    expect(launchcode.launchcode["programsOffered"][2]).toBe('Liftoff');
    expect(launchcode.launchcode["programsOffered"].length).toBe(3)
  })

  test("key value of 'organization' should return 'nonprofit'", function() {
    expect(launchcode.launchcode["organization"]).toBe('nonprofit');
  });

  //launchOutput() function
  test("When passed a number that is ONLY divisible by 2, launchOutput() returns 'Launch!''", function() {
    expect(launchcode.launchOutput(2)).toBe('Launch!');
  })

  test("When passed a number that is ONLY divisible by 3, launchOutput() returns 'Code!'", function() {
    expect(launchcode.launchOutput(3)).toBe('Code!');
  })

  test("When passed a number that is ONLY divisible by 5, launchOutput() returns 'Rocks!'", function() {
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  })

  test("When passed a number that is divisible by 2 AND 3, launchOutput() returns 'LaunchCode!' (not 'Launch!Code!').", function() {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  })

  test("When passed a number that is divisible by 3 AND 5, launchOutput() return 'Code Rocks!'", function() {
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  })

  test("When passed a number that is divisible by 2 AND 5, launchOutput() return 'Launch Rocks! (CRASH!!!!)'", function() {
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
  })

  test("When passed a number that is divisible by 2, 3, AND 5, launchOutput() return 'LaunchCode Rocks!'", function() {
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  })

  test("When passed a number that is NOT divisible by 2, 3, or 5, launchOutput() return 'Rutabagas! That doesn't work.'", function() {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.")
  })
});
