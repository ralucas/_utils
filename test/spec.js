/*
* Testing Suite for _util.js
* 
* 
*/

/*
* Tests for _util.range 
* @function Creates array given the range
*
*/
  describe("creates an inclusive array given the range", function() {
  
    it("should create an ascending array of numbers", function() {
      var a = 5,
        b = 10;
      expect(_utils.range(a,b)).toEqual([5,6,7,8,9,10]);
    });

    it("should create an descending array of numbers", function() {
      var a = 8,
        b = 3;
      expect(_utils.range(a,b)).toEqual([8,7,6,5,4,3]);
    });

    it("should create an ascending array of letters", function() {
      var a = 'g',
        b = 'l';
      expect(_utils.range(a,b)).toEqual(['g','h','i','j','k','l']);
    });

    it("should create an descending array of letters", function() {
      var a = 'Z',
        b = 'W';
      expect(_utils.range(a,b)).toEqual(['Z','Y','X','W']);
    });

    it("should return undefined", function() {
      var a = 'F';
      expect(_utils.range(a)).toThrow(console.error);
    });

    it("should return undefined", function() {
      expect(_utils.range()).toThrow(console.error);
    });

  });