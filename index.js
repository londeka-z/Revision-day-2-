    // Array to store all scores
    let scores = [];

    // Get HTML elements
    const scoreInput = document.getElementById("scoreInput");
    const addBtn = document.getElementById("addBtn");
    const clearBtn = document.getElementById("clearBtn");
    const scoreList = document.getElementById("scoreList");
    const testCount = document.getElementById("testCount");
    const average = document.getElementById("average");
    const bestScore = document.getElementById("bestScore");
    const lowestScore = document.getElementById("lowestScore");
    const gradeDisplay = document.getElementById("gradeDisplay");
    const starDisplay = document.getElementById("starDisplay");

    // Add the score input to the scores array

    // ============================================
    // TODO 1: Write the addScore() function
    // ============================================
    // This function should:
    // 1. Get the value from scoreInput
    // 2. Check if it's a valid number (0-100)
    //    - If empty: show alert "Please enter a score"
    //    - If < 0 or > 100: show alert "Score must be between 0-100"
    //    - If valid: add it to the scores array
    // 3. Clear the input field (set value to "")
    // 4. Call updateResults() function
    
    function addScore() {

      // YOUR CODE HERE
     let score = Number(scoreInput.value)

    if(!score){
        alert("Please Enter Score")
    }
    else if(score < 0 || score > 100){
        alert("Score must be between 0-100")
    }
    else{
        scores.push(score)
        scoreInput.value = ""
    }

    updateResults()
    
    }

    // ============================================
    // TODO 2: Write the clearAllScores() function
    // ============================================
    // This function should:
    // 1. Empty the scores array (scores = [])
    // 2. Clear the scoreInput field
    // 3. Call updateResults() function


    
    function clearAllScores() {
      // YOUR CODE HERE
    scores = [];
    scoreInput.value = "";
    updateResults()
   
    }

    // ============================================
    // TODO 3: Write the updateResults() function
    // ============================================
    // This is the MAIN function that does most of the work
    // It should:
    //
    // PART A: Update the Score List
    // - Clear the scoreList div
    // - If scores array is empty: show "No scores yet..."
    // - If scores has values: 
    //   * LOOP through scores array (use for loop)
    //   * For each score at index i, create HTML:
    //     <div class="score-item">[index+1]. [score]</div>
    //   * Add it to scoreList
    //
    // PART B: Update the Statistics
    // - Update testCount to: scores.length
    // - If scores is empty: set average, bestScore, lowestScore to "--"
    // - If scores has values:
    //   * Calculate AVERAGE:
    //     - Create a variable: let sum = 0
    //     - LOOP through scores and ADD each one to sum
    //     - average = sum / scores.length
    //   * Find BEST SCORE:
    //     - Create a variable: let maxScore = scores[0]
    //     - LOOP through scores
    //     - If current score > maxScore, update maxScore
    //   * Find LOWEST SCORE:
    //     - Create a variable: let minScore = scores[0]
    //     - LOOP through scores
    //     - If current score < minScore, update minScore
    //   * Update the HTML with these values
    //
    // PART C: Determine Grade
    // - Round average to nearest whole number
    // - Use if/else operators to assign grade:
    //   * average >= 90: Grade A ⭐⭐⭐⭐⭐ (5 stars)
    //   * average >= 80: Grade B ⭐⭐⭐⭐ (4 stars)
    //   * average >= 70: Grade C ⭐⭐⭐ (3 stars)
    //   * average >= 60: Grade D ⭐⭐ (2 stars)
    //   * average < 60: Grade F ⭐ (1 star)
    // - Update gradeDisplay with the letter grade
    // - Update starDisplay with the stars
    
    function updateResults() {
      // YOUR CODE HERE

      scoreList.innerHTML = ""
    // Creating the scores list / div 
     scores.forEach(function(score, index){
        const list = document.createElement("li")
        list.innerHTML = `${index+1}. ${score}`
        list.style.listStyle = "none"
        scoreList.appendChild(list)
     })
  
     // Statistics 
     if(scores.length === 0){
        testCount.textContent = "No scores yet..."
        bestScore.textContent = "--"
        average.textContent = "--"
        lowestScore.textContent = "--"
     } else{

        // testCount render 
    testCount.innerHTML = `${scores.length}`
    // calculate the average using reduce to get the total
        scores.reduce(function(score, sum){
            return sum+=score
        })/scores.length // Divide the total by the number of items in the array

    // Get the best score 
     let sortedDescending = scores.sort(function(a,b){
        return b-a
     })

     // Highest Score
     bestScore.innerHTML = `${sortedDescending[0]}`

     // Lowest score 
     lowestScore.innerHTML = `${sortedDescending[sortedDescending.length-1]}`


     if(average >= 90){
        gradeDisplay.innerHTML = "GRADE A"
        starDisplay.innerHTML = "⭐⭐⭐⭐⭐"
     } else if(average >= 80){
         gradeDisplay.innerHTML = "GRADE B"
        starDisplay.innerHTML = "⭐⭐⭐⭐"
     } else if(average >= 70){
         gradeDisplay.innerHTML = "GRADE C"
        starDisplay.innerHTML = "⭐⭐⭐"
     }else if(average >= 60){
         gradeDisplay.innerHTML = "GRADE D"
        starDisplay.innerHTML = "⭐⭐"
     } else {
         gradeDisplay.innerHTML = "F"
        starDisplay.innerHTML = "⭐"
     }

    }
    }

    // Add event listeners
    addBtn.addEventListener("click", addScore);
    clearBtn.addEventListener("click", clearAllScores);

