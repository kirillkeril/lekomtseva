function saveLessonResult(lessonName, result) {
    console.log(lessonName, lessonResult);
    localStorage.setItem(`lesson-${lessonName}`, result);
}
function checkResult(lessonName) {
    console.log(lessonName, localStorage.getItem(`lesson-${lessonName}`))
    return localStorage.getItem(`lesson-${lessonName}`);
}