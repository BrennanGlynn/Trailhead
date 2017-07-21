/*-- Summary --*/
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
/*-- Summary --*/


/*-- Skills --*/
const skillsList = document.getElementById("skills-list");

for (let s in data.skills) {
  const skillContainer = document.createElement("li");
  skillContainer.innerHTML = data.skills[s];
  skillsList.append(skillContainer);
  if ((s + 1) % 3 === 0) {
    const brElem = document.createElement("br");
    skillsList.appendChild(brElem);
  }
}
/*-- Experience --*/
const experienceList = document.getElementById("experience");

createCards(data.experience, experienceList);

/*-- Education --*/
const educationList = document.getElementById("education");

createCards(data.education, educationList);

/*-- Functions --*/

function createCards (section, element) {
    for (x of section) {
        const entry = document.createElement("div");
        const row = document.createElement("div");
        const well = document.createElement("div");
        const dates = x.startDate + " - " + x.endDate;
        const title = document.createElement("h1");
        title.innerHTML = x.title + "<span class='pull-right'><small><em>" + dates + "</em></small></span>";
        const organization = document.createElement("h2");
        organization.innerHTML = x.organization;
        const hr = document.createElement("hr");
        const ul = document.createElement("ul");
        const wellElements = [title, organization, hr, ul];
        createResponsibilities(x.responsibilities, ul);
        attachMultiple(well, wellElements);
        entry.setAttribute("class", "entry");
        row.setAttribute("class", "row");
        well.setAttribute("class", "well");
        row.append(well);
        entry.append(row);
        element.append(entry);
        const hr2 = document.createElement("hr");
        element.append(hr2);
    }
}

function createResponsibilities(arr, list) {
    for (let responsibility of arr) {
        const li = document.createElement("li");
        li.innerHTML = responsibility;
        list.append(li);
    }
}

function attachMultiple(parent, children) {
    for (let child of children) {
        parent.append(child);
    }
}