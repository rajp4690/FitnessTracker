
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