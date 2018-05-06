
export class Fitness {
    Activities:string[] = [
        "Excercise for 45 minutes",
        "Drink 1 gallon water per day",
        "Play table-tennis for 30 minutes"
    ];
    Users:User[] = [];
    Finished:Activity[] = [
        new Activity('Walk 2 miles.', 'Raj', true),
        new Activity('Meditation for 20 minutes', 'Diku', true)
    ];
}

export class User {
    UserId: string;
    Name: string;
    MyActivities: string[];
    MyFinishedActivities: string[];
}

export class Activity {
    Text:string;
    UserName:string;
    Completed:boolean = false;
    constructor(text:string, userName:string, completed:boolean) {
        this.Text = text;
        this.UserName = userName;
        this.Completed = completed;
    }
}