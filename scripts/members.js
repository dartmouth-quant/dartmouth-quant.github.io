document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('general-members');
  fetch('../data/members.json')
    .then(response => response.json())
    .then(members => {
      console.log(members);
      for (let i = 0; i < members.length; i += 3) {
        const row = document.createElement('div');
        row.classList.add('names-row');
        
        for (let j = i; j < i + 3 && j < members.length; j++) {
          const memberElem = document.createElement('div');
          memberElem.classList.add('name');
          memberElem.textContent = `${members[j]}`;
          row.appendChild(memberElem);
        }
        
        container.appendChild(row);
      }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('leadership-members');
    fetch('../data/leadership.json')
      .then(response => response.json())
      .then(members => {
        console.log(members);
        for (let i = 0; i < members.length; i += 3) {
          const row = document.createElement('div');
          row.classList.add('names-row');
          
          for (let j = i; j < i + 3 && j < members.length; j++) {
            const memberElem = document.createElement('div');
            memberElem.classList.add('name');
            memberElem.textContent = `${members[j]}`;
            row.appendChild(memberElem);
          }
          
          container.appendChild(row);
        }
      });
  });