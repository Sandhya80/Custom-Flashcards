// ====== Flashcard Data Initialization ======
// Initial flashcards for JavaScript, HTML5, and CSS3 categories (no repetitions)
let flashcards = [
  // JavaScript category
  { question: "What is the output of '2 + 2'?", answer: "4", category: "JavaScript" },
  { question: "What is the output of 'typeof 42'?", answer: "number", category: "JavaScript" },
  { question: "What is the output of 'typeof 'hello''?", answer: "string", category: "JavaScript" },
  { question: "What is the output of 'typeof true'?", answer: "boolean", category: "JavaScript" },
  { question: "What is the output of 'typeof undefined'?", answer: "undefined", category: "JavaScript" },
  { question: "What is the output of 'typeof {}'?", answer: "object", category: "JavaScript" },
  { question: "What is the output of 'typeof []'?", answer: "object", category: "JavaScript" },
  { question: "What is the output of 'typeof NaN'?", answer: "number", category: "JavaScript" },
  { question: "What does 'parseInt' do in JavaScript?", answer: "Converts a string to an integer", category: "JavaScript" },
  { question: "What is the purpose of 'JSON.stringify()'?", answer: "Converts a JavaScript object to a JSON string", category: "JavaScript" },
  { question: "What is the difference between 'let' and 'var'?", answer: "'let' is block-scoped, 'var' is function-scoped", category: "JavaScript" },
  { question: "What does '=== operator do in JavaScript?", answer: "Strict equality comparison", category: "JavaScript" },
  { question: "How do you create a function in JavaScript?", answer: "function myFunction() {}", category: "JavaScript" },
  { question: "What is an array in JavaScript?", answer: "A list-like object that can hold multiple values", category: "JavaScript" },
  { question: "How do you declare a variable in JavaScript?", answer: "Using var, let, or const", category: "JavaScript" },
  { question: "What is the purpose of 'console.log()'?", answer: "Outputs data to the console", category: "JavaScript" },
  { question: "What does 'undefined' mean in JavaScript?", answer: "'undefined' means a variable has been declared but not assigned a value", category: "JavaScript" },
  { question: "What does 'let' do in JavaScript?", answer: "Declares a block-scoped variable.", category: "JavaScript" },
  { question: "What is the output of 2 + '2' in JavaScript?", answer: "'22' (string concatenation)", category: "JavaScript" },
  { question: "What keyword is used to declare a constant in JavaScript?", answer: "const", category: "JavaScript" },
  { question: "What does '===' do in JavaScript?", answer: "Strict equality comparison", category: "JavaScript" },
  { question: "What is the purpose of 'this' in JavaScript?", answer: "Refers to the current object", category: "JavaScript" },
  { question: "What does 'var' do in JavaScript?", answer: "Declares a variable (function-scoped)", category: "JavaScript" },
  { question: "What is a closure in JavaScript?", answer: "A function with access to its own scope, the outer function's scope, and the global scope", category: "JavaScript" },
  { question: "Which method converts a JSON string into a JavaScript object?", answer: "JSON.parse()", category: "JavaScript" },
  { question: "How do you write a single-line comment in JavaScript?", answer: "//", category: "JavaScript" },
  { question: "Which array method adds an element to the end of an array?", answer: "push()", category: "JavaScript" },
  { question: "What is the output of typeof null in JavaScript?", answer: "object", category: "JavaScript" },
  { question: "What is the difference between '==' and '===' in JavaScript?", answer: "'==' compares values with type coercion, '===' compares both value and type", category: "JavaScript" },
  { question: "How do you check if a variable is an array in JavaScript?", answer: "Array.isArray(variable)", category: "JavaScript" },
  { question: "What is a promise in JavaScript?", answer: "An object representing the eventual completion or failure of an asynchronous operation", category: "JavaScript" },
  { question: "What does the 'map()' method do on arrays?", answer: "Creates a new array with the results of calling a function on every element", category: "JavaScript" },
  { question: "How do you handle exceptions in JavaScript?", answer: "Using try...catch blocks", category: "JavaScript" },
  { question: "What is the purpose of the 'return' statement in a function?", answer: "Specifies the value to be returned by the function", category: "JavaScript" },
  { question: "What is the difference between 'null' and 'undefined'?", answer: "'null' is an assigned value, 'undefined' means a variable has not been assigned a value", category: "JavaScript" },
  { question: "What is an arrow function in JavaScript?", answer: "A shorter syntax for writing functions using '=>'", category: "JavaScript" },
  { question: "How do you convert a string to a number in JavaScript?", answer: "Using Number(), parseInt(), or parseFloat()", category: "JavaScript" },
  { question: "What does the 'filter()' method do on arrays?", answer: "Creates a new array with elements that pass a test function", category: "JavaScript" },
  { question: "What is event bubbling in JavaScript?", answer: "The event propagates from the innermost element to the outer elements", category: "JavaScript" },
  { question: "How do you prevent the default action of an event?", answer: "By calling event.preventDefault()", category: "JavaScript" },
  { question: "What is the purpose of the 'setTimeout' function?", answer: "Executes a function after a specified delay", category: "JavaScript" },
  { question: "What is the difference between 'for...in' and 'for...of' loops?", answer: "'for...in' iterates over object keys, 'for...of' iterates over iterable values", category: "JavaScript" },
  { question: "How do you merge two arrays in JavaScript?", answer: "Using concat() or the spread operator [...arr1, ...arr2]", category: "JavaScript" },
  { question: "What is hoisting in JavaScript?", answer: "Variable and function declarations are moved to the top of their scope before code execution", category: "JavaScript" },
  { question: "How do you define a class in JavaScript?", answer: "Using the 'class' keyword", category: "JavaScript" },
  { question: "What is the purpose of the 'constructor' method in a class?", answer: "Initializes a newly created object", category: "JavaScript" },
  { question: "How do you create an object in JavaScript?", answer: "Using object literals {} or the new Object() constructor", category: "JavaScript" },
  { question: "What does the 'reduce()' method do on arrays?", answer: "Executes a reducer function on each element, resulting in a single output value", category: "JavaScript" },
  { question: "What is the global object in a browser environment?", answer: "window", category: "JavaScript" },
  { question: "How do you access the first element of an array?", answer: "array[0]", category: "JavaScript" },
  { question: "What is the purpose of the 'typeof' operator?", answer: "Returns a string indicating the type of the operand", category: "JavaScript" },
  { question: "How do you remove the last element from an array?", answer: "Using the pop() method", category: "JavaScript" },

  // HTML5 category
  { question: "What is the purpose of the <section> tag in HTML5?", answer: "Defines a section in a document", category: "HTML5" },
  { question: "Which HTML5 element is used for navigation links?", answer: "<nav>", category: "HTML5" },
  { question: "What does the <article> tag represent in HTML5?", answer: "A self-contained composition in a document", category: "HTML5" },
  { question: "Which tag is used to embed audio content in HTML5?", answer: "<audio>", category: "HTML5" },
  { question: "Which tag is used to embed video content in HTML5?", answer: "<video>", category: "HTML5" },
  { question: "What is the purpose of the <aside> tag in HTML5?", answer: "Defines content aside from the main content", category: "HTML5" },
  { question: "Which HTML5 element is used to mark up footer content?", answer: "<footer>", category: "HTML5" },
  { question: "What is the purpose of the <header> tag in HTML5?", answer: "Defines a header for a document or section", category: "HTML5" },
  { question: "Which HTML5 tag is used to mark up a figure or illustration?", answer: "<figure>", category: "HTML5" },
  { question: "What is the purpose of the <figcaption> tag in HTML5?", answer: "Defines a caption for a <figure> element", category: "HTML5" },
  { question: "Which HTML5 element is used for marking up time or dates?", answer: "<time>", category: "HTML5" },
  { question: "What is the purpose of the <mark> tag in HTML5?", answer: "Highlights text", category: "HTML5" },
  { question: "Which HTML5 tag is used to indicate progress of a task?", answer: "<progress>", category: "HTML5" },
  { question: "What is the purpose of the <output> tag in HTML5?", answer: "Represents the result of a calculation", category: "HTML5" },
  { question: "Which HTML5 tag is used for user input suggestions?", answer: "<datalist>", category: "HTML5" },
  { question: "What is the purpose of the <details> tag in HTML5?", answer: "Specifies additional details that the user can view or hide", category: "HTML5" },
  { question: "Which HTML5 tag is used to define a visible heading for a <details> element?", answer: "<summary>", category: "HTML5" },
  { question: "What is the purpose of the <main> tag in HTML5?", answer: "Specifies the main content of a document", category: "HTML5" },
  { question: "Which HTML5 attribute is used to make an input field take focus automatically?", answer: "autofocus", category: "HTML5" },
  { question: "Which HTML5 attribute is used to specify that an input field must be filled out before submitting?", answer: "required", category: "HTML5" },
  { question: "What does HTML stand for?", answer: "HyperText Markup Language", category: "HTML5" },
  { question: "What is the purpose of the <title> tag in HTML?", answer: "Defines the title of the document", category: "HTML5" },
  { question: "Which HTML element is used to define a hyperlink?", answer: "<a>", category: "HTML5" },
  { question: "What is the purpose of the <meta> tag in HTML?", answer: "Provides metadata about the HTML document", category: "HTML5" },
  { question: "Which tag is used to create a dropdown list in HTML?", answer: "<select>", category: "HTML5" },
  { question: "What does the <form> tag do in HTML?", answer: "Defines an HTML form for user input", category: "HTML5" },
  { question: "Which HTML element is used to define a table?", answer: "<table>", category: "HTML5" },
  { question: "What is the purpose of the <div> tag in HTML?", answer: "Defines a division or section", category: "HTML5" },
  { question: "Which attribute specifies an alternate text for an image, if the image cannot be displayed?", answer: "alt", category: "HTML5" },
  { question: "What is the correct HTML element for inserting a line break?", answer: "<br>", category: "HTML5" },
  { question: "Which HTML element is used to define a heading?", answer: "<h1> to <h6>", category: "HTML5" },
  { question: "How do you create a list in HTML?", answer: "<ul> or <ol>", category: "HTML5" },
  { question: "What does the <head> tag contain in an HTML document?", answer: "Metadata about the document", category: "HTML5" },
  { question: "What is the purpose of the <body> tag in HTML?", answer: "Contains the content of the document", category: "HTML5" },
  { question: "Which HTML element is used to define a paragraph?", answer: "<p>", category: "HTML5" },
  { question: "What is the correct HTML element for inserting a line break?", answer: "<br>", category: "HTML5" },
  { question: "Which HTML element is used to define an unordered list?", answer: "<ul>", category: "HTML5" },
  { question: "Which HTML element is used to define an ordered list?", answer: "<ol>", category: "HTML5" },
  { question: "What does the <img> tag do in HTML?", answer: "Displays an image", category: "HTML5" },
  { question: "What is the purpose of the <a> tag in HTML?", answer: "Defines a hyperlink", category: "HTML5" },
  { question: "How do you create a table in HTML?", answer: "<table>", category: "HTML5" },
  { question: "What is the purpose of the <div> tag in HTML?", answer: "Defines a division or section", category: "HTML5" },
  { question: "What does HTML stand for?", answer: "HyperText Markup Language", category: "HTML5" },
  { question: "What is the purpose of the <title> tag in HTML?", answer: "Defines the title of the document", category: "HTML5" },
  { question: "Which HTML element is used to define the document type?", answer: "<!DOCTYPE html>", category: "HTML5" },
  { question: "What is the correct HTML element for inserting a line break?", answer: "<br>", category: "HTML5" },
  { question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", answer: "alt", category: "HTML5" },
  { question: "What is the purpose of the <meta> tag in HTML?", answer: "Provides metadata about the HTML document", category: "HTML5" },
  { question: "Which tag is used to create a dropdown list in HTML?", answer: "<select>", category: "HTML5" },
  { question: "What does the <form> tag do in HTML?", answer: "Defines an HTML form for user input", category: "HTML5" },
  { question: "Which HTML tag is used for the largest heading?", answer: "<h1>", category: "HTML5" },
  { question: "Which attribute makes an input field required in HTML5?", answer: "required", category: "HTML5" },
  { question: "Which HTML tag is used to display an image?", answer: "<img>", category: "HTML5" },
  { question: "Which HTML tag is used for a line break?", answer: "<br>", category: "HTML5" },
  { question: "Which HTML tag is used for a hyperlink?", answer: "<a>", category: "HTML5" },
  { question: "What is the purpose of the <head> tag in HTML?", answer: "Contains meta-information about the document", category: "HTML5" },
  { question: "How do you make a list in HTML?", answer: "<ul> or <ol>", category: "HTML5" },
  { question: "What does the <a> tag define in HTML?", answer: "A hyperlink", category: "HTML5" },
  { question: "Which attribute is used for alternative text in images?", answer: "alt", category: "HTML5" },
  { question: "What is the correct doctype for HTML5?", answer: "<!DOCTYPE html>", category: "HTML5" },
  { question: "Which tag is used to create an unordered list?", answer: "<ul>", category: "HTML5" },

  // CSS3 category
  { question: "Which CSS property controls the space between lines of text?", answer: "line-height", category: "CSS3" },
  { question: "How do you make a rounded corner in CSS?", answer: "border-radius", category: "CSS3" },
  { question: "Which property is used to add a shadow to text?", answer: "text-shadow", category: "CSS3" },
  { question: "How do you create a gradient background in CSS3?", answer: "Using linear-gradient or radial-gradient", category: "CSS3" },
  { question: "Which property is used to change the opacity of an element?", answer: "opacity", category: "CSS3" },
  { question: "How do you animate an element in CSS3?", answer: "Using @keyframes and the animation property", category: "CSS3" },
  { question: "Which CSS property is used to change the spacing between letters?", answer: "letter-spacing", category: "CSS3" },
  { question: "What does the 'box-sizing' property do?", answer: "Defines how the total width and height of an element is calculated", category: "CSS3" },
  { question: "How do you make an element float to the right in CSS?", answer: "float: right;", category: "CSS3" },
  { question: "Which property is used to set the stacking order of elements?", answer: "z-index", category: "CSS3" },
  { question: "How do you hide an element but keep its space in the layout?", answer: "visibility: hidden;", category: "CSS3" },
  { question: "Which property is used to add a shadow to a box?", answer: "box-shadow", category: "CSS3" },
  { question: "How do you make a list display horizontally in CSS?", answer: "Using display: flex or display: inline", category: "CSS3" },
  { question: "Which property is used to control the size of the background image?", answer: "background-size", category: "CSS3" },
  { question: "How do you select only the first child element in CSS?", answer: ":first-child", category: "CSS3" },
  { question: "Which property is used to set the maximum width of an element?", answer: "max-width", category: "CSS3" },
  { question: "How do you apply a style only when hovering over an element?", answer: ":hover pseudo-class", category: "CSS3" },
  { question: "Which CSS property is used to control the order of flex items?", answer: "order", category: "CSS3" },
  { question: "How do you make an element stick to the top of the page when scrolling?", answer: "position: sticky; top: 0;", category: "CSS3" },
  { question: "Which property is used to control the transition effect between two states?", answer: "transition", category: "CSS3" },
  { question: "What does CSS stand for?", answer: "Cascading Style Sheets", category: "CSS3" },
  { question: "How do you apply a CSS style to an HTML element?", answer: "Using a selector", category: "CSS3" },
  { question: "What is the correct CSS syntax to change the font size?", answer: "font-size: 16px;", category: "CSS3" },
  { question: "How do you add a comment in CSS?", answer: "/* This is a comment */", category: "CSS3" },
  { question: "Which property is used to change the background color?", answer: "background-color", category: "CSS3" },
  { question: "How do you select an element with class 'example' in CSS?", answer: ".example", category: "CSS3" },
  { question: "How do you select an element with id 'main' in CSS?", answer: "#main", category: "CSS3" },
  { question: "Which CSS property changes text color?", answer: "color", category: "CSS3" },
  { question: "Which CSS property sets the background color?", answer: "background-color", category: "CSS3" },
  { question: "How do you center a block element in CSS?", answer: "margin: auto;", category: "CSS3" },
  { question: "How do you apply a class to an element in CSS?", answer: ".classname", category: "CSS3" },
  { question: "What does CSS stand for?", answer: "Cascading Style Sheets", category: "CSS3" },
  { question: "How do you make text bold in CSS?", answer: "font-weight: bold;", category: "CSS3" },
  { question: "Which property is used to change the font size?", answer: "font-size", category: "CSS3" },
  { question: "What does the 'display: flex' property do?", answer: "Enables flexbox layout", category: "CSS3" },
  { question: "How do you select all <p> elements inside a <div> in CSS?", answer: "div p", category: "CSS3" },
  { question: "Which property adds space inside an element's border?", answer: "padding", category: "CSS3" },
  { question: "Which CSS property is used to control the spacing between words?", answer: "word-spacing", category: "CSS3" },
  { question: "How do you make an element fully transparent in CSS?", answer: "opacity: 0;", category: "CSS3" },
  { question: "Which property is used to set the minimum height of an element?", answer: "min-height", category: "CSS3" },
  { question: "How do you create a circle using CSS?", answer: "border-radius: 50%;", category: "CSS3" },
  { question: "Which property is used to specify the style of the list item marker?", answer: "list-style-type", category: "CSS3" },
  { question: "How do you make a background image repeat only horizontally?", answer: "background-repeat: repeat-x;", category: "CSS3" },
  { question: "Which CSS property is used to specify the space between the border and the content?", answer: "padding", category: "CSS3" },
  { question: "How do you make an element fixed at the bottom of the page?", answer: "position: fixed; bottom: 0;", category: "CSS3" },
  { question: "Which property is used to specify the transparency of an element's background?", answer: "background-color: rgba()", category: "CSS3" },
  { question: "How do you select every even row in a table using CSS?", answer: "tr:nth-child(even)", category: "CSS3" },
  { question: "Which property is used to control the direction of text?", answer: "direction", category: "CSS3" },
  { question: "How do you make an element invisible and remove it from the layout?", answer: "display: none;", category: "CSS3" },
  { question: "Which CSS property is used to add rounded corners to an element?", answer: "border-radius", category: "CSS3" },
  { question: "How do you apply multiple classes to a single HTML element in CSS?", answer: "Separate class names with spaces in the class attribute", category: "CSS3" },
  { question: "Which property is used to set the distance between the borders of adjacent cells?", answer: "border-spacing", category: "CSS3" },
  { question: "How do you make a background image cover the entire element?", answer: "background-size: cover;", category: "CSS3" },
  { question: "Which CSS property is used to specify the style of the cursor?", answer: "cursor", category: "CSS3" },
  { question: "How do you apply a style to all elements of a specific type?", answer: "Use the element selector (e.g., p { ... })", category: "CSS3" },
  { question: "Which property is used to align items along the main axis in flexbox?", answer: "justify-content", category: "CSS3" },
  { question: "How do you set a background image to not repeat?", answer: "background-repeat: no-repeat;", category: "CSS3" }
];

let score = 0; // User's score
let current = 0; // Index of current card
let filteredCards = [...flashcards]; // Cards filtered by category
let currentCategory = 'all'; // Current selected category

// ====== DOM Element References ======
const card = document.getElementById("flashcard");
const front = card.querySelector(".front");
const back = card.querySelector(".back");
const scoreDisplay = document.getElementById("score");
const categorySelect = document.getElementById("categorySelect");

// ====== Local Storage Functions ======
/**
 * Saves the current flashcards array and score to localStorage.
 */
function saveToLocalStorage() {
  localStorage.setItem('flashcards', JSON.stringify(flashcards));
  localStorage.setItem('score', score);
}

/**
 * Loads flashcards and score from localStorage if available.
 */
function loadFromLocalStorage() {
  const stored = localStorage.getItem('flashcards');
  const storedScore = localStorage.getItem('score');
  if (stored) flashcards = JSON.parse(stored);
  if (storedScore) score = parseInt(storedScore, 10);
}

// ====== Flashcard Rendering and Choice Logic ======
/**
 * Renders the current flashcard's question and answer, updates score, and calls renderChoices.
 */
function renderCard() {
  if (!filteredCards.length) {
    front.textContent = "No cards!";
    back.textContent = "";
    document.getElementById('choices').innerHTML = ''; // Clear choices
    return;
  }
  const cardObj = filteredCards[current]; // Get the current card object
  // Set the front and back text
  front.textContent = cardObj.question;
  back.textContent = cardObj.answer;
  scoreDisplay.textContent = score; // Update score display
  // Clear previous choices
  renderChoices(); 
}

/**
 * Generates an array of three choices (one correct, two random wrong) for the current card.
 * If cardObj.options exists, uses those options.
 */
function getRandomChoices(correctAnswer, category, cardObj) {
  if (cardObj && Array.isArray(cardObj.options) && cardObj.options.length === 3) {
    // Shuffle the options so the correct answer isn't always first
    return cardObj.options.slice().sort(() => Math.random() - 0.5);
  }
  // Otherwise, generate random options as before
  let pool = flashcards.filter(c => c.category === category && c.answer !== correctAnswer).map(c => c.answer);
  // If not enough wrong answers, add from other categories
  while (pool.length < 2) {
    let extra = flashcards.filter(c => c.answer !== correctAnswer && !pool.includes(c.answer)).map(c => c.answer);
    pool = pool.concat(extra);
    if (pool.length === 0) break;
  }
  // Shuffle and pick two wrong answers
  pool = pool.sort(() => Math.random() - 0.5).slice(0, 2);
  // Insert correct answer and shuffle
  const choices = [...pool, correctAnswer].sort(() => Math.random() - 0.5);
  return choices;
}

/**
 * Creates and displays multiple-choice buttons for the current card.
 */
function renderChoices() {
  const choicesDiv = document.getElementById('choices'); // Get the choices div
  // Clear previous choices
  choicesDiv.innerHTML = '';
  if (!filteredCards.length) return; // No cards to show
  // Get the current card object
  const cardObj = filteredCards[current];
  // Pass the card object to getRandomChoices for possible predefined options
  const choices = getRandomChoices(cardObj.answer, cardObj.category, cardObj);
  // Create buttons for each choice
  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice;
    btn.onclick = () => handleChoice(choice);
    choicesDiv.appendChild(btn);
  });
}

