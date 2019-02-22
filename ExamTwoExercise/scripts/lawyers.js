var num = 1;
var chronologyNum = 1;

class Info {
    constructor(name, address) {
        if (typeof name === 'string' && name.trim().length > 0) {
            this.name = name;
        } else {
            throw new Error('Invalid name!');
        }

        if (address === null || (typeof address === 'string' && address.trim().length > 0)) {
            this.address = address;
        } else {
            throw new Error('Invalid address!');
        }
    }
}
//съд
class Court extends Info {
    constructor(name, address) {
        super(name, address);
        this.lawyers = [];
        this.lawsuits = [];
    }

    addLawyer(lawyer) {
        if (lawyer instanceof Lawyer && !this.lawyers.includes(lawyer)) {
            this.lawyers.push(lawyer)
        }
    }

    printLawyersAndLawsuits() {
        this.lawyers.sort((l1, l2) => {
            if (l1.name > l2.name) {
                return 1;
            }
        
            if (l1.name < l2.name) {
                return -1;
            }
        
            if (l1.name === l2.name) {
                return 0;
            }
        });
        
        for (let ind = 0; ind < this.lawyers.length; ind++) {
            console.log(`${this.lawyers[ind].name}-${this.lawyers[ind].lawsuitsCount}`);
        }
    }
}
//юрист
class Lawyer extends Info {
    constructor(name, workingYears, lawsuitsCount) {
        super(name, null);
        if (typeof workingYears === 'number' && workingYears >= 0) {
            this.workingYears = workingYears;
        } else {
            throw new Error('Invalid number for years of work!');
        }

        if (typeof lawsuitsCount === 'number' && lawsuitsCount >= 0) {
            this.lawsuitsCount = lawsuitsCount;
        } else {
            throw new Error('Invalid number for lawsuits!');
        }
    }

    askQuestions() {
        //todo
    }

    takeNotes() {
        //todo
    }
}
//адвокат
class Advocate extends Lawyer {
    constructor(name, address, workingYears, lawsuitsCount) {
        super(name, address, workingYears, lawsuitsCount);

        if (this.lawsuitsCount < 10) {
            throw new Error('This person has not enough lawsuits count to be an advocate!')
        }
    }
}
//съдия
class Judge extends Lawyer {
    constructor(name, address, workingYears, lawsuitsCount) {
        super(name, address, workingYears, lawsuitsCount);

        if (this.workingYears < 5) {
            throw new Error('This person has not enough working years to be a judge!');
        }
    }
}
//прокурор
class Prosecutor extends Lawyer {
    constructor(name, address, workingYears, lawsuitsCount) {
        super(name, address, workingYears, lawsuitsCount);

        if (this.workingYears < 10) {
            throw new Error('This person has not enough working years to be a prosecutor!');
        }
    }
}
//съдебен заседател
class Juror extends Lawyer {
    constructor(name, address, workingYears, lawsuitsCount) {
        super(name, address, workingYears, lawsuitsCount);
    }
}
//гражданин
class Citizen extends Info {
    constructor(name, address, age) {
        super(name, address);

        if (typeof age === 'number' && age > 0) {
            this.age = age;
        } else {
            throw new Error('Invalide age!');
        }
    }
}

class PersonInCourt extends Citizen {
    constructor(name, address, age) {
        super(name, address, age);
        this.advocates = [];
    }

    addAdvocate(advocate) {
        if (advocate instanceof Advocate && !this.advocates.includes(advocate)) {
            this.advocates.push(advocate);
        }
    }
}
//обвиняем
class GuiltyPerson extends PersonInCourt {
    constructor(name, address, age) {
        super(name, address, age);
    }
    //todo
}
//обвинител
class Accuser extends PersonInCourt {
    constructor(name, address, age) {
        super(name, address, age);
    }
    //todo
}
//свидетел
class Withness extends Citizen {
    constructor(name, address, age) {
        super(name, address, age);
    }
}
//дело
class Lawsuit {
    constructor(judge, jurors, guiltyPerson, withnesses) {
        if (judge instanceof Judge) {
            this.judge = judge;
        } else {
            throw new Error('Invalid judge!');
        }

        if (Array.isArray(jurors) && jurors.every(j => j instanceof Juror)) {
            this.jurors = jurors;
        } else {
            throw new Error('Invalid data for jurors!');
        }

        if (guiltyPerson instanceof GuiltyPerson) {
            this.guiltyPerson = guiltyPerson;
        } else {
            throw new Error('Invalid guilty person!');
        }

        if (Array.isArray(withnesses) && withnesses.every(w => w instanceof Withness)) {
            this.withnesses = withnesses;
        }

        this.id = num++;
        this.chronology = null;
    }

