particlesJS.load('particles-js', 'particles.json', function () {
    console.log('callback - particles.js config loaded');
});
const instance = new Typewriter('#typewriter', {
    loop: true
});

instance.typeString("Hello World 👋")
    .pauseFor(1000)
    .deleteAll()
    .typeString('I am Prit.')
    .pauseFor(200)
    .deleteAll()
    // .deleteChars(10)
    .typeString('an aspiring Software Engineer.')
    .pauseFor(1000)
    .deleteChars(30)
    .typeString('currently learning<br>Web Development.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Check out my work at<br>github.com/Prit33')
    .pauseFor(1000)
    .deleteAll()
    .start();
