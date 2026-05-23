function checkAnswers() {
    let score = 0;
    
    // Перевірка 1 і 2 (Radio)
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q1 && q1.value === "correct") score++;
    if (q2 && q2.value === "correct") score++;
    
    // Перевірка 3 (Checkbox - мають бути обрані A і C, і не обрано B)
    let q3a = document.getElementById("q3a").checked;
    let q3b = document.getElementById("q3b").checked;
    let q3c = document.getElementById("q3c").checked;
    if (q3a && !q3b && q3c) score++;
    
    // Перевірка 4 (Text input)
    let q4 = document.getElementById("q4").value.trim().toLowerCase();
    if (q4 === "промпт" || q4 === "prompt") score++;
    
    // Вивід результату
    alert("Круто! Твій результат: " + score + " з 4 правильних відповідей. \n\n" + 
          (score >= 3 ? "Ти справжній експерт з ШІ! 🚀" : "Варто ще раз перечитати теорію 📚"));
}
