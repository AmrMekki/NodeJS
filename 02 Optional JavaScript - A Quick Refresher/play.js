const person = {
    name: "Max",
    age: 29,
    greet(){
        console.log("Hi, I am" + this.name);
    }
};

const hobbies = ['Sports', 'Cooking'];

for (let hobby in hobbies){
    console.log(hobby);
}