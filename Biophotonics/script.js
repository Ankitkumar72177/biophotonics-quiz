// JavaScript logic previously in script.js
document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const weekSelectionDiv = document.getElementById('week-selection');
    const weekCheckboxesDiv = document.getElementById('week-checkboxes');
    const selectAllCheckbox = document.getElementById('select-all-weeks');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const selectionError = document.getElementById('selection-error');
    // Mode selection radio buttons reference
    const orderModeRadios = document.querySelectorAll('input[name="orderMode"]');

    const quizAreaDiv = document.getElementById('quiz-area');
    const questionCounterSpan = document.getElementById('question-counter');
    const currentScoreSpan = document.getElementById('current-score');
    const questionTextH2 = document.getElementById('question-text');
    const optionsContainerDiv = document.getElementById('options-container');
    const feedbackContainerDiv = document.getElementById('feedback-container');
    const feedbackTextP = document.getElementById('feedback-text');
    const explanationTextP = document.getElementById('explanation-text');
    const answerError = document.getElementById('answer-error');
    const submitAnswerBtn = document.getElementById('submit-answer-btn');
    const goHomeBtn = document.getElementById('go-home-btn'); // Get the new button

    const resultsAreaDiv = document.getElementById('results-area');
    const finalScoreP = document.getElementById('final-score');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');

    // --- Quiz State ---
    let selectedQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let answerSubmitted = false;

    // --- Functions ---

    // Fisher-Yates (Knuth) Shuffle Algorithm
    function shuffleArray(array) {
        // Create a copy to avoid modifying the original array directly
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
        }
        return shuffledArray; // Return the shuffled copy
    }


    // Populate Week Selection Checkboxes
    function populateWeekSelection() {
        weekCheckboxesDiv.innerHTML = ''; // Clear previous checkboxes
        quizData.forEach((weekData, index) => {
            const weekId = `week-${index}`;
            const checkboxContainer = document.createElement('div');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = weekId;
            checkbox.value = index; // Store the index of the week in quizData
            checkbox.classList.add('week-checkbox');

            const label = document.createElement('label');
            label.htmlFor = weekId;
            label.textContent = weekData.week;

            checkboxContainer.appendChild(checkbox);
            checkboxContainer.appendChild(label);
            weekCheckboxesDiv.appendChild(checkboxContainer);
        });
         // Add listener for individual checkboxes to potentially uncheck 'Select All'
         document.querySelectorAll('.week-checkbox').forEach(cb => {
             cb.addEventListener('change', () => {
                 if (!cb.checked) {
                     selectAllCheckbox.checked = false;
                 } else {
                     // Check if all are now checked
                     const allCheckboxes = document.querySelectorAll('.week-checkbox');
                     const allChecked = Array.from(allCheckboxes).every(c => c.checked);
                     if(allChecked){
                         selectAllCheckbox.checked = true;
                     }
                 }
             });
         });
    }

    // Handle Select/Deselect All
    function handleSelectAll() {
        const allCheckboxes = document.querySelectorAll('.week-checkbox');
        allCheckboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;
        });
    }

    // Start the Quiz
    function startQuiz() {
        selectedQuestions = [];
        const selectedWeekCheckboxes = document.querySelectorAll('.week-checkbox:checked');
        const isOnlyWeek1Selected = selectedWeekCheckboxes.length === 1 && parseInt(selectedWeekCheckboxes[0].value) === 0; // Check if ONLY Week 1 (index 0) is selected

        if (selectedWeekCheckboxes.length === 0) {
            selectionError.classList.remove('hidden');
            return;
        }
        selectionError.classList.add('hidden');

        selectedWeekCheckboxes.forEach(checkbox => {
            const weekIndex = parseInt(checkbox.value);
            // Add a copy of questions to avoid modifying original data
            const questionsToAdd = [...quizData[weekIndex].questions];
            selectedQuestions.push(...questionsToAdd);
        });

        // Handle Week 1 question count *before* potential shuffling
        if (isOnlyWeek1Selected) {
             const week1OriginalQuestions = quizData[0].questions;
             const lastWeek1QuestionText = week1OriginalQuestions[week1OriginalQuestions.length - 1].question;
             let foundLast = false;
             selectedQuestions = selectedQuestions.filter(q => {
                 if (q.question === lastWeek1QuestionText && !foundLast) {
                     foundLast = true;
                     return false; // Exclude this question
                 }
                 return true; // Include all other questions
             });
        }

        // Check selected order mode and shuffle questions if 'random'
        const selectedMode = document.querySelector('input[name="orderMode"]:checked').value;
        if (selectedMode === 'random') {
            // Shuffle the array of question *objects*
            selectedQuestions = shuffleArray(selectedQuestions);
        }

        // Reset state and display
        currentQuestionIndex = 0;
        score = 0;
        answerSubmitted = false;

        weekSelectionDiv.classList.add('hidden');
        resultsAreaDiv.classList.add('hidden');
        quizAreaDiv.classList.remove('hidden');
        submitAnswerBtn.textContent = 'Submit Answer';
        submitAnswerBtn.disabled = false; // Ensure button is enabled


        displayQuestion();
        updateScoreDisplay();
    }

    // Display Current Question and Options
    function displayQuestion() {
        answerSubmitted = false; // Reset submission state for the new question
        feedbackContainerDiv.classList.add('hidden'); // Hide feedback from previous question
        answerError.classList.add('hidden'); // Hide error message
        submitAnswerBtn.textContent = 'Submit Answer'; // Reset button text
        submitAnswerBtn.disabled = false; // Re-enable button


        if (currentQuestionIndex >= selectedQuestions.length) {
            showResults();
            return;
        }

        const currentQuestion = selectedQuestions[currentQuestionIndex];
        questionTextH2.textContent = currentQuestion.question;
        optionsContainerDiv.innerHTML = ''; // Clear previous options

        // Update counter
        questionCounterSpan.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;

        // **MODIFICATION**: Shuffle the options *for this specific question* before displaying
        const optionsToDisplay = shuffleArray(currentQuestion.options); // Shuffle a copy

        optionsToDisplay.forEach((option, index) => {
            const optionId = `option-${index}`;

            // Use a label as the clickable element
            const label = document.createElement('label');
            label.htmlFor = optionId;
            label.classList.add('option');

            const radioInput = document.createElement('input');
            radioInput.type = 'radio';
            radioInput.id = optionId;
            radioInput.name = 'quizOption'; // Group radios
            radioInput.value = option; // The value *is* the option text

            label.appendChild(radioInput); // Input inside label
            label.appendChild(document.createTextNode(option)); // Text node after input

            // Add event listener to the label for visual feedback
             label.addEventListener('click', () => {
                 // Remove 'selected' class from all options first
                 document.querySelectorAll('#options-container .option').forEach(optLabel => {
                     optLabel.classList.remove('selected');
                 });
                 // Add 'selected' class to the clicked label
                 label.classList.add('selected');
                 // Clear error if user selects an option
                  answerError.classList.add('hidden');
             });

            optionsContainerDiv.appendChild(label);
        });
    }

     // Check Selected Answer
     function checkAnswer() {
         const selectedOptionInput = document.querySelector('input[name="quizOption"]:checked');

         if (!selectedOptionInput) {
             answerError.classList.remove('hidden');
             return;
         }
         answerError.classList.add('hidden');

         answerSubmitted = true; // Mark as submitted
         submitAnswerBtn.disabled = true; // Disable submit after checking once per question


         const selectedValue = selectedOptionInput.value;
         const currentQuestion = selectedQuestions[currentQuestionIndex];
         const correctAnswer = currentQuestion.correctAnswer;

         // Provide feedback
         explanationTextP.innerHTML = `<b>Explanation:</b> ${currentQuestion.explanation || 'No explanation provided.'}`; // Use innerHTML if explanation has formatting
         feedbackContainerDiv.classList.remove('hidden', 'correct', 'incorrect'); // Show feedback area

         // Style the selected option label based on correctness
         const selectedLabel = selectedOptionInput.parentElement;

         if (selectedValue === correctAnswer) {
             score++;
             feedbackTextP.textContent = 'Correct!';
             feedbackContainerDiv.classList.add('correct');
             selectedLabel.style.borderColor = '#5cb85c'; // Green border for correct label
             selectedLabel.style.backgroundColor = '#e6ffed';
         } else {
             feedbackTextP.textContent = `Incorrect. The correct answer was: ${correctAnswer}`;
             feedbackContainerDiv.classList.add('incorrect');
             selectedLabel.style.borderColor = '#d9534f'; // Red border for incorrect label
             selectedLabel.style.backgroundColor = '#f2dede';

             // Highlight the actual correct answer's label
             const correctInput = Array.from(document.querySelectorAll('input[name="quizOption"]')).find(input => input.value === correctAnswer);
             if(correctInput) {
                  correctInput.parentElement.style.backgroundColor = '#dff0d8'; // Light green background for correct label
                  correctInput.parentElement.style.borderColor = '#5cb85c';
             }
         }

         updateScoreDisplay();

         // Disable all options after submission
         document.querySelectorAll('input[name="quizOption"]').forEach(input => {
            input.disabled = true;
            // Make labels non-clickable after submission
            const parentLabel = input.parentElement;
            if (parentLabel) {
                 parentLabel.style.cursor = 'default';
                 parentLabel.onclick = (e) => e.preventDefault(); // Prevent further clicks changing selection state visually
            }
         });


         // Change button text to "Next Question" or "Show Results"
        if (currentQuestionIndex < selectedQuestions.length - 1) {
            submitAnswerBtn.textContent = 'Next Question';
            submitAnswerBtn.disabled = false; // Re-enable for 'Next' action
        } else {
            submitAnswerBtn.textContent = 'Show Results';
            submitAnswerBtn.disabled = false; // Re-enable for 'Results' action
        }
    }

    // Handle Submit/Next Button Click
    function handleSubmitClick() {
        if (!answerSubmitted) { // If answer hasn't been checked yet for this question
            checkAnswer();
        } else { // If answer has been checked, button means "Next" or "Results"
            currentQuestionIndex++;
            if (currentQuestionIndex < selectedQuestions.length) {
                // Reset styles potentially applied during feedback
                 document.querySelectorAll('#options-container .option').forEach(optLabel => {
                     optLabel.style.borderColor = ''; // Reset border
                     optLabel.style.backgroundColor = ''; // Reset background
                     optLabel.style.cursor = 'pointer'; // Restore cursor
                     optLabel.onclick = null; // Remove the preventDefault handler
                 });
                displayQuestion();
            } else {
                showResults();
            }
        }
    }


    // Update Score Display
    function updateScoreDisplay() {
        currentScoreSpan.textContent = `Score: ${score}`;
    }

    // Show Final Results
    function showResults() {
        quizAreaDiv.classList.add('hidden');
        resultsAreaDiv.classList.remove('hidden');
        const percentage = selectedQuestions.length > 0 ? ((score / selectedQuestions.length) * 100).toFixed(1) : 0;
        finalScoreP.textContent = `You scored ${score} out of ${selectedQuestions.length} (${percentage}%)`;
    }

    // Restart the Quiz Process (Go back to week selection)
    function restartQuiz() {
        // Reset styles potentially applied during feedback before hiding
         document.querySelectorAll('#options-container .option').forEach(optLabel => {
             optLabel.style.borderColor = ''; // Reset border
             optLabel.style.backgroundColor = ''; // Reset background
             optLabel.style.cursor = 'pointer'; // Restore cursor
             optLabel.onclick = null; // Remove the preventDefault handler
         });

        resultsAreaDiv.classList.add('hidden');
        quizAreaDiv.classList.add('hidden');
        weekSelectionDiv.classList.remove('hidden');
        // Deselect all weeks for a fresh start
        selectAllCheckbox.checked = false;
        document.querySelectorAll('.week-checkbox').forEach(cb => cb.checked = false);
        // Reset mode selection to default (ordered)
        document.getElementById('mode-ordered').checked = true;
        selectionError.classList.add('hidden');
        answerError.classList.add('hidden');

         // Reset core quiz state just in case
         selectedQuestions = [];
         currentQuestionIndex = 0;
         score = 0;
         answerSubmitted = false;
    }


    // --- Event Listeners ---
    selectAllCheckbox.addEventListener('change', handleSelectAll);
    startQuizBtn.addEventListener('click', startQuiz);
    submitAnswerBtn.addEventListener('click', handleSubmitClick);
    restartQuizBtn.addEventListener('click', restartQuiz);
    goHomeBtn.addEventListener('click', restartQuiz); // Make Go Home button use the restart logic

    // --- Initial Setup ---
    populateWeekSelection();

}); // End DOMContentLoaded