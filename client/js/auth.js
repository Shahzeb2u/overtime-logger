// TOGGLE FORMS TEAM/MANAGER ON LOGIN PAGE
const btnTeamForm = document.getElementById('btnTeam')
const btnmanagerForm = document.getElementById('btnManager')
const teamForm = document.getElementById('teamForm')
const managerForm = document.getElementById('managerForm')

btnTeamForm.addEventListener('click',()=>{
    managerForm.classList.add('hidden');
    teamForm.classList.remove('hidden')
})
btnmanagerForm.addEventListener('click',()=>{
    teamForm.classList.add('hidden');
    managerForm.classList.remove('hidden')
})