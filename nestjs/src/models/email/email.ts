
export default class Email{
    public name:string = "";
    public emailAddress:string = "";
    public subject:string = "";
    public body:string | null = "";

    public send = () => {
        console.log("SENT!!!!");
    }
}