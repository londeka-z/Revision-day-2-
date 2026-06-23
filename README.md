#  Revision day 2 - Test Score Calculator with Loops

## fork and clone this repo : 

Build an interactive **Test Score Calculator** that:
1. Lets students **enter multiple test scores** (one by one)
2. **Loops through all scores** to calculate the average
3. Uses **operators** to determine a letter grade (A, B, C, D, F)
4. Displays a **visual star rating** (⭐) based on score
5. Shows all scores in a **numbered list**

---

## **Visual Example:**

```
INPUT FORM:
┌──────────────────────────────────┐
│ Enter a test score:              │
│ [85                            ] │
│ [Add Score] [Clear All]          │
└──────────────────────────────────┘

RESULTS (appears below):
┌──────────────────────────────────┐
│ Your Scores:                     │
│ 1. 85                            │
│ 2. 92                            │
│ 3. 78                            │
│                                  │
│ Average: 85                      │
│ Grade: B (85%)                   │
│ Rating: ⭐⭐⭐⭐ (4 stars)         │
│                                  │
│ Test Count: 3                    │
│ Best Score: 92                   │
│ Lowest Score: 78                 │
└──────────────────────────────────┘
```

---

## **HTML Starter Code:**

Copy and save this as `calculator.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Test Score Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      margin: 0;
      padding: 20px;
    }

    .container {
      background: white;
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      max-width: 600px;
      width: 100%;
    }

    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 30px;
    }

    .input-section {
      display: flex;
      gap: 10px;
      margin-bottom: 30px;
    }

    input {
      flex: 1;
      padding: 12px;
      border: 2px solid #ddd;
      border-radius: 8px;
      font-size: 16px;
      box-sizing: border-box;
      transition: border-color 0.3s;
    }

    input:focus {
      outline: none;
      border-color: #667eea;
    }

    button {
      padding: 12px 20px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s;
    }

    button:hover {
      background: #764ba2;
    }

    button.danger {
      background: #f44336;
    }

    button.danger:hover {
      background: #da190b;
    }

    .results-section {
      background: #f5f5f5;
      padding: 25px;
      border-radius: 10px;
      margin-top: 30px;
    }

    h2 {
      color: #333;
      margin-top: 0;
      margin-bottom: 15px;
    }

    .score-list {
      background: white;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 20px;
      max-height: 150px;
      overflow-y: auto;
    }

    .score-item {
      padding: 8px 0;
      border-bottom: 1px solid #eee;
      font-size: 16px;
    }

    .score-item:last-child {
      border-bottom: none;
    }

    .stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    .stat-box {
      background: white;
      padding: 15px;
      border-radius: 8px;
      text-align: center;
      border-left: 4px solid #667eea;
    }

    .stat-label {
      font-size: 12px;
      color: #999;
      text-transform: uppercase;
      margin-bottom: 5px;
    }

    .stat-value {
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }

    .grade-box {
      background: white;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      grid-column: 1 / -1;
      border-left: 4px solid #FFD700;
    }

    .grade {
      font-size: 48px;
      font-weight: bold;
      color: #667eea;
      margin: 10px 0;
    }

    .stars {
      font-size: 30px;
      margin: 10px 0;
    }

    .empty-message {
      text-align: center;
      color: #999;
      padding: 20px;
      font-style: italic;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📊 Test Score Calculator</h1>

    <div class="input-section">
      <input 
        type="number" 
        id="scoreInput" 
        placeholder="Enter test score (0-100)" 
        min="0" 
        max="100"
      >
      <button id="addBtn">Add Score</button>
      <button id="clearBtn" class="danger">Clear All</button>
    </div>

    <div class="results-section">
      <h2>📈 Your Results:</h2>
      <div id="scoreList" class="score-list">
        <div class="empty-message">No scores yet. Add your first score! 👆</div>
      </div>

      <div class="stats">
        <div class="stat-box">
          <div class="stat-label">Number of Tests</div>
          <div class="stat-value" id="testCount">0</div>
        </div>

        <div class="stat-box">
          <div class="stat-label">Average Score</div>
          <div class="stat-value" id="average">--</div>
        </div>

        <div class="stat-box">
          <div class="stat-label">Best Score</div>
          <div class="stat-value" id="bestScore">--</div>
        </div>

        <div class="stat-box">
          <div class="stat-label">Lowest Score</div>
          <div class="stat-value" id="lowestScore">--</div>
        </div>

        <div class="grade-box">
          <div class="stat-label">Your Grade</div>
          <div class="grade" id="gradeDisplay">--</div>
          <div class="stars" id="starDisplay"></div>
        </div>
      </div>
    </div>
  </div>

  <script>
    // Array to store all scores
    let scores = [];

    // Get HTML elements
    const scoreInput = document.getElementById("scoreInput");


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
    }

    // Add event listeners
    addBtn.addEventListener("click", addScore);
    clearBtn.addEventListener("click", clearAllScores);

    // Allow pressing Enter to add score
    scoreInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addScore();
      }
    });

    // Initial update
    updateResults();
  </script>
</body>
</html>
```

