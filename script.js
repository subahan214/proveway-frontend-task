document.querySelectorAll('.box').forEach((box, index) => {
    box.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Close all other boxes first
        document.querySelectorAll('.box').forEach(b => {
            if (b !== this) {
                b.classList.remove('expanded');
                const opts = b.querySelector('.options');
                if (opts) opts.classList.remove('show');
            }
        });
        
        // Toggle current box
        this.classList.toggle('expanded');
        
        let options = this.querySelector('.options');
        if (!options) {
            options = document.createElement('div');
            options.className = 'options';
            options.innerHTML = `
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Color:</label>
                    <select onchange="parentElement.parentElement.parentElement.style.backgroundColor=this.value">
                        <option value="#ff6b6b" style="background: #ff6b6b; color: white;">Red</option>
                        <option value="#4ecdc4" style="background: #4ecdc4;">Teal</option>
                        <option value="#45b7d1" style="background: #45b7d1;">Blue</option>
                        <option value="#f9ca24" style="background: #f9ca24;">Yellow</option>
                        <option value="#6c5ce7" style="background: #6c5ce7; color: white;">Purple</option>
                    </select>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 8px; font-weight: 500;">Size:</label>
                    <select>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                    </select>
                </div>
            `;
            this.appendChild(options);
        }
        
        options.classList.toggle('show');
    });
});
