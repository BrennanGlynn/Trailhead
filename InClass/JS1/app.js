var summary = document.getElementById("summary");
summary.setAttribute("style", "background-image: url('" + data.summary.background + "');");

var profileImg = document.createElement("img");
profileImg.setAttribute("src", data.summary.profile);

var profile = document.getElementById("profile");
profile.append(profileImg);

var nameText = document.createTextNode(data.summary.name);
var titleText = document.createTextNode(data.summary.title);
var locationText = document.createTextNode(data.summary.location);
var phoneText = document.createTextNode(data.summary.phone);
var emailText = document.createTextNode(data.summary.email);

var summaryName = document.createElement("h1");
var summaryTitle = document.createElement("h2");
var summaryLocation = document.createElement("h2");
var summaryPhone = document.createElement("h3");
var summaryEmail = document.createElement("h3");

var about = document.getElementById("about");

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
var skillsList = document.getElementById('skills-list');

for (var i in data.skills) {
  var skill = document.createElement("li");
  skill.innerHTML = data.skills[i];
  skillsList.append(skill);
}