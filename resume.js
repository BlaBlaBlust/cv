
//EXPERIENCE CARDS
const workCards = document.querySelector("[class=work-cards]");
experience.forEach((elem) =>
{
    const workCard = document.createElement(`div`);
    workCard.classList.add('work-card');
    workCard.insertAdjacentHTML('afterbegin',renderWork(elem));
    workCards.append(workCard);
});

//EDUCATION CARDS
const educationCards = document.querySelector("[class=education-cards]")
eductation.forEach((elem) =>
{
    const educationCard = document.createElement('div');
    educationCard.classList.add('education-card');
    educationCard.insertAdjacentHTML('afterbegin', renderEducation(elem));
    educationCards.append(educationCard);
    
});

//SKILLS

const softSkillsList = document.querySelector('[class=soft-skills-list]');
const hardSkillsList = document.querySelector('[class=hard-skills-list]');
const languagesSkillsList = document.querySelector('[class=languages-skills-list]');
const toolsSkillsList = document.querySelector('[class=tools-skills-list]');

addSkill(softSkills, softSkillsList, renderSkill);
addSkill(hardSkills, hardSkillsList, renderSkill);
addSkill(languages, languagesSkillsList, renderSkill);
addSkill(tools, toolsSkillsList, renderSkill);








