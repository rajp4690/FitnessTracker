var axios = require('axios');
var { Observable } = require('rxjs/Observable');
var { map, filter, switchMap } = require('rxjs/operators');

var newsArray = [];

axios.get('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=8fbbba4480cb4e3c9f41090ba29b9458')
    .then(response => {
        let narray = response.data.articles;
        for (let i = 0; i < narray.length; i++) {
            if(narray[i].urlToImage != null) {
                newsArray.push({ 
                    title: narray[i].title,
                    description: narray[i].description,
                    url: narray[i].url,
                    urlToImage: narray[i].urlToImage
                });
            }
        }
    });

var newsIndex = -1;
var usersInfo = [];

function Fitness() {
    this.Users = [];

    this.News = {};

    this.getActivities = (userId, name) => {
        if(this.Users.some(x => x.UserId === userId)) {

        }
        else {
            this.Users.push({ UserId: userId, Name: name, MyActivities: ["Test Acitvity"], MyFinishedActivities: [] });
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
    
    this.login = (email, password) => {
        if(usersInfo.some(x => x.Email === email)) {
            let user = usersInfo.find(x => x.Email === email);
            console.log(user);
            if(user.Password === password) {
                return { username: user.Name };
            }
        }
        return { username: false };
    };

    this.register = (name, email, password) => {
        console.log(name, email, password);
        usersInfo.push({ Name: name, Email: email, Password: password });
        return { success: true };
    };
    
    this.searchUser = (text) => {
        // console.log(text);
        // return this.Users.filter(v => v.Name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, 10);
        
        //Here I wanted to get string from observable to filter from array and
        // wanted to return that array.
        return this.Users.filter(v => v.Name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, 10);
    };
}


module.exports = Fitness;