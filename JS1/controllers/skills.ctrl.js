(function () {
    activateSkills();

    ///////////////////////////////////////////////////

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

    function createSkill(skill) {
        const skillItem = document.createElement("li");
        const skillText = document.createTextNode(skill);
        skillItem.appendChild(skillText);
        return skillItem;
    }

    function needsBreak(index, multiple) {
        return (index + 1) % multiple === 0;
    }
})();