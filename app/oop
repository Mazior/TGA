//petstore that displays the pet card details

function Pet{
	constructor(petName,petType, petAge,petDisposition){

	this.petName=petName;
	this.petType=petType;
	this.petAge = petAge;
	this.petDisposition = petDisposition;
	}

Object.defineProperties(this,{
	petName:{
		get(){
			return this.constructor.petName;
	},
},
	petType:{
		get(){
			return this.constructor.petType;
			},
		},
	petAge:{
	get(){
		return this.constructor.petAge;
	},
	},

	petDisposition:{
		get(){
		return this.constructor.petDisposition;
		},
	},
	
});

this.petDescription = function (){
	return 'Pet Card\n' + this.type + " "	+ this.petName +' is '+ this.petAge + \n + this.petDisposition
},
}

function Dog(petName,petType, petAge,petDisposition){
	if (!(this instanceof Dog)){
		return new Dog(petName,petType, petAge,petDisposition);
	}
	this.petName = petName || petName;
	this.petType = petType || petType;
	this.petAge = petAge || petAge;
	this.petDisposition = petDisposition || petDisposition;

	Dog.prototype.petDescription = function(){
	return this.petDescription();
	};

}

function Unicorn(petName,petType, petAge,petDisposition){
	if (!(this instanceof Dog)){
		return new Dog(petName,petType, petAge,petDisposition);
	}
	this.petName = petName || petName;
	this.petType = petType || petType;
	this.petAge = petAge || petAge;
	this.petDisposition = petDisposition || petDisposition;

	Dog.prototype.petDescription = function(){
	return this.petDescription();
	};

}
Dog.prototype = new Pet();
Dog.prototype.constructor =  Dog;

Unicorn.prototype = new Pet();
Unicorn.prototype.constructor = Unicorn;