(function () {
    'use strict'

    angular
        .module('app')
        .factory('ResumeService', ResumeService)

    ResumeService.$inject = []

    function ResumeService() {
        const resumeData = initResumeData()

        const service = {
            getSummary,
            setSummary,
            getEducation,
            setEducation,
            getExperience,
            setExperience,
            getSkills,
            setSkills
        }

        return service

        //////////////////////

        function getSummary() {
            return resumeData.summary
        }

        function setSummary(summary) {
            resumeData.summary = summary
        }

        function getEducation() {
            return resumeData.education
        }

        function setEducation(education) {
            resumeData.education = education
        }

        function getExperience() {
            return resumeData.experience
        }

        function setExperience(experience) {
            resumeData.experience = experience
        }

        function getSkills() {
            return resumeData.skills
        }

        function setSkills(skills) {
            resumeData.skills = skills
        }

        function initResumeData() {
            return {
              experience: [{
                title: "Mower of Lawns",
                organization: "Brennan's Lawns",
                startDate: 2012,
                endDate: 2017,
                responsibilities: [
                  "Manicuring lawns",
                  "Discovering dry spots",
                  "Killer lawn patterns"
                ]
              }],
              education: [{
                title: "Finance B.B.A.",
                organization: "Boise State University",
                startDate: 2014,
                endDate: 2018,
                responsibilities: [
                  "Dean's List with Honors (Spring 2016)",
                  "Dean's List with Honors (Fall 2016)",
                  "Dean's List with Honors (Spring 2017)",
                ]
              }, {
                title: "High School Diploma",
                organization: "Mountain View High School",
                startDate: 2010,
                endDate: 2014,
                responsibilities: [
                  "Idaho Varsity Lacrosse State Champion (2013, 2014)",
                  "Varsity Lacrosse (2013, 2014)",
                  "Varsity Tennis (2010)",
                  "Varsity Hockey (2010)",
                ]
              }],
              skills: ["Node.js", "React.js", "Vue.js", "MongoDB", "Python"],
              summary: {
                background: 'https://image.ibb.co/nhtpza/91ba221a6a722d81539c27cdff36850b.jpg',
                profile: 'https://image.ibb.co/bJMnkF/resumepicture.jpg',
                title: 'Web Developer',
                name: 'Brennan B. Glynn',
                location: 'Boise, ID',
                phone: '(208) 850-8677',
                email: 'brennanglynn@u.boisestate.edu'
              },
            }
        }
    }
})()