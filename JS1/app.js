// TODO make skeleton in html and attach with loop

const summary = document.getElementById("summary");
summary.setAttribute("style", "background-image: url('" + data.summary.background + "')");


const profileImg = document.createElement("img");
profileImg.setAttribute("src", data.summary.profile);
profileImg.setAttribute("class", "img-responsive");

const profile = document.getElementById("profile");
profile.append(profileImg);

const nameText = document.createTextNode(data.summary.name);
const titleText = document.createTextNode(data.summary.title);
const locationText = document.createTextNode(data.summary.location);
const phoneText = document.createTextNode(data.summary.phone);
const emailText = document.createTextNode(data.summary.email);

const summaryName = document.createElement("h1");
const summaryTitle = document.createElement("h2");
const summaryLocation = document.createElement("h2");
const summaryPhone = document.createElement("h3");
const summaryEmail = document.createElement("h3");

summaryName.appendChild(nameText);
summaryTitle.appendChild(titleText);
summaryLocation.appendChild(locationText);
summaryPhone.appendChild(phoneText);
summaryEmail.appendChild(emailText);

const about = document.getElementById("about");
const summaryElements = [summaryName, summaryTitle, summaryLocation, summaryPhone, summaryEmail];
attachMultiple(about, summaryElements);

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