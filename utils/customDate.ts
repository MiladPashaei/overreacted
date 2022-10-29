export class PostDate extends Date {
    props: string | number | Date;
    constructor(props: string | number | Date){
        super(props)
        this.props = props
    }
    addDays = (days:number) => {
        var date = new Date(this.props);
        date.setDate(date.getDate() + days);
        return date;
    }

}