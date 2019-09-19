// CODE here for your Lambda Classes
class Person {
    constructor (attr1) {
        this.name = attr1.name,
        this.age = attr1.age,
        this.location = attr1.location
    }//closes constructor
    speak() {
       return `Hello, my name is ${this.name} and I am from ${this.location}`
    };//closes method
}//closes class

const isaiah = new Person ({
    name: 'Isaiah',
    age: '21',
    location: 'Denver'
})

const tristan = new Person ({
    name: 'Tristan',
    age: '19',
    location: 'LoDo'
})

class Instructor extends Person {
    constructor (attr2) {
        super(attr2)
        this.name = attr2.name,
        this.specialty = attr2.specialty,
        this.favLanguage = attr2.favLanguage,
        this.catchPhrase = attr2.catchPhrase
      }
      demo(){
          return `Today we are learning about {subject}`
      }
      grade(){
          return `{student.name} receives a perfect score on {subject}`
      }
}

const mark = new Instructor ({
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: 'How are you?'
})

const bernard = new Instructor ({
    specialty: 'Front-End',
    favLanguage: 'CSS',
    catchPhrase: 'Make it pretty!'
})

class Student extends Person {
    constructor (attr3) {
        super(attr3)
        this.previousBackground = attr3.previousBackground,
        this.className = attr3.className,
        this.favSubjects = attr3.favSubjects
    }
    listsSubjects(){
        return `My favorite subjects are ${this.favSubjects}`
    }
    PRAssignment(){
        return `${this.name} has submitted a PR for {subject}`
    }
    sprintChallenge(){
        return `${this.name} has begun sprint challenge on {subject}`
    }
}

const alberto = new Student ({
    name: 'Alberto',
    previousBackground: 'Accupuncturist',
    className: 'WEB24',
    favSubjects: 'Computer Science and English'
})

const boudreau = new Student ({
    name: 'Boudreau',
    previousBackground: 'Sales Account Executive',
    className: 'WEB24',
    favSubjects: 'English and Art'
})

class ProjectManager extends Instructor {
    constructor(attr4) {
        super(attr4)
        this.gradClassName = attr4.gradClassName,
        this.favInstructor = attr4.favInstructor,
        this.channel = attr4.channel
    }
    standUp(){
        return `${this.name} announces to ${this.channel}, @channel standy times!​​​​​`
    }
    debugsCode(){
        return `${this.name} debugs {student.name}'s code on {subject}`
    }
}

const walter = new ProjectManager ({
    name: 'Walter',
    gradClassName: 'WEB23',
    favInstructor: 'Brit',
    channel: 'WEB23_FT'
})

const jeff = new ProjectManager ({
    name: 'Jeff',
    gradClassName: 'UI02',
    favInstructor: 'Don'
})

console.log(isaiah.speak());
console.log(tristan.speak());
console.log(mark.demo());
console.log(bernard.grade());
console.log(alberto.listsSubjects());
console.log(alberto.sprintChallenge());
console.log(boudreau.PRAssignment());
console.log(walter.standUp());
console.log(jeff.debugsCode());