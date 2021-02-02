
const xhr = new XMLHttpRequest()
const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/'
  
const data = {
    'name': 'Lotte',
    'prefix': 'te',
    'surname': 'Kulve',
    'teamId': '1',
    'id': '',
    'avatar': 'https://avatars.githubusercontent.com/u/78353514?s=460&u=f77076b92b59b891df9e4f13a3f877c9f6790c0c&v=4',
    'mugshot': 'https://avatars.githubusercontent.com/u/78353514?s=460&u=f77076b92b59b891df9e4f13a3f877c9f6790c0c&v=4',
    'githubHandle': 'lottetekulve',
    'url': 'https://lottetekulve.github.io/kickoff-2021/',
    'other': {
        'sport': 'Fitness',
        'muziek': 'Techno, House, Pop',
        'werkplek': 'Thuis',
        }
    }
        
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}
postData(`${url}/squads/1/teams/1/members/54`, data)
    .then(data => {
        console.log('put', data);
    });