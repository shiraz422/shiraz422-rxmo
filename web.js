const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const arrow = question.querySelector('.arrow');

        // Toggle visibility
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

        // Rotate arrow
        if (answer.style.display === 'block') {
            arrow.style.transform = 'rotate(90deg)'; // Arrow points down
        } else {
            arrow.style.transform = 'rotate(0deg)'; // Arrow points right
        }
    });
});

