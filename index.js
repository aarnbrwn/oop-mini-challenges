// Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied.getCurrentValue should return the last answer returned from multiply.

function Multiplier() {
    this.value = 1;
    this.multiply = function(x) {
      this.value = x * this.getCurrentValue();
      return this.getCurrentValue();
    }
    this.getCurrentValue = function() {
      return this.value;
    }
}

var multiple = new Multiplier();
console.log(multiple.multiply(4));
console.log(multiple.multiply(5));
console.log(multiple.multiply(6));

// Implement an object model that allows you to store strings that represent a Photo. Your model should include an Album object that can contain many Photo objects in its photos attribute. Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. Each Photo should store the photo's file name and the location the photo was taken in as strings. Create instances of each object defined to prove that your object model works.

function Photo(name, location) {
  this.name = name;
  this.location = location;
}

function Album() {
  this.photos = [];
  this.addPhoto = function(inPhoto) {
    this.photos.push(inPhoto)
  }
  this.listPhoto = function() {
    console.log('All Photos:');
    this.photos.forEach(
      (element) => console.log(element.location + element.name)
    );
  };
  this.getPhoto = function (x) {
    return this.photos[x - 1].location + '  ' + this.photos[x - 1].filename;
  };
}

var pic1 = new Photo('img1.jpg', 'd:\\');
var pic2 = new Photo('img2.jpg', 'd:\\');

var myAlbum = new Album()

myAlbum.addPhoto(pic1);
myAlbum.addPhoto(pic2);

myAlbum.listPhoto();


// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.

function Person(name) {
  this.name = name;
}

function Teacher(name, subject) {
  Person.call(this, name);
  this.subject = subject;
  this.info = name + ' teaches ' + subject;
}

function Student(name, grade) {
  Person.call(this, name);
  this.grade = grade;
  this.info = name + ' is in ' + grade + ' grade';
}

function School(name) {
  this.name = name;
  this.students = [];
  this.teachers = [];
  this.addStudent = function(add) {
    this.students.push(add);
  }
  this.addTeacher = function(add) {
    this.teachers.push(add);
  }
}

var john = new Teacher('John', 'English');
var sarah = new Teacher('Sarah', 'Math');
var sue = new Teacher('Sue', 'Gym');

var bill = new Student('Bill', '11th');
var janet = new Student('Janet', '12th');
var sean = new Student('Sean', '10th');

var pmsd = new School('PMSD');
pmsd.addStudents](bill)
