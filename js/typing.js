document.addEventListener("DOMContentLoaded", () => {
  const roles = ["an IB World Student", "a Programmer", "an Air Force Cadet", "a Student Editor", "the PZMS SCA President", "an active Volunteer", "a NJHS Member"];
  let roleIndex = 0;
  let charIndex = 0;
  const roleElement = document.getElementById("role");
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenRoles = 1500;

  function typeRole() {
    if (charIndex < roles[roleIndex].length) {
      roleElement.textContent += roles[roleIndex][charIndex];
      charIndex++;
      setTimeout(typeRole, typingSpeed);
    } else {
      setTimeout(deleteRole, delayBetweenRoles);
    }
  }

  function deleteRole() {
    if (charIndex > 0) {
      roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(deleteRole, deletingSpeed);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, typingSpeed);
    }
  }

  typeRole();
});