/**
 * Handles user answer selection, updates score, flips card, and moves to the next card or shows completion.
 */
function handleChoice(selected) {
  const cardObj = filteredCards[current];// Get the current card object
  // Check if the selected answer is correct
  card.classList.add('flipped');
  setTimeout(() => {
    if (selected === cardObj.answer) {
      score++;
    } else {
      score--;
    }
    scoreDisplay.textContent = score; // Update score display
    // Save the score to localStorage
    saveToLocalStorage();
    setTimeout(() => {
      card.classList.remove('flipped'); // Flip back the card
      // Check if there are more cards to show
      if (current < filteredCards.length - 1) {
        current++;
        renderCard();
      } else {
        // Show completion message
        front.textContent = "Quiz complete!";
        back.textContent = "";
        document.getElementById('choices').innerHTML = '';
      }
    }, 1200); // 1.2s delay before flipping back
  }, 600); // 0.6s delay before checking the answer
}

// ====== Category Filtering and Shuffling ======
/**
 * Filters flashcards by selected category, shuffles them, and renders the first card.
 */
function filterByCategory(category) {
  currentCategory = category;
  filteredCards = (category === 'all')
    ? [...flashcards]
    : flashcards.filter(c => c.category === category);
  // Shuffle after filtering
  for (let i = filteredCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Shuffle the filtered cards
    [filteredCards[i], filteredCards[j]] = [filteredCards[j], filteredCards[i]];
  }
  current = 0;
  renderCard();
}

