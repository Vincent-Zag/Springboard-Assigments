// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).
let oneTimeTasks = [];
let taskID;

// Task 2: Add One-Time Task Function
function addOneTimeTask (func, delay)
{
	// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
	oneTimeTasks.push({function: func, delay: delay});
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks ()
{
	// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
	for (const oneTimeTask of oneTimeTasks){
		setTimeout(oneTimeTask.function, oneTimeTask.delay);
	}
}

// Task 4: Start Monitoring Function
function startMonitoring ()
{
	// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
	console.log("starting monitoring task.");
	taskID = setInterval(
		function ()
		{
			console.log("space station conditions:");
			/* Condition checks. */
			const foodLevel = Math.random() * 100; 
			const hungerStatus = Math.random() > 0.1 ? "Full" : "HUNGRY";

			console.log(`Food Level: ${foodLevel.toFixed(2)}% | Hunger Status: ${hungerStatus}`);
		},
		2500
	)
}

// Task 5: Stop Monitoring Function
function stopMonitoring ()
{
	// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
	clearInterval(taskID);
	console.log("monitoring stopped");
}

// Task 6: Start Countdown Function
function startCountdown (duration)
{
	// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
	let time = duration;
	console.log(`Starting countdown: ${time} seconds left`)

	const timerId = setInterval(
		function (){
			time--;
			console.log(`T-minus ${time} seconds`);
			if(time <= 0){
				clearInterval(timerId)
				console.log("LIFT OFF!");
			}
		},
		1000 //every 1 second
	)

}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission ()
{
	// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
	startMonitoring();
	addOneTimeTask(function () {console.log("Systems check complete.");},4000);
	addOneTimeTask(stopMonitoring,10000);
	addOneTimeTask(function () {startCountdown(10);}, 15000);

	runOneTimeTasks();
}

scheduleMission(); // Starts the mission.
