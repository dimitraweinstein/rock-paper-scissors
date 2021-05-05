## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## HTML Setup

1) Radio Buttons
    -Rock
    -Paper
    -Scissors
    -Why: To give the user something to input

2) Submit Button
    -button tags
    -event listener
        -Why: initialize record of user change state 
    
3) 4 divs
    -Results (win/lose)
    -# total games played
    -# total games won
    -# total losses `total - wins`
        -Why: Show the user record of state

4) Reset Button
    -button tags, event listener
        -Why: For user to restart game from scratch, clean win-loss record.

## State
1)Computer's choice (rock, paper, scissors)
2)Total # games
3) total # wins
4) Total # losses
5) Stretch: Success %


## Events

On Submit button click:
    - Get computer's choice
        -change computer's choice state
    -Get the user's choice from the radio button
    -compare user and computer choice
    -update state
        -wins
        -losses
        -games played
    -Present results in the DOM