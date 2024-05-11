let tablinks = document.querySelectorAll(".tab-links");
let tabcontainers = document.querySelectorAll(".tab-container");

function opentab(tabname) {
tablinks.forEach(tablink => {
 tablink.classList.remove('active-link');
});
tabcontainers.forEach(tabcontainer => {
 tabcontainer.classList.remove('active-tab');
});
event.currentTarget.classList.add('active-link');
document.getElementById(tabname).classList.add('active-tab');
}
window.addEventListener('scroll', function() {
var button = document.getElementById('stickyBtn');
if (window.scrollY > 100) { // Adjust the scroll threshold as needed
 button.classList.add('show');
} else {
 button.classList.remove('show');
}
});
const changingText = document.getElementById('changingText');
const cursor = document.getElementById('cursor');
const texts = ['WelCome','Student', 'Front-End Developer', 'Hire Me', ]; // Add more texts as needed
let index = 0;

function animateText(text, index, charIndex) {
if (index >= texts.length) index = 0;
if (charIndex < text.length) {
changingText.textContent += text.charAt(charIndex);
charIndex++;
setTimeout(() => animateText(text, index, charIndex), 100); // Adjust the speed here (milliseconds per letter)
} else {
setTimeout(() => {
changingText.textContent = '';
cursor.style.display = 'none';
animateText(texts[index], index + 1, 0);
}, 2000); // Delay before starting the next text animation (2 seconds)
}
}

animateText(texts[index], index, 0);


// To Open the side  Menu  in small screens
var humburger = document.querySelector('#sideMenu');
humburger.addEventListener("click", () => {
    document.querySelector('nav ul').style.right = "0";
    console.log('Hamburger menu opened');
});
// To Close the side  Menu  in small screens

var x = document.querySelector('#close');
x.addEventListener("click", () => {
    document.querySelector('nav ul').style.right = "-200px";
    console.log('Hamburger menu closed');
});

//Fetch the words from Json file

// fetch('projects.json')
//     .then(response => response.json())
//     .then(data => {
//         let project = document.querySelector('.work-list');
//         for (const work of data) {
//             project.innerHTML = `<div class="work" id="names">
//                         <img src="images/${work.Img}" alt="img">
//                         <div class="layer">
//                             <h3>${work.Title}</h3>
//                             <p>${work.Description}</p>
//                             <a href="${work.Link}"><i class="fa-solid fa-link"></i></a>
//                         </div>
//                     </div>`;
//         }
//     })
//     .catch(error => console.error('Error fetching data:', error));







//Sending the Email from website to my email id


// function SendEmail() {
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "mirwazirkazimi@gmail.com",
//         Password : "20189252",
//         To : 'mirwazirkazimi@gmail.com',
//         From : document.getElementById('email').value,
//         Subject : document.getElementById('Subject').value,
//         Body : document.getElementById('msg').value
//     }).then(
//       message => alert(message)
//     );
// }
//     // Now you need to send this data using a service or server-side script.
//     // You can't directly send email from client-side JavaScript due to security restrictions.
//  SendEmail();

// Form to google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbyF42A1hmBc__UFlKx5VCEX7gr842RrXmLOnWXgtlcoMEG2ZPdxry1v8nQSIAgQPzh_/exec'
const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById('sent');
const btn= document.getElementsByClassName('button-2')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>
        {    
            msg.innerHTML='Your Message sent successfullt..!';
            btn.innerText="Submited"
            setTimeout(function () {
                msg.innerHTML='';
            },5000)
            form.reset();
        }
    )
    .catch(error => console.error('Error!', error.message))
})