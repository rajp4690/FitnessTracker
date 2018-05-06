function Fitness() {
    this.Users = [];

    this.getActivities = (userId, name) => {
        if(this.Users.some(x => x.UserId === userId)) {

        }
        else {
            this.Users.push({ UserId: userId, Name: name, MyActivities: ["Current", "Get this done"], MyFinishedActivities: ["Finished"]});
        }
        return this.Users.find(x => x.UserId === userId);
    };

    this.submitActivities = (userId, activity) => {
        this.Users.find(x => x.UserId === userId).MyActivities.push(activity);
    };
    
}

module.exports = Fitness;