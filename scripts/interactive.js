function checkAnswers() {
    let score = 0;
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    
    if (q1 && q1.value === "correct") score++;
    if (q2 && q2.value === "correct") score++;
    
    alert("Круто! Твій результат: " + score + " з 2 правильних відповідей. \n\n" + 
          (score === 2 ? "Ти справжній експерт з ШІ! 🚀" : "Варто ще раз перечитати теорію 📚"));
}
