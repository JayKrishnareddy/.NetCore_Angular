interface Book{
    id:number;
    title:string;
    description:string;
    author:string;
    rate?:number;
    datestart?: Date;
    dateend?: Date;
}