---

## **The 3 Functions You Need to Write:**

### **Function 1: addScore()**

**Requirements:**
- Get the value from `scoreInput`
- Validate it's not empty → show alert if empty
- Validate it's between 0-100 → show alert if not
- Use `scores.push()` to add it to the array
- Clear the input field
- Call `updateResults()`

**Hints:**
- Check if empty: `if (!score)`
- Check range: `if (score < 0 || score > 100)`

---

### **Function 2: clearAllScores()**

**Requirements:**
- Empty the scores array
- Clear the input field
- Call `updateResults()`

---

### **Function 3: updateResults() - The Complex One!**

#### **Part A: Display the Score List**

**Requirements:**
- Clear the `scoreList` element
- If array is empty: show "No scores yet. Add your first score! "
- If array has scores: **Use `.forEach()`** to loop through and display each one
  - Display format: "1. 85", "2. 92", etc.
  - Create a `<div>` with class "score-item" for each
  - 
**Hint:** `.forEach((element, index) => { })` gives you each element AND its position
---

#### **Part B: Calculate Statistics**

**Requirements:**
- Update `testCount` with array length
- If array is empty: set average, bestScore, lowestScore to "--"
- If array has values:
  - **Calculate AVERAGE**
    - Round using `Math.round()`
  - **Find BEST SCORE**
    - Return the highest number
  - **Find LOWEST SCORE**
    - Return the lowest number

**Hints:**
- `.reduce((sum, score) => sum + score, 0)` adds all scores
- `.reduce((max, score) => score > max ? score : max, scores[0])` finds max
- Or use `Math.max(...scores)` to find maximum

---

#### **Part C: Determine Grade**

**Requirements:**
- Calculate the average (from Part B)
- Use **if/else operators** to assign grade:
  - `avg >= 90` → "A" with 5 stars ⭐⭐⭐⭐⭐
  - `avg >= 80` → "B" with 4 stars ⭐⭐⭐⭐
  - `avg >= 70` → "C" with 3 stars ⭐⭐⭐
  - `avg >= 60` → "D" with 2 stars ⭐⭐
  - `avg < 60` → "F" with 1 star ⭐
- Update `gradeDisplay` and `starDisplay`

---

## **Testing Checklist:**

Before submitting, test these:

- [ ] Type a valid score and click "Add Score" → Score appears in list with number
- [ ] Type multiple scores → All show in numbered list (1., 2., 3., etc.)
- [ ] Average calculates correctly (use calculator to check)
- [ ] Best Score shows the highest number you entered
- [ ] Lowest Score shows the lowest number you entered
- [ ] Grade displays correctly based on your average
- [ ] Stars update when you add new scores
- [ ] Type invalid score "150" → Shows alert saying "between 0-100"
- [ ] Type nothing → Shows alert saying "enter a score"
- [ ] Click "Clear All" → Everything resets to empty
- [ ] Press Enter key after typing → Score adds (if working)


## Submit the link to your github repository

