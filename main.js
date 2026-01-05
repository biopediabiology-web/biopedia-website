fetch('/notices.json')
  .then(res => res.json())
  .then(data => {
    const notices = data.notices || data;
    const box = document.getElementById('notices-list');

    if (!notices || notices.length === 0) {
      box.innerHTML = '<p>No updates available.</p>';
      return;
    }

    notices.sort((a, b) => new Date(b.date) - new Date(a.date));

    box.innerHTML = '';

    notices.forEach(n => {
      const div = document.createElement('div');
      div.className = 'notice-item';
      div.innerHTML = `
        <h3>${n.title}</h3>
        <small>${new Date(n.date).toDateString()}</small>
        <p>${n.body}</p>
      `;
      box.appendChild(div);
    });
  });
