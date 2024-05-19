// 1859. Sorting the Sentence

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.






/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    // Step 1: Split the input string into an array of words
    let words = s.split(' ');

    // Step 2: Create an array to hold the words without the numbers
    let sortedWords = new Array(words.length);

    // Step 3: Sort the words based on the trailing number
    words.forEach(word => {
        // Extract the number at the end of the word
        let index = word[word.length - 1] - '0'; // Convert char to number
        
        // Place the word (without the number) in the correct position
        sortedWords[index - 1] = word.slice(0, -1);
    });

    // Step 4: Join the sorted words into a single string
    return sortedWords.join(' ');
};