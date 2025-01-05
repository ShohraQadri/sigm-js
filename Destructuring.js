const course={
    name:"Shohra",
    Age:"24",
    graduation:"B.tech"
}
const {graduation}=course;
// second method agr name bht long h to 
const {graduation:gradute}=course;
console.log(gradute);
console.log(course);
console.log(graduation);
