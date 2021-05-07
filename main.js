particlesJS.load('particles-js', 'particles.json', function () {
    console.log('callback - particles.js config loaded');
});
const instance = new Typewriter('#typewriter', {
    loop: true
});

instance.typeString('Hello<b style="color:rgb(200, 200, 200)">_</b>there !')
    .pauseFor(1000)
    .deleteAll()
    .typeString('I\'m <b style="color:#ffffff">Prit</b>')
    .pauseFor(200)
    .deleteAll()
    .typeString('First year Btech <b style="color:rgb(255, 255, 255)">Student</b>')
    .pauseFor(1000)
    .deleteChars(30)
    .typeString('Learning <b style="color:rgb(255, 255, 255)">Web Development</b>')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Check out my work at github.com/<b style="color:#ffffff">Prit33<b>')
    .pauseFor(1000)
    .deleteAll()
    .start();
