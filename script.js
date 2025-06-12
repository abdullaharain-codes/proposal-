document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const modal = document.getElementById('successModal');
    const closeModal = document.querySelector('.close-modal');
    
    // Create floating hearts
    createFloatingHearts();
    
    // No button hover effect
    noBtn.addEventListener('mouseover', function() {
        const containerRect = document.querySelector('.container').getBoundingClientRect();
        const buttonRect = noBtn.getBoundingClientRect();
        
        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        noBtn.style.transition = 'all 0.5s ease-out';
    });
    
    // Yes button click
    yesBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
        createConfetti();
        
        // Change the button text
        yesBtn.innerHTML = '<i class="fas fa-heart"></i> Forever Yours <i class="fas fa-heart"></i>';
        yesBtn.style.pointerEvents = 'none';
        noBtn.style.display = 'none';
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Create floating hearts
    function createFloatingHearts() {
        const container = document.querySelector('.container');
        const heartsContainer = document.createElement('div');
        heartsContainer.className = 'floating-hearts';
        container.appendChild(heartsContainer);
        
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.innerHTML = '❤️';
                
                // Random properties
                const size = Math.random() * 20 + 10;
                const duration = Math.random() * 10 + 10;
                const delay = Math.random() * 5;
                const left = Math.random() * 100;
                
                heart.style.fontSize = `${size}px`;
                heart.style.left = `${left}%`;
                heart.style.animationDuration = `${duration}s`;
                heart.style.animationDelay = `${delay}s`;
                
                // Random color
                const colors = ['#9c27b0', '#ff9800', '#e91e63', '#673ab7'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                heart.style.color = randomColor;
                
                heartsContainer.appendChild(heart);
                
                // Remove heart after animation completes
                setTimeout(() => {
                    heart.remove();
                }, duration * 1000);
            }, i * 1000);
        }
    }
    
    // Create confetti effect
    function createConfetti() {
        const colors = ['#9c27b0', '#ff9800', '#e91e63', '#673ab7', '#2196f3'];
        const container = document.querySelector('.container');
        
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                
                // Random properties
                const size = Math.random() * 10 + 5;
                const left = Math.random() * 100;
                const color = colors[Math.floor(Math.random() * colors.length)];
                const animationDuration = Math.random() * 3 + 2;
                
                confetti.style.width = `${size}px`;
                confetti.style.height = `${size}px`;
                confetti.style.backgroundColor = color;
                confetti.style.left = `${left}%`;
                confetti.style.animationDuration = `${animationDuration}s`;
                
                // Random shape
                if (Math.random() > 0.5) {
                    confetti.style.borderRadius = '50%';
                }
                
                container.appendChild(confetti);
                
                // Remove after animation
                setTimeout(() => {
                    confetti.remove();
                }, animationDuration * 1000);
            }, i * 50);
        }
    }
    
    // Add confetti animation to CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .confetti {
            position: absolute;
            top: -10px;
            animation: confettiFall linear forwards;
            z-index: 100;
        }
        
        @keyframes confettiFall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});