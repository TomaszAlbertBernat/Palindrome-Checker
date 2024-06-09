const userInput = document.getElementById('text-input')
const palindromeCheckBtn = document.getElementById('check-btn');
const resultParagraph = document.getElementById('result');

const palindromeCheck = (input) => {
    const originalInputValue = input

    if (input === '') {
        alert('Please input a value');
        return;
    }

    const lowerCaseString = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    const reverseString = [...lowerCaseString].reverse().join('');
    let resultAnswear =  `<u>${originalInputValue}</u> ${reverseString === lowerCaseString ? 'is a palindrome' : 'is not a palindrome'}`;
    resultParagraph.innerHTML = resultAnswear;
};

palindromeCheckBtn.addEventListener('click', () => {
    palindromeCheck(userInput.value);
});

userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        palindromeCheck(userInput.value)}
        });