/**
 * Randomizes the order of filtered cards and renders the first card.
 */
function shuffleCards() {
  for (let i = filteredCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredCards[i], filteredCards[j]] = [filteredCards[j], filteredCards[i]];
  }
  current = 0;
  renderCard();
}

// ====== Flashcard CRUD Operations ======
// Add new flashcard on form submit
document.getElementById('cardForm').onsubmit = function(e) {
  e.preventDefault();
  const q = document.getElementById('questionInput').value.trim(); // Get the question input
  const a = document.getElementById('answerInput').value.trim(); // Get the answer input
  const c = document.getElementById('categoryInput').value; // Get the category input
  // Check if the question, answer, and category are valid
  if (q && a && c) {
    flashcards.push({ question: q, answer: a, category: c });
    saveToLocalStorage();
    filterByCategory(currentCategory); // Refresh the filtered cards
    this.reset(); // Reset the form
  }
};

// Delete the current flashcard
document.getElementById('deleteBtn').onclick = function() {
  if (!filteredCards.length) return; // No cards to delete
  const idx = flashcards.findIndex(c => c === filteredCards[current]); // Find the index of the current card
  if (idx > -1) flashcards.splice(idx, 1); // Remove the card from flashcards
  saveToLocalStorage(); // Save to localStorage
  filterByCategory(currentCategory); // Refresh the filtered cards  
};

