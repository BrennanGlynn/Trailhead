(function () {
    activateSummary();

    //////////////////////////////////////////////////////

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
})();