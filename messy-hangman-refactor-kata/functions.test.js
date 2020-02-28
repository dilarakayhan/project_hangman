//Bestand functions.test.js:
const wordPicker = require('./functions')

  
  // Check for input in wordList
  
test('Random word is included in the wordList, and the game can start', () => {
  
    const wordList = ['vis','toeter','developer','telefoon','moeder','snoer','geeuw' ];
    const randomWord = wordPicker();
  
    expect(wordList).toContain(randomWord);
  
  });

// Check for letter in random word

test("Letter does exist in random word", () => {
    expect(wordPicker()).toMatch(/a/);
})
