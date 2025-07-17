/**
 * Simple animation utility using requestAnimationFrame
 */

function animate({ duration, timing, draw }) {
    const start = performance.now();

    function frame(time) {
        // timeFraction goes from 0 to 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
        if (timeFraction < 0) timeFraction = 0;

        // Calculate the current progress using the timing function
        const progress = timing(timeFraction);

        // Draw the animation at the current progress
        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(frame);
        }
    }

    requestAnimationFrame(frame);
}

// Example usage:
// animate({
//   duration: 1000,
//   timing: t => t, // linear
//   draw: progress => {
//     // e.g., move an element
//     element.style.left = progress * 100 + 'px';
//   }
// });

export { animate };