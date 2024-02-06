class teacher{
    public name:string;
    public id:number;
    public courseName:string[];
    public course:string;

    constructor(name:string, id:number, course:string) 
    {
        this.name=name;
        this.id=id;
        // this.courseName=courseName;
        this.addCourse(course);
    }
    addCourse(course:string):void{
        this.courseName.push(course);
    }

    print():void{
        console.log()
    }

}