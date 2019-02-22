function isValidPage(totalPages, currentPage) {
    if (typeof currentPage === 'number' && currentPage % 1 === 0 && currentPage > 0 && totalPages >= currentPage) {
        return true;
    }

    return false;
}

function isValidPassword(password) {
    if (typeof password === 'string' && password.trim().length >= 5 && password.split('').some(s => s >= 'a' && s <= 'z') && password.split('').some(s => s >= 'A' && s <= 'Z') && password.split('').some(s => s >= '0' && s <= '9')) {
        return true;
    }

    return false;
}

class Page {
    constructor(title, text) {
        if (typeof title === 'string') {
            this.title = title;
        } else {
            throw new Error('Invalid title!');
        }

        if (typeof text === 'string') {
            this.text = text;
        } else {
            throw new Error('Invalid text!');
        }
    }

    addText(str) {
        if (typeof str === 'string') {
            this.text += ' ' + str;
        } else {
            throw new Error('Invalid text!')
        }
    }

    deleteText() {
        this.text = '';
    }

    lookPage() {
        console.log(this.title);
        console.log(this.text);
    }

    searchWord(word) {
        if (typeof word === 'string' && word.trim().length > 0) {
            if (this.text.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
                console.log(`Page with title ${this.title} contains the word - ${word}.`);
            } else {
                console.log(`Page with title ${this.title} does not contain the word - ${word}.`);
            }
        }
    }

    containsDigit() {
        if (this.text.split('').some(s => s >= '0' && s <= '9')) {
            return true;
        } else {
            return false;
        }
    }
}

class SimpleNotepad {
    constructor(numberOfPages) {
        if (typeof numberOfPages === 'number' && numberOfPages > 0 && numberOfPages % 1 === 0) {
            this.numberOfPages = numberOfPages;
            this.pages = [];

            for (let cnt = 0; cnt < numberOfPages; cnt++) {
                this.pages.push(new Page(`Page ${cnt + 1}`, ''));
            }
        }
    }

    addText(str, pageNumber) {
        if (isValidPage(this.pages.length, pageNumber)) {
            this.pages[pageNumber - 1].addText(str);
        } else {
            throw new Error('Invalid page number!');
        }
    }

    replaceText(str, pageNumber) {
        if (typeof str === 'string' && isValidPage(this.pages.length, pageNumber)) {
            this.pages[pageNumber - 1].deleteText();
            this.pages[pageNumber - 1].addText(str);
        } else {
            throw new Error('Invalid data for replacing text!');
        }
    }

    deleteText(pageNumber) {
        if (isValidPage(this.pages.length, pageNumber)) {
            this.pages[pageNumber - 1].deleteText();
        } else {
            throw new Error('Invalid page number!');
        }
    }

    lookAllPages() {
        this.pages.forEach(p => p.lookPage());
    }

    searchWord(word) {
        this.pages.forEach(p => p.searchWord(word));
    }

    printAllPagesWithDigit() {
        this.pages.forEach(p => {
            if (p.containsDigit()) {
                console.log(p.text);
            }
        })
    }
}

class SecuredNotepad extends SimpleNotepad {
    constructor(numberOfPages, password) {
        super(numberOfPages);
        if (isValidPassword(password)) {
            this.password = password;
        } else {
            throw new Error('Invalid password!');
        }
    }

    addText(str, pageNumber, pass) {
        if (this.password === pass) {
            super.addText(str, pageNumber);
        } else {
            throw new Error('Incorrect password!');
        }
    }

    replaceText(str, pageNumber, pass) {
        if (this.password === pass) {
            super.replaceText(str, pageNumber);
        } else {
            throw new Error('Incorrect password!');
        }
    }

    deleteText(pageNumber, pass) {
        if (this.password === pass) {
            super.deleteText(pageNumber);
        } else {
            throw new Error('Incorrect password!');
        }
    }

    lookAllPages(pass) {
        if (this.password === pass) {
            super.lookAllPages();
        } else {
            throw new Error('Incorrect password!');
        }       
    }

    searchWord(word, pass) {
        if (this.password === pass) {
            super.searchWord(word);
        } else {
            throw new Error('Incorrect password!');
        } 
    }

    printAllPagesWithDigit(pass) {
        if (this.password === pass) {
            super.printAllPagesWithDigit();
        } else {
            throw new Error('Incorrect password!');
        }   
    }
}

class ElectronicDevice {
    constructor() {
        this.isStarted = false;
    }

    start() {
        this.isStarted = true;
    }

    stop() {
        this.isStarted = false;
    }
}

class ElectronicSecuredNotepad extends SecuredNotepad {
    constructor(numberOfPages, password, electronicDevice) {
        super(numberOfPages, password);

        if (electronicDevice instanceof ElectronicDevice) {
            this.electronicDevice = electronicDevice;
        }
    }

    addText(str, pageNumber, pass) {
        if (this.electronicDevice.isStarted) {
            super.addText(str, pageNumber, pass);
        } else {
            throw new Error('Electronic device is not started!');
        }
    }

    replaceText(str, pageNumber, pass) {
        if (this.electronicDevice.isStarted) {
            super.replaceText(str, pageNumber, pass);
        } else {
            throw new Error('Electronic device is not started!');
        }
    }

    deleteText(pageNumber, pass) {
        if (this.electronicDevice.isStarted) {
            super.deleteText(pageNumber, pass);
        } else {
            throw new Error('Electronic device is not started!');
        }
    }

    lookAllPages(pass) {
        if (this.electronicDevice.isStarted) {
            super.lookAllPages(pass);
        } else {
            throw new Error('Electronic device is not started!');
        }       
    }

    searchWord(word, pass) {
        if (this.electronicDevice.isStarted) {
            super.searchWord(word, pass);
        } else {
            throw new Error('Electronic device is not started!');
        }
    }

    printAllPagesWithDigit(pass) {
        if (this.electronicDevice.isStarted) {
            super.printAllPagesWithDigit(pass);
        } else {
            throw new Error('Electronic device is not started!');
        }
    }
}

var notepad1 = new SimpleNotepad(5);
var notepad2 = new SimpleNotepad(3);
var notepad3 = new SecuredNotepad(4, '1234Hi');
notepad1.addText('Hello', 1);
notepad1.addText('Hi2', 2);
notepad1.addText('Hah', 3);
notepad1.addText('How are you?4', 4);
notepad1.addText('Good luck!', 5);
notepad1.deleteText(1);
notepad1.replaceText('Hello', 3);
notepad1.lookAllPages();
console.log('----------------------');
notepad3.addText('Happy! Hi', 1, '1234Hi');
notepad3.addText('Gappy!', 2, '1234Hi');
notepad3.addText('Lily! Hi', 3, '1234Hi');
notepad3.addText('Clara!', 4, '1234Hi');
notepad3.deleteText(4, '1234Hi');
notepad3.replaceText('I will go there! 3', 2, '1234Hi');
notepad3.lookAllPages('1234Hi');
console.log('----------------------');
console.log(notepad1);
notepad1.searchWord('HI');
console.log('----------------------');
notepad1.printAllPagesWithDigit();
console.log('----------------------');
notepad3.searchWord('hi', '1234Hi');
notepad3.printAllPagesWithDigit('1234Hi');
console.log('----------------------');
var electronic = new ElectronicDevice();
electronic.start();
var electrNote = new ElectronicSecuredNotepad(3, '12gH5Tdf0', electronic);
electrNote.lookAllPages('12gH5Tdf0');