// Reset all flashcards and score
document.getElementById('resetBtn').onclick = function() {
  if (confirm("Are you sure you want to delete all flashcards?")) {
    flashcards = [];
    score = 0;
    saveToLocalStorage();
    filterByCategory('all'); // Refresh the filtered cards
  }
};

// Edit the current flashcard
document.getElementById('editBtn').onclick = function() {
  if (!filteredCards.length) return; // No cards to edit
  // Show the edit form
  document.getElementById('editForm').style.display = 'flex';
  const cardObj = filteredCards[current]; // Get the current card object
  // Set the values in the edit form
  document.getElementById('editQuestion').value = cardObj.question;
  document.getElementById('editAnswer').value = cardObj.answer;
  document.getElementById('editCategory').value = cardObj.category;
};

// Cancel editing the flashcard
document.getElementById('cancelEdit').onclick = function() {
  document.getElementById('editForm').style.display = 'none'; // Hide the edit form
};

// ====== Edit Flashcard Dropdown Logic ======

// Populate questions dropdown based on selected category
document.getElementById('editCategorySelect').addEventListener('change', function() {
  const category = this.value;
  const questionSelect = document.getElementById('editQuestionSelect');
  questionSelect.innerHTML = '<option value="">Select Question</option>';
  if (!category) return;
  flashcards
    .filter(card => card.category === category)
    .forEach((card, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = card.question;
      questionSelect.appendChild(opt);
    });
});

