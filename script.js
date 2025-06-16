// Create hexagons for background
        const hexagonContainer = document.getElementById('hexagonContainer');
        const numberOfHexagons = 20;
        
        for (let i = 0; i < numberOfHexagons; i++) {
            const hexagon = document.createElement('div');
            hexagon.classList.add('hexagon');
            
            // Random positioning and timing
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100 + 100;
            const randomDelay = Math.random() * 15;
            const randomDuration = 15 + Math.random() * 10;
            
            hexagon.style.left = `${randomX}%`;
            hexagon.style.bottom = `-${randomY}px`;
            hexagon.style.animationDelay = `${randomDelay}s`;
            hexagon.style.animationDuration = `${randomDuration}s`;
            
            hexagonContainer.appendChild(hexagon);
        }
        
        // Custom cursor effect
        const cursor = document.getElementById('cursor');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.opacity = '1';
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });
        
        document.addEventListener('mouseout', () => {
            cursor.style.opacity = '0';
        });
        
        // Navigation smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
