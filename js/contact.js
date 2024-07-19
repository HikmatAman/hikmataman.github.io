document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const messageField = document.getElementById("message");
    const charCountDisplay = document.getElementById("charCount");

    messageField.addEventListener("input", function () {
      const charCount = messageField.value.length;
      charCountDisplay.textContent = `${charCount}/2000 characters`;
    });

    // Check if message exceeds 2000 characters
    if (message.length > 2000) {
      alert(
        "Your message exceeds the 2000 character limit. Please shorten it."
      );
      return;
    }

    const webhookURL =
      "https://discord.com/api/webhooks/1263631724756205568/iC_ljB0AlYSz3dqg05t1lr54HnAyidr7ij46Et1aWzb9Y1AtaBPWCTl8M78xX1bdwei4";
    const request = new XMLHttpRequest();
    request.open("POST", webhookURL);

    request.setRequestHeader("Content-type", "application/json");

    const params = {
      username: "Portfolio Contact Form",
      avatar_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKi_EvUp_xZWM-8hk3cUiLVaNTnZL8LTyt_UVFHi7TbM2MYy5",
      content: `<@652335841951350784> **Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
    };

    request.send(JSON.stringify(params));

    alert("Your message has been sent!");
    document.getElementById("contactForm").reset();
  });
