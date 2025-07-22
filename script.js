const age = parseInt(prompt("Enter your age:"));

if (age < 0) {
  alert("Invalid age.");
} else if (age < 12) {
  alert("You're a child 👶");
} else if (age < 20) {
  alert("You're a teenager ✨");
} else if (age < 60) {
  alert("You're an adult 💼");
} else {
  alert("You're a senior 🧓");
}