// When a question is selected, fill the edit fields
document.getElementById('editQuestionSelect').addEventListener('change', function() {
  const category = document.getElementById('editCategorySelect').value;
  const idx = this.value;
  if (category && idx !== "") {
    const filtered = flashcards.filter(card => card.category === category);
    const card = filtered[idx];
    document.getElementById('editQuestion').value = card.question;
    document.getElementById('editAnswer').value = card.answer;
    document.getElementById('editCategory').value = card.category;
    // Store the index for saving changes
    document.getElementById('editForm').dataset.editIdx = idx;
    document.getElementById('editForm').dataset.editCat = category;
  }
});

// Save changes to the edited flashcard
document.getElementById('editForm').onsubmit = function(e) {
  e.preventDefault();
  const category = this.dataset.editCat;
  const idx = this.dataset.editIdx;
  if (category && idx !== undefined) {
    const filtered = flashcards.filter(card => card.category === category);
    const card = filtered[idx];
    card.question = document.getElementById('editQuestion').value.trim();
    card.answer = document.getElementById('editAnswer').value.trim();
    card.category = document.getElementById('editCategory').value;
    saveToLocalStorage();
    filterByCategory(currentCategory);
    this.reset();
    this.style.display = 'none';
  }
};

// ====== Flashcard Navigation and Flip ======
// Go to the next flashcard
document.getElementById('nextBtn').onclick = function() {
  if (!filteredCards.length) return; // No cards to navigate
  if (current < filteredCards.length - 1) {
    current++;
    renderCard();
  }
};