    doCourtHearing() {
        this.judge.lawsuitsCount += 1;
        this.jurors.forEach(j => j.lawsuitsCount += 1);
        if (this instanceof Criminal) {
            this.accuser.lawsuitsCount += 1;
        }

        this.chronology = new Chronology(chronologyNum);
        this.chronology.lawsuit = this;

        const QUESTIONS_ARR = ['Where have you been between 3 and 5pm?', 'Have you killed the man?', 'How much money have you stolen from the victim?', 'Did you take the neighbor\'s hens?', 'Do you have accomplices in the theft?', 'Did you attack Ms. Milson?', 'Did you put a knife in the back of the victim?', 'Did you poison the dog?', 'Did you know Asen?'];
        const WITHNESSES_QUESTIONS = ['Did you know accused?', 'How many years did you know accused?', 'Where have you been between 3 and 5pm?', 'Who was with you between 3 and 5?', 'Did you help the accused?', 'When did you last see the accused?', 'Where have you been last night?'];

        if (this instanceof Civil) {
            for (let ind = 0; ind < this.accuser.advocates.length; ind++) {
                let currentAdvocate = this.accuser.advocates[ind].name;
                let index1 = Math.floor(Math.random() * QUESTIONS_ARR.length);
                let index2 = Math.floor(Math.random() * QUESTIONS_ARR.length);
                let index3 = Math.floor(Math.random() * QUESTIONS_ARR.length);
                console.log(`${currentAdvocate} asks ${this.guiltyPerson.name}: 1.${QUESTIONS_ARR[index1]} 2.${QUESTIONS_ARR[index2]} 3.${QUESTIONS_ARR[index3]}`);

                let currentQuestion = {
                    askingPerson: currentAdvocate,
                    answeringPerson: this.guiltyPerson.name,
                    allQuestions: [QUESTIONS_ARR[index1], QUESTIONS_ARR[index2], QUESTIONS_ARR[index3]]
                };

                this.chronology.addQuestions(currentQuestion);

                for (let i = 0; i < this.withnesses.length; i++) {
                    let index5 = Math.floor(Math.random() * WITHNESSES_QUESTIONS.length);
                    let index6 = Math.floor(Math.random() * WITHNESSES_QUESTIONS.length);
                    let currentWithness = this.withnesses[i].name;
                    console.log(`${currentAdvocate} asks ${currentWithness} 1.${WITHNESSES_QUESTIONS[index5]} 2.${WITHNESSES_QUESTIONS[index6]}`);

                    let currentQuestion = {
                        askingPerson: currentAdvocate,
                        answeringPerson: currentWithness,
                        allQuestions: [WITHNESSES_QUESTIONS[index5], WITHNESSES_QUESTIONS[index6]]
                    };

                    this.chronology.addQuestions(currentQuestion);
                }
            }
        }

        if (this instanceof Criminal) {
            for (let cnt = 1; cnt <= 5; cnt++) {
                let index = Math.floor(Math.random() * QUESTIONS_ARR.length);
                console.log(`${this.accuser.name} asks ${this.guiltyPerson.name} ${cnt}.${QUESTIONS_ARR[index]}`);
                let currentQuestion = {
                    askingPerson: this.accuser.name,
                    answeringPerson: this.guiltyPerson.name,
                    allQuestions: [QUESTIONS_ARR[index]]
                };

                this.chronology.addQuestions(currentQuestion);
            }

            for (let i = 0; i < this.withnesses.length; i++) {
                let currentWithness = this.withnesses[i].name;
                let index1 = Math.floor(Math.random() * WITHNESSES_QUESTIONS.length);
                let index2 = Math.floor(Math.random() * WITHNESSES_QUESTIONS.length);
                let index3 = Math.floor(Math.random() * WITHNESSES_QUESTIONS.length);
                let index4 = Math.floor(Math.random() * WITHNESSES_QUESTIONS.length);
                let index5 = Math.floor(Math.random() * WITHNESSES_QUESTIONS.length);
                console.log(`${this.accuser.name} asks ${currentWithness} 1.${WITHNESSES_QUESTIONS[index1]} 2.${WITHNESSES_QUESTIONS[index2]} 3.${WITHNESSES_QUESTIONS[index3]} 4.${WITHNESSES_QUESTIONS[index4]} 5.${WITHNESSES_QUESTIONS[index5]}`);

                let currentQuestion = {
                    askingPerson: this.accuser.name,
                    answeringPerson: currentWithness,
                    allQuestions: [WITHNESSES_QUESTIONS[index1], WITHNESSES_QUESTIONS[index2], WITHNESSES_QUESTIONS[index3], WITHNESSES_QUESTIONS[index4], WITHNESSES_QUESTIONS[index5]]
                };

                this.chronology.addQuestions(currentQuestion);
            }
        }

        for (let ind = 0; ind < this.guiltyPerson.advocates.length; ind++) {
            let currentAdvocate = this.guiltyPerson.advocates[ind].name;
            let index1 = Math.floor(Math.random() * WITHNESSES_QUESTIONS.length);
            let index2 = Math.floor(Math.random() * WITHNESSES_QUESTIONS.length);
            let index3 = Math.floor(Math.random() * WITHNESSES_QUESTIONS.length);
            let index4 = Math.floor(Math.random() * WITHNESSES_QUESTIONS.length);
            let index5 = Math.floor(Math.random() * WITHNESSES_QUESTIONS.length);
            for (let i = 0; i < this.withnesses.length; i++) {
                let currentWithness = this.withnesses[i].name;
                console.log(`${currentAdvocate} asks ${currentWithness} 1.${WITHNESSES_QUESTIONS[index1]} 2.${WITHNESSES_QUESTIONS[index2]} 3.${WITHNESSES_QUESTIONS[index3]} 4.${WITHNESSES_QUESTIONS[index4]} 5.${WITHNESSES_QUESTIONS[index5]}`);

                let currentQuestion = {
                    askingPerson: currentAdvocate,
                    answeringPerson: currentWithness,
                    allQuestions: [WITHNESSES_QUESTIONS[index1], WITHNESSES_QUESTIONS[index2], WITHNESSES_QUESTIONS[index3], WITHNESSES_QUESTIONS[index4], WITHNESSES_QUESTIONS[index5]]
                };

                this.chronology.addQuestions(currentQuestion);
            }
        }

        let sayYes = 0;
        let sayNo = 0;

        for (let ind = 0; ind < this.withnesses.length; ind++) {
            if (Math.random() < 0.5) {
                sayYes++;
            } else {
                sayNo++;
            }
        }
        let isPersonGuilty = false;

        if (Math.floor(this.withnesses.length / 2) < sayYes) {
            isPersonGuilty = true;
        }

        this.chronology.addParticipant(this.judge);
        for (let ind = 0; ind < this.jurors.length; ind++) {
            this.chronology.addParticipant(this.jurors[ind]);
        }
        this.chronology.addParticipant(this.guiltyPerson);
        this.chronology.addParticipant(this.accuser);
        for (let ind = 0; ind < this.withnesses.length; ind++) {
            this.chronology.addParticipant(this.withnesses[ind]);
        }

        this.chronology.printIsGuilty(isPersonGuilty);
        let verdict = 0
        if (isPersonGuilty) {
            verdict = Math.floor(Math.random() * 38) + 3;
            console.log(`${this.guiltyPerson.name} is guilty. Тhe verdict is ${verdict} years in prison!`);
        }

        this.chronology.printJudgement(verdict);
    }
}
//наказателно дело
class Criminal extends Lawsuit {
    constructor(judge, jurors, guiltyPerson, withnesses, accuser) {
        super(judge, jurors, guiltyPerson, withnesses);

        if (jurors.length !== 13) {
            throw new Error('Invalid jurors count!');
        }

        if (accuser instanceof Prosecutor) {
            this.accuser = accuser;
        } else {
            throw new Error('Invalid accuser!');
        }
    }
}
//гражданско дело
class Civil extends Lawsuit {
    constructor(judge, jurors, guiltyPerson, withnesses, accuser) {
        super(judge, jurors, guiltyPerson, withnesses);

        if (jurors.length !== 3) {
            throw new Error('Invalid jurors count!');
        }

        if (accuser instanceof Citizen) {
            this.accuser = accuser;
        } else {
            throw new Error('Invalid accuser!');
        }
    }
}
//хронология
class Chronology {
    constructor(chronologyNum) {
        this.count = chronologyNum++;
        this.participants = [];
        this.questions = [];
        this.lawsuit = null;
    }

