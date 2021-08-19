function Habit(cue,routine,reward){
    this.cue: cue;
    this.routine: routine;
    this.reward: reward;
    this.craving: 0; //a number representation of level of craving
};

var habits = [];

/*adding example*/
function biteNails(){
	var result = true; //stays true if nailbiting was succesful
	try{
		for(var i = 0; i < fingers.count;i++){
			fingers[i].bite();
    		}
    	}
    	catch result = false; //unsuccesful routine
    	return result;
}    	
var nailBiting = new Habit("tension in finger",biteNails,"physical stimulation");
habits.push(nailBiting);
ingrainHabit(nailBiting);

/*running habits*/
document.addEventListener("cue", function(){ //listen for cues and execute habit if there is a craving for revard after a cue
	for(var i = 0;i < habits.length;i++){
		if(cue == habits[i].cue && habits[i].craving) runHabit(habits[i]);
	}
});
	
function runHabit(habit){ 
	if(habit.routine()){
		console.log("yay, happy!"); //habit loop complete
		if(!habit.craving) craving+=0.1; //creating a craving throught repetition if its not yet present
	}
	else console.log("grr, angery!");
}

/*making and changing habits*/
function ingrainHabit(habit){
    var timesToIngrain = 10; //number of times needed to create craving, I chose an arbitrary number here
	for(var i = 0; i < timesToIngrain,i++){ 
		runHabit(habit);
	}
}

function changeHabit(habit,newRoutine){ //it's easier to change a habit if you change only the routine, not the cue or reward
	habit.routine = newRoutine;
	ingrainHabit(habit);
}
