const summary = document.getElementById("summary");
summary.setAttribute("style", "background-image: url('" + data.summary.background + "');");

const profileImg = document.createElement("img");
profileImg.setAttribute("src", data.summary.profile);

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

for (let skill of data.skills) {
  let skillContainer = document.createElement("li");
  skillContainer.innerHTML = skill;
  skillsList.append(skillContainer);
}
/*-- Experience --*/
const experienceList = document.getElementById("experience");

for (experience of data.experience) {
  let entry = document.createElement("div");
  let row = document.createElement("div");
  let well = document.createElement("div");
  let dates = experience.startDate + " - " + experience.endDate;
  let occupation = document.createElement("h1");
  occupation.innerHTML = experience.occupation + "<span class='pull-right'><small><em>" + dates + "</em></small></span>";
  let company = document.createElement("h2");
  company.innerHTML = experience.company;
  let hr = document.createElement("hr");
  let ul = document.createElement("ul");
  for (responsibility of experience.responsibilities) {
    let li = document.createElement("li");
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
  let hr2 = document.createElement("hr");
  experienceList.append(hr2);
}

/*-- Education --*/
const educationList = document.getElementById("education");

for (education of data.education) {
  let entry = document.createElement("div");
  let row = document.createElement("div");
  let well = document.createElement("div");
  let dates = education.startDate + " - " + education.endDate;
  let occupation = document.createElement("h1");
  occupation.innerHTML = education.degree + "<span class='pull-right'><small><em>" + dates + "</em></small></span>";
  let school = document.createElement("h2");
  school.innerHTML = education.school;
  let hr = document.createElement("hr");
  let ul = document.createElement("ul");
  for (accomplishment of education.accomplishments) {
    let li = document.createElement("li");
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
  let hr2 = document.createElement("hr");
  educationList.append(hr2);
}