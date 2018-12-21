# !8Ball

## Usage:

`!8ball <question>`

* Example: !8ball "Will I get laid tonight?"

### Pseudo-Code:

*Only does yes or no questions.*

#### Checks if its a question:

**What constitutues a question?**
* GENERALLY THE FIRST WORD IN THE SENTENCE

#### Yes/No Questions:

##### Trigger Words: Is, Are, Can

* RESULT: Generate something that says yes or no
	
		Example: "It is possible", "Not a chance"

#### Other Questions:

##### Trigger Words: Who, What, Where, When, How

* RESULT: Avoid the question
	
		Example: "Go ask Siri", "Do I look like Cortana?"

##### Else:

* RESULT: Give them an error message
    
        Example: "Please ask me a question!"

*ALL 8 BALL STATEMENTS ARE PREWRITTEN AND READ FROM A TEXTFILE*
