// Guess-the-number: day 36 exercise and homework for the holidays.

// Step 1: make the computer think of a number between 1 and 100. Hint: generate random number
// Step 2: allow the user to make a guess (using the "readline" module like below), and say whether it's correct, high, or low. Exit afterwards.
// Step 3: allow the user to guess repeatedly, until they get it right. When they get it right, the process should exit.
// Step 4: if the user's guess is not off by more than 10, tell them that their guess was close. In addition to this, still tell them whether it was high or low.
// Step 5: keep track of the number of guesses, and keep the user informed about it (in the prompt). Also inform the user of the number of guesses they took when you get the number right.
// Step 6: handle errors, i.e. invalid user inputs. Hint: parseInt() will return NaN for non-integer inputs. You can check for NaN-ness using the isNaN() function.
// Step 7: accept "exit", "quit" or "q" as a valid user "guess", and terminate the program. Before doing so, tell the user what the solution would have been. Hint: you can use process.exit().
// Step 8: add a cheat code that will give a user a strong hint or tells the solution. Optionally add multiple cheat codes.
// Step 9: at random times, print a taunt for the user. You'll have to cancel the taunt when the user gets it right, otherwise the process will never exit!
// Step 10: don't use the same taunt always, but have a number of different taunts, and always choose the taunt to display randomly.
// Step 11: whenever the user enters a valid guess, reschedule the taunt. You don't want to bother the user if he's guessing quickly enough!
// Step 12: before starting the game, prompt the user for their name and remember it (i.e. save it into a global variable).
// Step 13: when the game ends because the user won (i.e. got the number right), save the user's name and number of guesses in a file. The format of the file is up to you, but I recommend JSON (so you can easily use JSON.parse() and JSON.stringify()). For more challenge and fun, invent your own file format! If the user won after using a cheat code, adjust their "score" negatively, e.g. by adding 50 to the number of guesses.
// Step 14: before prompting the user for their name at the beginning, load the previous high scores, and display them to the user. Note that winning from fewer guesses is better than winning from more guesses, so the entries with the fewer number of guesses should be higher on the highscore table than the entries with higher number of guesses.

// Help for generating random integers between a minimum and maximum:

const readline = require('readline');

function getRandomIntBetween(min, max) {
 	return Math.floor(min + (Math.random() * (max - min)));
}

const generatedNum = getRandomIntBetween(1, 100);

// Help for reading user input from the terminal:

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function handleUserInput(userInput) {
	let p_userInput = parseInt(userInput);
	let diff = Math.abs(generatedNum - p_userInput);

	if (p_userInput < generatedNum) {
		console.log("You went lower");
		promptUserInput();
	} else if (p_userInput > generatedNum) {
		console.log("You went higher");
		promptUserInput();
	} else if (p_userInput === generatedNum) {
		console.log("right!");
		rl.close();
	}
}

function promptUserInput() {
  rl.question('Make a guess: ', handleUserInput);
}

console.log("I've generated a new number from 1 to 100 and you must guess it!");
console.log(generatedNum);
promptUserInput();


// Hint: use parseInt() to turn the user's guess from a string to an integer. parseInt() will return NaN if the user's input was not a valid integer. You can check for this using the isNaN() function. You cannot compare for equality with NaN, i.e. NaN !== NaN, but isNaN(NaN) === true.