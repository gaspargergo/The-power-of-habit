function Habit(cue,routine,reward){
    this.cue: cue;
    this.routine: routine;
    this.reward: reward;
    this.craving: 0; //a number representation of level of craving
    };

var habits = [];


/*adding example*/
function biteNails(){
	var result = true; //success of the routine
	try{
		for(var i = 0; i < fingers.count;i++){
			fingers[i].bite();
    			}
    	}
    	catch result = false; //unsuccesful routine
    	return result;
    	
var nailBiting = new Habit("tension in finger",biteNails,"physical stimulation");
ingrainHabit(nailBiting);


/*running habits*/
body.addEventListener(e){ //listen for cues and execute habit if there is a craving for revard after a cue
	for(var i = 0;i < habits.length;i++){
		if(e == habits[i].cue && habits[i].craving) runHabit(habits[i]);
	}
	
function runHabit(habit){ 
	if(habit.routine()){
		console.log("yay, happy!"); //habit loop complete
		if(!habit.craving) craving+=0.1;
		}
	else console.log("grr, angery!");
	}


/*making and changing habits*/
function ingrainHabit(habit){ //creating craving through repetition
	var timesNeeded = 10; //number of times needed to create craving, I chose an arbitrary number here
	for(var i = 0; i < timesNeeded,i++){ 
		runHabit(habit);
		}
    }

function changeHabit(habit,newRoutine){ //it's easier to change a habit, if you change only the routine, not the cue or reward
	habit.routine = newRoutine;
	ingrainHabit(habit);
    }
