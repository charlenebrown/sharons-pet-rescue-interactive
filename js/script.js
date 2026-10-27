const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
    const pet = {
        name: name,
        species: species,

        isTired: 5,
        sleep: function () {
            this.isTired = 1;
            console.log(`${this.name} needs a nap. Zzz…`);
            
        },
         play: function () {
            if (this.isTired === 10) {
                console.log("Too tired to play.");
                this.sleep();
            }
            
            else {
                this.isTired += 1;
                console.log(`Yay, ${this.name} loves to play!`);
            }
        } 
    };
return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle"); 
//console.log(sora, clover, baxter, cleo, francine);

