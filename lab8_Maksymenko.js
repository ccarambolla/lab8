let countDesigner = countDevs = countManags = 0;
function Designer(name, surname, baseSalary, workExp, coef) {
    this.name = name;
    this.surname = surname;
    this.baseSalary = baseSalary;
    this.workExp = workExp;
    if (workExp > 2 && workExp <= 5) {
        this.countedSalary = this.baseSalary + 200;
    }
    if (workExp > 5) {
        this.countedSalary = this.baseSalary * 1.2 + 500;
    }
    if (coef > 1 || coef < 0) {
        console.log("Write valid coefficient.");
        return false;
    }
    countDesigner++;
    this.coef = coef;
    this.countedSalary *= coef;
    return;
}
function Developer(name, surname, baseSalary, workExp) {
    this.name = name;
    this.surname = surname;
    this.baseSalary = baseSalary;
    this.workExp = workExp;
    if (workExp > 2 && workExp <= 5) {
        this.countedSalary = this.baseSalary + 200;
    }
    if (workExp > 5) {
        this.countedSalary = this.baseSalary * 1.2 + 500;
    }
    countDevs++;
    return;
}

function Manager(name, surname, baseSalary, workExp, Team) {
    this.name = name;
    this.surname = surname;
    this.baseSalary = baseSalary;
    this.workExp = workExp;
    this.Team = Team;
    if (workExp > 2 && workExp <= 5) {
        this.countedSalary = this.baseSalary + 200;
    }
    if (workExp > 5) {
        this.countedSalary = this.baseSalary * 1.2 + 500;
    }
    if (Team.length > 5 && Team.length <= 10) {
        this.countedSalary += 200;
    }
    if (Team.length > 10) {
        this.countedSalary += 300;
    }
    for (let i = 0; i < Team.length; i++) {
        if (typeof(this.Team) == Developer) {
        countDevs++;
        }
        if (typeof(this.Team) == Designer) {
            countDesigner++;
        }
    }
    if (countDevs > (countDevs + countDesigner) / 2) {
        this.countedSalary *= 1.1;
    }
    return;
}

function Department (manager) {
    this.manager = manager;
    this.workers = manager.Team;
    this.giveSalary = function() {
        for (let i = 0; i < this.manager.Team.length; i++) {
            console.log(this.manager.name + " " + this.manager.surname + " отримав " + this.manager.countedSalary + " шекелєй");
        }
        for (let i = 0; i < this.manager.Team.length; i++) {
            console.log(this.manager.Team[i].name + this.manager.Team[i].surname + " отримав " + this.manager.Team[i].countedSalary + " шекелєй"); 
        }
       
    }
}

let emp12 = new Designer("Olha", "Maksymenko", 1000, 11, 0.8);
let emp11 = new Designer("Olha2 ", "Maksymenko", 1000, 11, 0.8);
let emp5 = new Developer("Olha3 ", "Maksymenko", 1000, 11);
let emp6 = new Developer("Olha4 ", "Maksymenko", 1000, 11);
let emp7 = new Developer("Olha5 ", "Maksymenko", 1000, 11);
let emp8 = new Designer("Olha6 ", "Maksymenko", 1000, 11, 0.8);
let emp9 = new Designer("Olha7 ", "Maksymenko", 1000, 11, 0.8);
let emp10 = new Developer("Dima", "Shalapay", 1000, 11);
let emp2 = new Developer("Dima2", "Shalapay", 1500, 5);
let emp4 = new Developer("Vova", "Zelenskiy", 1300, 6);
let emp13 = new Developer("Vova2", "Zelenskiy", 1300, 6);
let emp3 = new Manager("Vova", "Vovan", 2000, 8, [emp13,emp11, emp2, emp4, emp10, emp9, emp8, emp7, emp6, emp5, emp12]);
let depart = new Department(emp3);

depart.giveSalary();