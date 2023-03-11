let val = document.getElementById("value");
let btn = document.getElementById("start");
let val1 = document.getElementById("hr");
let val2 = document.getElementById("min");
let cont = document.getElementById("cont")
let emg = document.getElementById("emg")

const audio = new Audio(
  "https://cdn.pixabay.com/download/audio/2021/08/09/audio_a4637e27f0.mp3?filename=smartphone_vibrating_alarm_silent-7040.mp3"
);
function play() {
  audio.play();
}
function stop() {
  audio.pause();
  audio.currentTime = 0;
}
btn.addEventListener("click", () => {
  var b = val2.value;
  var a = val1.value;
  
       

  const mytime = setInterval(() => {
    let p = new Date();
    if (a == p.getHours() && b == p.getMinutes()) {
      play();
      setTimeout(()=>{
        emg.removeChild(emg.childNodes[1])
       x = "Ringing...."
       emg.innerHTML = x;
       emg.classList.add("afterp")
       btn.classList.remove("start")
       btn.classList.add("stop")
       btn.innerHTML = "Stop"
       btn.addEventListener('click',()=>{
        // stop();
        // clearInterval(mytime)
        window.location.reload()
       })
      },2000)
       
    }
  }, 1000);
});
