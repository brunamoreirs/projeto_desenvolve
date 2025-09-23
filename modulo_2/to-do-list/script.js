const items = document.querySelectorAll('.todo-list li');

items.forEach(item => {
    item.addEventListener('click', () => {
        // Marca/desmarca tarefa
        item.classList.toggle('completed');

        if(item.classList.contains('completed')){
            for(let i=0; i<8; i++){
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * item.offsetWidth + 'px';
                confetti.style.backgroundColor = `hsl(${Math.random()*360}, 80%, 60%)`;
                item.appendChild(confetti);

                setTimeout(() => confetti.remove(), 1000);
            }
        }
    });
});
