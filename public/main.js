fetch('/items')
    .then(response => response.json())
    .then(data => {
        const itemsDiv = document.getElementById('items');
        itemsDiv.innerHTML = data.map(item => `
            <div>
                <h3>${item.name}</h3>
                <p>${item.description || 'No description'}</p>
                <p><em>Created on: ${item.date_created}</em></p>
            </div>
        `).join('');
    });
