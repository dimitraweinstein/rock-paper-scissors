// IMPORT MODULES under test here:
import { userWin, userLose, gameDraw, randomThrow } from '../utils.js';

const test = QUnit.test;

test('Should show that user wins if chosen agains computer', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = userWin('Ro', 'Bo');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('should show that user loses against computer', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = userLose('Bo', 'Ro');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('Should show that the game is a draw if user and computer choose the same number', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = gameDraw('Bo', 'Bo');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Should show return a string as computers choice on game results', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'string';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = randomThrow(3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
