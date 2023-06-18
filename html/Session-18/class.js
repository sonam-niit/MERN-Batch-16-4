class Student{

    constructor(id,name,email){
        this.id=id;
        this.name=name;
        this.email=email;
    }

    display(){
        return `
            <tr>
                <td>${this.id}</td>
                <td>${this.name}</td>
                <td>${this.email}</td>
            </tr>
        `
    }
}