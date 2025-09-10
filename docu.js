const docContainer = document.getElementById('doc-container');
    const addBtn = document.getElementById('add-doc-btn');

    addBtn.addEventListener('click', () => {
      const titleInput = document.getElementById('doc-title').value.trim();
      const urlInput = document.getElementById('doc-url').value.trim();

      if(!titleInput || !urlInput) {
        alert("Please provide both title and URL!");
        return;
      }

      // Determine type (PDF or image)
      let type = 'pdf';
      if(urlInput.match(/\.(jpeg|jpg|png|gif)$/i)) type = 'image';

      // Create document card
      const card = document.createElement('div');
      card.classList.add('doc-card');

      let previewHTML = '';
      if(type === 'pdf') {
        previewHTML = `<iframe src="${urlInput}"></iframe>`;
      } else {
        previewHTML = `<img src="${urlInput}" alt="${titleInput}">`;
      }

      card.innerHTML = `
        <h3>${titleInput}</h3>
        <div class="doc-preview">${previewHTML}</div>
        <div class="doc-actions">
          <a href="${urlInput}" target="_blank" class="btn-view"><i class="fa-solid fa-eye"></i> View</a>
          <a href="${urlInput}" download class="btn-download"><i class="fa-solid fa-download"></i> Download</a>
        </div>
      `;

      docContainer.appendChild(card);

      // Reset inputs
      document.getElementById('doc-title').value = '';
      document.getElementById('doc-url').value = '';
    });