    addParticipant(participant) {
        let position = '';
        if (participant instanceof Lawyer || participant instanceof Citizen) {
            position = participant instanceof Lawyer ? 'lawyer' : 'citizen';
            let currentObj = {
                name: participant.name,
                position: position
            };

            this.participants.push(currentObj);
        } else {
            throw new Error('Invalid participent!');
        }
    }
    addQuestions(obj) {
        if (obj instanceof Object) {
            this.questions.push(obj);
        }
    }

    printIsGuilty(isGuilty) {
        if (isGuilty) {
            console.log(`${this.lawsuit.guiltyPerson.name} is guilty!`);
        } else {
            console.log(`${this.lawsuit.guiltyPerson.name} is innocent!`);
        }
    }

    printJudgement(verdict) {
        console.log(`The final verdict is ${verdict} years!`);
    }
}

var velikoTarnovo = new Court('Veliko Tarnovo', 'Veliko Tarnovo 1000');
//адвокати:
var pesho = new Advocate('Pesho', 15, 11);
var gosho = new Advocate('Gosho', 7, 15);
var misho = new Advocate('Misho', 17, 12);
var pepo = new Advocate('Pepo', 16, 14);
var desa = new Advocate('Desa', 12, 14);
//съдии:
var pepa = new Judge('Pepa', 6, 10);
var pena = new Judge('Pena', 8, 7);
var ceca = new Judge('Ceca', 10, 11);
//прокурори:
var dido = new Prosecutor('Dido', 11, 7);
var gogo = new Prosecutor('Gogo', 18, 17);
//съдебни заседатели:
var iva = new Juror('Iva', 2, 4);
var ina = new Juror('Ina', 4, 7);
var ivo = new Juror('Ivo', 13, 16);
var zara = new Juror('Zara', 11, 14);
var lara = new Juror('Lara', 2, 8);
var lily = new Juror('Lily', 13, 9);
var mimi = new Juror('Mimi', 14, 12);
var galya = new Juror('Galya', 15, 19);
var zoro = new Juror('Zoro', 12, 19);
var zori = new Juror('Zori', 1, 3);
var ruja = new Juror('Rija', 4, 8);
var roza = new Juror('Roza', 5, 11);
var mara = new Juror('Mara', 7, 19);
var clara = new Juror('Clara', 3, 7);
var peter = new Juror('Peter', 5, 7);
var petra = new Juror('Petra', 9, 15);
//вписване на юристи в съда;
var allLawyers = [pesho, gosho, misho, pepo, desa, pepa, pena, ceca, dido, gogo, iva, ina, ivo, zara, lara, lily, mimi, galya, zoro, zori];

