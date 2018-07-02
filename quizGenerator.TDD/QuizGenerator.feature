#As a quiz creator
Given I navigate to the application url and click on the Add Questions menu item
Then I should be taken to the Add Questions page

#As a quiz creator
Given I am on the Add Questions page
When I type a question into the question and answer text boxes
And I click on add question button
Then the question and answer are stored and I am shown the 'Question successfully added' message
And the question text box is cleared
And the answer text box is cleared

As a quiz taker
Given that I navigate to the application url and click on the Take Quiz menu item
Then I should be taken to the Take Quiz page
And a random question should be displayed
And the 'show answer' button should be displayed
And the 'show next question' button should be displayed

As a quiz taker
Given I am on the Take Quiz page
When I click on the 'show answer' button
Then the answer should be displayed

As a quiz taker
Given I am on the Take Quiz page
When I click on the 'show next question' button
Then another question should be shown at random
