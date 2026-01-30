const bossHealthBar = document.getElementById("healthBoss");
const bossHealthText = document.getElementById("bossHealthText");
const characters = 
[
    document.getElementById("char1"),
    document.getElementById("char2"),
    document.getElementById("char3"),
    document.getElementById("char4")
];
const healthBars = 
[
    document.getElementById("health1"),
    document.getElementById("health2"),
    document.getElementById("health3"),
    document.getElementById("health4")
];
const healthTexts = 
[
    document.getElementById("healthText1"),
    document.getElementById("healthText2"),
    document.getElementById("healthText3"),
    document.getElementById("healthText4")
];

bossHealthBar.addEventListener("input", function() 
{
    boss.style.opacity = this.value / 135;
    bossHealthText.textContent = this.value;
});

healthBars.forEach((bar, index) => 
{
    bar.addEventListener("input", function() 
    {
        characters[index].style.opacity = this.value / 135;
        healthTexts[index].textContent = this.value;
    });
});

document.getElementById("switch").addEventListener("click", function() 
{
    let positions = characters.map(char => ({ top: char.style.top, left: char.style.left }));
    positions.unshift(positions.pop());
    characters.forEach((char, index) => 
    {
        char.style.top = positions[index].top;
        char.style.left = positions[index].left;
    });
});