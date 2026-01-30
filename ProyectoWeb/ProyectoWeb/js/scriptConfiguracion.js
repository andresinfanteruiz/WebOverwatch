const video = document.getElementById("video");
const resolutionSlider = document.getElementById("resolution");
const graphicsSlider = document.getElementById("graphics");
const volumeSlider = document.getElementById("volume");

resolutionSlider.addEventListener("input", function() 
{
    video.width = this.value;
});

graphicsSlider.addEventListener("input", function() 
{
    let value = this.value / 100;
    video.style.filter = `brightness(${value}) contrast(${value})`;
});

volumeSlider.addEventListener("input", function() 
{
    video.volume = this.value;
});

