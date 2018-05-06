
export class Fitness {
    News: {
        title: string,
        description: string,
        url: string,
        urlToImage: string 
    };
    Users: User[] = [];
    
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