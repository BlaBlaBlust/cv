function renderWork(element)
{
    return `
    <div class ="work-card-title">
        <div class="work-card-subtitle">
            <span class="work-card-company">${element.company}</span>
            <span class="work-card-job">${element.job}</span>
        </div>
         <span class="work-card-date">${element.date}</span>
        </div>
         <div class="work-card-description">${element.description}</div>
    `;
}

function renderEducation(element)
{
    return `
        <div class ="education-card-title">
         <div class="education-card-subtitle">
            <span class="education-card-name">${element.name}</span>
            <span class="education-card-course">${element.course}</span>
         </div>
            <span class="education-card-date">${element.date}</span>
        </div>
        <div class="education-card-description">${element.description}</div>
    `;
}

function renderSkill(element)
{
    return `
    <li>${element}</li>
    `;
}

function addSkill(skillArray,container,callback)
{
    skillArray.forEach(element => {
        container.insertAdjacentHTML('beforeend', (callback(element)));
    });
}
