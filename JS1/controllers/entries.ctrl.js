(function () {
    activate("experience");
    activate("education");

    ///////////////////////////////////////////////////////


    function activate(section) {
        const entryList = document.getElementById(section);
        createSections(data[section], entryList);
    }

    function createSections (dataSection, parent) {
        for (let subSection of dataSection) {
            createEntry(subSection, parent);
        }
    }

    function createEntry(section, parent) {
        const entry = styledDivWithParent("entry", parent);
        const row = styledDivWithParent("row", entry);
        const well = styledDivWithParent("well", row);
        const dates = section.startDate + " - " + section.endDate;
        const title = document.createElement("h1");
        const organization = document.createElement("h2");
        const hr = document.createElement("hr");
        const ul = document.createElement("ul");
        const wellElements = [title, organization, hr, ul];
        const sectionDivider = document.createElement("hr");
        title.innerHTML = section.title + "<span class='pull-right'><small><em>" + dates + "</em></small></span>";
        organization.innerHTML = section.organization;
        createResponsibilities(section.responsibilities, ul);
        attachMultiple(well, wellElements);
        parent.appendChild(sectionDivider);
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
})()