for (let i = 0; i < allLawyers.length; i++) {
    velikoTarnovo.addLawyer(allLawyers[i]);
}
//обвинители:
var bela = new Accuser('Bela', 'Veliko Tarnovo 15', 23);
var bena = new Accuser('Bena', 'Sofia 1000', 32);
var berta = new Accuser('Berta', 'Karlovo 16', 28);
var binko = new Accuser('Binko', 'Veliko Tarnovo 33', 20);
var bica = new Accuser('Bica', 'Veliko Tarnovo 8', 40);
//адвокати на обвинителите:
bela.addAdvocate(pesho);
bela.addAdvocate(misho);
bela.addAdvocate(pepo);
bela.addAdvocate(desa);
bena.addAdvocate(desa);
bena.addAdvocate(pepo);
berta.addAdvocate(pesho);
berta.addAdvocate(gosho);
berta.addAdvocate(misho);
binko.addAdvocate(pesho);
binko.addAdvocate(pepo);
binko.addAdvocate(desa);
bica.addAdvocate(gosho);
bica.addAdvocate(misho);
bica.addAdvocate(pepo);
//обвиняеми:
var tisho = new GuiltyPerson('Tisho', 'Sofia 4000', 22);
var tosho = new GuiltyPerson('Tosho', 'Sofia 8000', 28);
var dancho = new GuiltyPerson('Dancho', 'Sofia 4', 42);
var bojo = new GuiltyPerson('Bojo', 'Plovdiv 4000', 52);
var yonko = new GuiltyPerson('Yonko', 'Varna 4000', 19);
//адвокати на обвиняемите:
tisho.addAdvocate(gosho);
tosho.addAdvocate(pesho);
tosho.addAdvocate(gosho);
tosho.addAdvocate(misho);
dancho.addAdvocate(pepo);
dancho.addAdvocate(desa);
bojo.addAdvocate(gosho);
bojo.addAdvocate(misho);
yonko.addAdvocate(pesho);
yonko.addAdvocate(desa);
//свидетели:
var tanya = new Withness('Tanya', 'Pernik 3000', 31);
var kalcho = new Withness('Kalcho', 'Razgrad 15', 41);
var nina = new Withness('Nina', 'Shumen 4', 27);
var nino = new Withness('Nino', 'Sofia 318', 60);
var neno = new Withness('Neno', 'Pernik 2', 70);
var totio = new Withness('Totio', 'Bourgas 200', 69);
var totka = new Withness('Totka', 'Pernik 241', 55);
var nasko = new Withness('Nasko', 'Sliven 28', 48);
var tinka = new Withness('Tinka', 'Veliko Tarnovo 21', 53);
var zoya = new Withness('Zoya', 'Pernik 15', 38);
//гражданско дело:
belaVsTisho = new Civil(pepa, [iva, ina, ivo], tisho, [tanya, kalcho, nina], bela);
benaVsTosho = new Civil(pena, [zara, lara, lily], tosho, [nino, neno, totio], bena);
bertaVsDancho = new Civil(ceca, [mimi, galya, zoro], dancho, [totka, nasko, tinka], berta);
//наказателно дело:
didoVsBojo = new Criminal(ceca, [iva, ina, ivo, zara, lara, lily, mimi, galya, zoro, zori, ruja, roza, mara], bojo, [tanya, kalcho, tinka, totka], dido);
gogoVsYonko = new Criminal(pepa, [clara, peter, petra, iva, ivo, zara, lara, mimi, galya, zoro, zori, ina, ruja], yonko, [zoya, tinka, nino], gogo);
gogoVsTisho = new Criminal(pena, [iva, ina, ivo, zara, peter, lily, mimi, petra, zoro, zori, ruja, roza, clara], tisho, [tanya, totio, nasko, zoya, tinka], gogo);
//принтиране на всички юристи и делата им:
velikoTarnovo.printLawyersAndLawsuits();
// провеждане на всяко дело:
belaVsTisho.doCourtHearing();
benaVsTosho.doCourtHearing();
bertaVsDancho.doCourtHearing();
didoVsBojo.doCourtHearing();
gogoVsYonko.doCourtHearing();
gogoVsTisho.doCourtHearing();
// принтиране на всички юристи и делата им:
velikoTarnovo.printLawyersAndLawsuits();