// Go to the previous flashcard
document.getElementById('prevBtn').onclick = function() {
  if (!filteredCards.length) return; // No cards to navigate
  if (current > 0) {
    current--;
    renderCard();
  }
};

// Flip the card manually
document.getElementById('flipBtn').onclick = function() {
  card.classList.toggle('flipped'); // Toggle the flipped class
};

// ====== Category Filter and Shuffle Button ======
// Change category filter
categorySelect.onchange = function() {
  filterByCategory(this.value); // Filter cards by selected category
};

// Shuffle button click handler
document.getElementById('shuffleBtn').onclick = shuffleCards;

// Score reset button functionality
document.getElementById('scoreResetBtn').onclick = function() {
  score = 0;
  scoreDisplay.textContent = score; // Update score display
  saveToLocalStorage();
};

// ====== TIMER FEATURE ======
let timerInterval = null;
let timerSeconds = 0;

const timerInputMin = document.getElementById('timerInputMin');
const timerInputSec = document.getElementById('timerInputSec');
const timerSetBtn = document.getElementById('timerSetBtn');
const timerDisplay = document.getElementById('timerDisplay');
const timerResetBtn = document.getElementById('timerResetBtn');

/**
 * Converts seconds to MM:SS string format for the timer.
 */
function formatTime(secs) {
  const m = String(Math.floor(secs / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  return `${m}:${s}`;
}

/**
 * Updates the timer display with the current time.
 */
function updateTimerDisplay() {
  timerDisplay.textContent = formatTime(timerSeconds);
}

/**
 * Starts the countdown timer and alerts when time is up.
 */
function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timerSeconds > 0) {
      timerSeconds--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      timerDisplay.textContent = "00:00";
      alert("Your time is up!");
    }
  }, 1000);
}

