// Main js
let addCourseButtons = document.querySelectorAll('.btn-add-course')

// Listen for clicking the add course button
if (addCourseButtons.length > 0) {
    addCourseButtons.forEach((addCourseButton) => {
        addCourseButton.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()

            let addBtnContainer = e.target.parentElement
            let newCourse = createCourse()

            // Insert new course before add button
            addBtnContainer.before(newCourse)
        })
    })    
}

// Create course button
function createCourseBtn () {
    // Create elements
    let delCourseBtn = document.createElement('button')
    let icon = document.createElement('i')
    
    // Add class names
    delCourseBtn.classList.add('btn', 'btn-del-course')
    icon.classList.add('fa', 'fa-times')

    // Append child node
    delCourseBtn.appendChild(icon)
    return delCourseBtn
}

// Create course bar
function createCourseBar () {
    // Create elements
    let courseBar = document.createElement('div')
    let courseTitle = document.createElement('p')
    let courseScore = document.createElement('p')
    let letterGrade = document.createElement('span')
    let courseCredits = document.createElement('p')
    let numCredits = document.createElement('span')
    
    // Add class names
    courseBar.classList.add('course-bar')
    courseTitle.classList.add('course-title')
    courseScore.classList.add('course-score')
    letterGrade.classList.add('score')
    courseCredits.classList.add('course-credits')
    numCredits.classList.add('credits')

    // Set attributes
    courseTitle.setAttribute('contenteditable', 'true')
    letterGrade.setAttribute('contenteditable', 'true')
    numCredits.setAttribute('contenteditable', 'true')

    // Set text
    courseTitle.textContent = 'CS101'
    courseScore.textContent = 'Score: '
    letterGrade.textContent = 'A'
    courseCredits.textContent = 'Credits: '
    numCredits.textContent = '3'
    
    // Append course title
    courseBar.appendChild(courseTitle)

    // Append course score
    courseScore.appendChild(letterGrade)
    courseBar.appendChild(courseScore)

    // Append course credits
    courseCredits.appendChild(numCredits)
    courseBar.appendChild(courseCredits)

    return courseBar
}

// Creates a default course
function createCourse () {
    // Create course section
    let courseSection = document.createElement('section')
    courseSection.classList.add('course')

    // Add delete course button
    let delCourseBtn = createCourseBtn()
    courseSection.appendChild(delCourseBtn)

    // Add course bar
    let courseBar = createCourseBar()
    courseSection.appendChild(courseBar)

    return courseSection
}
