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
  const container = document.getElementById('profiles-section');
  fetch('../data/leadership.json')
    .then(response => response.json())
    .then(members => {
      for (let i = 0; i < members.length; i += 3) {
        const row = document.createElement('div');
        row.classList.add('profiles-row');
        
        for (let j = i; j < i + 3 && j < members.length; j++) {
          const profileItem = document.createElement('div');
          profileItem.classList.add('profile-item');

          const memberElem = document.createElement('div');
          memberElem.classList.add('profile');
          memberElem.innerHTML = `
            <div class="overlay"></div>
            <img src="../images/profiles/${members[j].headshot}" alt="Profile" />
          `;

          const nameElem = document.createElement('div');
          nameElem.classList.add('name');
          nameElem.textContent = members[j].name;

          profileItem.appendChild(memberElem);
          profileItem.appendChild(nameElem);
          row.appendChild(profileItem);
        }
        
        container.appendChild(row);
      }
    });
});