// Set timer from input fields
timerSetBtn.addEventListener('click', () => {
  const min = parseInt(timerInputMin.value, 10) || 0;
  const sec = parseInt(timerInputSec.value, 10) || 0;
  timerSeconds = min * 60 + sec;
  updateTimerDisplay();
  if (timerSeconds > 0) startTimer();
});

// Reset timer to zero
timerResetBtn.addEventListener('click', () => {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
  timerSeconds = 0;
  updateTimerDisplay();
  timerInputMin.value = 0;
  timerInputSec.value = 0;
});

// Initialize timer display on page load
updateTimerDisplay();

// ====== Dark/Light Mode Toggle ======
const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '☀️ Light Mode';
  } else {
    themeToggleBtn.textContent = '🌙 Dark Mode';
  }
});

// ====== App Initialization ======
// On page load: load data and render first card
window.onload = function() {
  loadFromLocalStorage(); // Load flashcards and score from localStorage
  filterByCategory('all'); // Populate the category select options and render first card
};

// ====== Add/Edit Flashcard Form Visibility Logic ======
document.addEventListener('DOMContentLoaded', function() {
  const showAddFormBtn = document.getElementById('showAddFormBtn');
  const showEditFormBtn = document.getElementById('showEditFormBtn');
  const addFormPart = document.getElementById('addFormPart');
  const editFormPart = document.getElementById('editFormPart');
  const cancelEdit = document.getElementById('cancelEdit');

  // Hide both forms on load
  if (addFormPart) addFormPart.style.display = 'none';
  if (editFormPart) editFormPart.style.display = 'none';

  if (showAddFormBtn && addFormPart && editFormPart) {
    showAddFormBtn.onclick = function() {
      addFormPart.style.display = addFormPart.style.display === 'none' ? 'block' : 'none';
      editFormPart.style.display = 'none';
    };
  }
  if (showEditFormBtn && addFormPart && editFormPart) {
    showEditFormBtn.onclick = function() {
      editFormPart.style.display = editFormPart.style.display === 'none' ? 'block' : 'none';
      addFormPart.style.display = 'none';
    };
  }
  if (cancelEdit && editFormPart) {
    cancelEdit.onclick = function() {
      editFormPart.style.display = 'none';
    };
  }
});

