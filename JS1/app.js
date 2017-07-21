activateSummary();
activateSkills();
activateExperience();
activateEducation();

/*-- Summary --*/
function activateSummary() {
    const summary = document.getElementById("summary");
    for (let info in data.summary) {
        if (info === 'background') {
            summary.setAttribute("style", "background-image: url('" + data.summary[info] + "')");
        } else if (info === 'profile') {
            document.getElementById(info).setAttribute("src", data.summary[info]);
        } else {
            const summaryElement = document.getElementById(info);
            const summaryTextNode = document.createTextNode(data.summary[info]);
            summaryElement.appendChild(summaryTextNode);
        }
    }
}

/*-- Skills --*/
function activateSkills() {
    const skillsList = document.getElementById("skills-list");
    for (let s in data.skills) {
        const skillElement = createSkill(data.skills[s]);
        skillsList.appendChild(skillElement);
        if (needsBreak(s, 3)) {
            const brElem = document.createElement("br");
            skillsList.appendChild(brElem);
        }
    }
}

/*-- Experience --*/
function activateExperience() {
    const experienceList = document.getElementById("experience");
    createSections(data.experience, experienceList);
}

/*-- Education --*/
function activateEducation() {
    const educationList = document.getElementById("education");
    createSections(data.education, educationList);
}

function createSkill(skill) {
    const skillItem = document.createElement("li");
    const skillText = document.createTextNode(skill);
    skillItem.appendChild(skillText);
    return skillItem;
}

function createSections (dataSection, parent) {
    for (let section of dataSection) {
        createEntry(section, parent);
    }
}

function createEntry(section, parent) {
    const entry = styledDivWithParent("entry", parent);
    const row = styledDivWithParent("row", entry);
    const well = styledDivWithParent("well", row);
    const dates = section.startDate + " - " + section.endDate;
    const title = document.createElement("h1");
    title.innerHTML = section.title + "<span class='pull-right'><small><em>" + dates + "</em></small></span>";
    const organization = document.createElement("h2");
    organization.innerHTML = section.organization;
    const hr = document.createElement("hr");
    const ul = document.createElement("ul");
    const wellElements = [title, organization, hr, ul];
    createResponsibilities(section.responsibilities, ul);
    attachMultiple(well, wellElements);
    const hr2 = document.createElement("hr");
    parent.appendChild(hr2);
}

function styledDivWithParent(style, parent) {
    console.log(parent);
    const div = document.createElement("div");
    div.setAttribute("class", style);
    parent.appendChild(div);
    return div;
}

function createResponsibilities(arr, list) {
    for (let responsibility of arr) {
        const li = document.createElement("li");
        li.innerHTML = responsibility;
        list.appendChild(li);
    }
}

function attachMultiple(parent, children) {
    for (let child of children) {
        parent.appendChild(child);
    }
}

function needsBreak(index, multiple) {
    return (index + 1) % multiple === 0;
}