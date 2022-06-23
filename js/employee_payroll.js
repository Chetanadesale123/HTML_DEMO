class EmployeePayrollData{
    get id() {return this._id;}
    set id(id){
        this._id=id;
    }
    get name() {return this._name;}
    set name(name){
        let nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if(nameRegex.test(name))
        this._name=name;
        else throw"Name is Incorrect!";
    }
    get profilePic() {return this._profilePic;}
    set profilePic(profilePic){
        this.profilePic=profilePic;
    }
    get gender() {return this.gender;}
    set gender(gender){
        this.gender=gender;
    }
    get department() {return this.department;}
    set department(department){
        this.department=department;
    }
    get salary() {return this.salary;}
    set salary(salary){
        this.salary=salary;
    }
    get note() {return this.note;}
    set note(note){
        this.note=note;
    }
    get startDate() {return this.startDate;}
    set startDate(startDate){
        this.startDate=startDate;
    }

    toString() {
        const options={year: 'numeric', month: 'long', day: 'numeric'};
        const empDate=!this.startDate ? "undefined" :
                       this.startDate.toLocalDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", gender=" + this.gender + ", profilePic=" + this.profilePic + ", department=" + this.department + ", Salary=" + this.Salary + ", startDate=" + this.startDate + ", note=" + this.note ;
    }
}