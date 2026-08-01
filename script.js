const facts = [
  "After a military campaign in Nubia, Thutmose III had a stele erected at the Temple of Amun, beneath the Jebel Barkal outcropping. The stele describes how a star came down to set fire to Thutmose's adversaries.",
  "Romano-Jewish historian Flavius Josephus reported chariots hurtling through the clouds prior to the First Jewish–Roman War",
  "Moving and whirring lights were reported in the sky around Otago. In the following months, many sightings were reported across New Zealand with varying descriptions of the craft and crew.",
  "During his Asian expedition, Russian theosophist Nicholas Roerich reported an oval in the sky above his caravan, which was later interpreted as a flying saucer",
  "During World War II, allied fighter pilots above Europe reported colorful balls of light following their aircraft at high speeds."
];

const randomIndex = Math.floor(Math.random() * facts.length);
document.getElementById('fact-text').textContent = facts[randomIndex];

const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.textContent = 'Light Mode';
}
themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  if (isDarkMode) {
    themeToggle.textContent = 'Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});