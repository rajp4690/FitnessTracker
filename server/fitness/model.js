var axios = require('axios');

var newsArray = [];

axios.get('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=8fbbba4480cb4e3c9f41090ba29b9458')
    .then(response => {
        let narray = response.data.articles;
        for (let i = 0; i < narray.length; i++) {
            newsArray.push({ 
                title: narray[i].title,
                description: narray[i].description,
                url: narray[i].url,
                urlToImage: narray[i].urlToImage
            });
        }
    });

var newsIndex = 0;

function Fitness() {
    this.Users = [];
    this.News = newsArray[0];

    this.getActivities = (userId, name) => {
        if(this.Users.some(x => x.UserId === userId)) {

        }
        else {
            this.Users.push({ UserId: userId, Name: name, MyActivities: ["Current", "Get this done"], MyFinishedActivities: ["Finished"] });
        }
        return this.Users.find(x => x.UserId === userId);
    };

    this.modifyActivity = (userId, activity, action) => {
        var user = this.Users.find(x => x.UserId === userId);
        if(action === "submit") {
            user.MyActivities.push(activity);
        }
        else if(action === "remove") {
            user.MyActivities.splice(user.MyActivities.indexOf(activity), 1);
        }
        else if(action === "finish") {
            user.MyActivities.splice(user.MyActivities.indexOf(activity), 1);
            user.MyFinishedActivities.push(activity);
        }
    };

    this.nextNews = () => {
        this.News = newsArray[newsIndex = (newsIndex + 1) % newsArray.length];
    };
    
}

module.exports = Fitness;