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

/*-- /Summary --*/


// /*-- Skills --*/
//
// // Step 1: Create Elements
// var publicSpeaking = document.createElement('li');
// var management = document.createElement('li');
// var selling = document.createElement('li');
// var mentorship = document.createElement('li');
// var personalCoaching = document.createElement('li');
// var songWriting = document.createElement('li');
// var jokeTelling = document.createElement('li');
// var storyTelling = document.createElement('li');
// var inspiringOthers = document.createElement('li');
//
// // Step 2: Integrate Data into Elements
// publicSpeaking.innerHTML = resumeData.skills[0];
// management.innerHTML = resumeData.skills[1];
// selling.innerHTML = resumeData.skills[2];
// mentorship.innerHTML = resumeData.skills[3];
// personalCoaching.innerHTML = resumeData.skills[4];
// songWriting.innerHTML = resumeData.skills[5];
// jokeTelling.innerHTML = resumeData.skills[6];
// storyTelling.innerHTML = resumeData.skills[7];
// inspiringOthers.innerHTML = resumeData.skills[8];
//
//
// // Step 3: Get and/or Create Parent Element(s)
// var skillsList = document.getElementById('skills-list');
//
// // Step 4: Append Child Elements to Parent Element(s)
// skillsList.append(publicSpeaking);
// skillsList.append(management);
// skillsList.append(selling);
// skillsList.append(mentorship);
// skillsList.append(personalCoaching);
// skillsList.append(songWriting);
// skillsList.append(jokeTelling);
// skillsList.append(storyTelling);
// skillsList.append(inspiringOthers);
//
// /*-- /Skills --*/