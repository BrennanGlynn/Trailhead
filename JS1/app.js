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

const about = document.getElementById("about");

summaryName.appendChild(nameText);
summaryTitle.appendChild(titleText);
summaryLocation.appendChild(locationText);
summaryPhone.appendChild(phoneText);
summaryEmail.appendChild(emailText);

about.append(summaryName);
about.append(summaryTitle);
about.append(summaryLocation);
about.append(summaryPhone);
about.append(summaryEmail);

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

for (let experience of data.experience) {
  const entry = document.createElement("div");
  const row = document.createElement("div");
  const well = document.createElement("div");
  const dates = experience.startDate + " - " + experience.endDate;
  const occupation = document.createElement("h1");
  occupation.innerHTML = experience.occupation + "<span class='pull-right'><small><em>" + dates + "</em></small></span>";
  const company = document.createElement("h2");
  company.innerHTML = experience.company;
  const hr = document.createElement("hr");
  const ul = document.createElement("ul");
  for (let responsibility of experience.responsibilities) {
    const li = document.createElement("li");
    li.innerHTML = responsibility;
    ul.append(li);
  }
  entry.setAttribute("class", "entry");
  row.setAttribute("class", "row");
  well.setAttribute("class", "well");
  well.append(occupation);
  well.append(company);
  well.append(hr);
  well.append(ul);
  row.append(well);
  entry.append(row);
  experienceList.append(entry);
  const hr2 = document.createElement("hr");
  experienceList.append(hr2);
}

/*-- Education --*/
const educationList = document.getElementById("education");

for (let education of data.education) {
  const entry = document.createElement("div");
  const row = document.createElement("div");
  const well = document.createElement("div");
  const dates = education.startDate + " - " + education.endDate;
  const occupation = document.createElement("h1");
  occupation.innerHTML = education.degree + "<span class='pull-right'><small><em>" + dates + "</em></small></span>";
  const school = document.createElement("h2");
  school.innerHTML = education.school;
  const hr = document.createElement("hr");
  const ul = document.createElement("ul");
  for (accomplishment of education.accomplishments) {
    const li = document.createElement("li");
    li.innerHTML = accomplishment;
    ul.append(li);
  }
  entry.setAttribute("class", "entry");
  row.setAttribute("class", "row");
  well.setAttribute("class", "well");
  well.append(occupation);
  well.append(school);
  well.append(hr);
  well.append(ul);
  row.append(well);
  entry.append(row);
  educationList.append(entry);
  const hr2 = document.createElement("hr");
  educationList.append(hr2);
}