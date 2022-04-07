import { useState, useEffect, useRef } from "react";

function Video () {
	const video = useRef();
	const [keyPressed, setKeyPressed] = useState(false);
	const checkpoint_times = [9.95, 27.20, 35, 46.17, 61.15, 73.2, 78.11, 84.12, 113.75];
	const checkpoint_ctr_max = checkpoint_times.length;
	let checkpoint_ctr = 0;
	const audio = new Audio("audio.mp3");
	
	const timeupdate = () => { 
		if (checkpoint_times[checkpoint_ctr] <= video.current.currentTime) {
				video.current.pause();
				checkpoint_ctr++;
		} 
	}

	const try_proceed_checkpoint_next = () => {
		if (checkpoint_ctr >= checkpoint_ctr_max) 
			return;

		video.current.play();

		if (video.current.currentTime < checkpoint_times[1] && video.current.currentTime >= checkpoint_times[0]) 
			audio.play();
	}

	const try_proceed_checkpoint_final = () => {
		if (checkpoint_ctr >= checkpoint_ctr_max) 
			return;

		video.current.pause();

		video.current.currentTime = checkpoint_times[checkpoint_ctr_max-1];
		audio.pause();
		checkpoint_ctr = checkpoint_ctr_max;
	}

  return (
		<section className='bg-white'>
			<div className="w-full h-screen overflow-hidden flex justify-center items-center">
				<video autoPlay muted ref={video} onTimeUpdate={timeupdate} onClick={try_proceed_checkpoint_next}>
						<source 
							src="video.mp4" 
							type="video/mp4" 
							className="w-full h-full"
						>
						</source>
				</video>				
			</div>
			<div className="w-full flex justify-center">
				<button 
					className="w-9 skip"
					onClick={try_proceed_checkpoint_final}
				>
					<img src="images/next.png" />
				</button>
			</div>		
		</section>
	)		
}

export default Video
