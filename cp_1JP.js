const form = document.querySelector("#feedback-form");
const feedbackDisplay = document.querySelector("#feedback-display");
const tooltip = document.querySelector("#tooltip");
const commentsField = document.querySelector("#comments");
const charCount = document.querySelector("#char-count");

const fields = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  comments: document.querySelector("#comments")
};

const errors = {
  name: document.querySelector("#name-error"),
  email: document.querySelector("#email-error"),
  comments: document.querySelector("#comments-error")
};

// Character counter
commentsField.addEventListener("input", () => {
  charCount.textContent = `${commentsField.value.length} characters`;
});

// Optional keyboard event example
commentsField.addEventListener("keydown", (event) => {
  // Example: log Enter key press without blocking typing
  if (event.key === "Enter") {
    console.log("User pressed Enter inside the comments field.");
  }
});

// Event delegation for mouseover / mouseout on all form inputs
form.addEventListener("mouseover", (event) => {
  const target = event.target;

  if (
    target.matches("input") ||
    target.matches("textarea")
  ) {
    const message = target.dataset.tooltip;
    if (message) {
      tooltip.textContent = message;
      tooltip.classList.remove("hidden");
      tooltip.style.left = `${event.clientX + 12}px`;
      tooltip.style.top = `${event.clientY + 12}px`;
    }
  }
});

form.addEventListener("mousemove", (event) => {
  if (!tooltip.classList.contains("hidden")) {
    tooltip.style.left = `${event.clientX + 12}px`;
    tooltip.style.top = `${event.clientY + 12}px`;
  }
});

form.addEventListener("mouseout", (event) => {
  const target = event.target;

  if (
    target.matches("input") ||
    target.matches("textarea")
  ) {
    tooltip.classList.add("hidden");
  }
});

// Event delegation for input validation clearing
form.addEventListener("input", (event) => {
  const target = event.target;

  if (target.matches("input") || target.matches("textarea")) {
    const fieldName = target.name;
    errors[fieldName].textContent = "";
  }
});

// Prevent background clicks from triggering form-related events
form.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Example background click listener
document.body.addEventListener("click", () => {
  console.log("Background clicked.");
});

function validateForm() {
  let isValid = true;

  const nameValue = fields.name.value.trim();
  const emailValue = fields.email.value.trim();
  const commentsValue = fields.comments.value.trim();

  // Reset errors
  errors.name.textContent = "";
  errors.email.textContent = "";
  errors.comments.textContent = "";

  if (nameValue === "") {
    errors.name.textContent = "Name is required.";
    isValid = false;
  }

  if (emailValue === "") {
    errors.email.textContent = "Email is required.";
    isValid = false;
  } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
    errors.email.textContent = "Please enter a valid email.";
    isValid = false;
  }

  if (commentsValue === "") {
    errors.comments.textContent = "Comments are required.";
    isValid = false;
  }

  return isValid;
}

function appendFeedbackEntry(name, email, comments) {
  const card = document.createElement("div");
  card.classList.add("feedback-card");

  const title = document.createElement("h3");
  title.textContent = name;

  const emailText = document.createElement("p");
  emailText.classList.add("meta");
  emailText.textContent = `Email: ${email}`;

  const commentText = document.createElement("p");
  commentText.textContent = comments;

  card.appendChild(title);
  card.appendChild(emailText);
  card.appendChild(commentText);

  feedbackDisplay.appendChild(card);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  const nameValue = fields.name.value.trim();
  const emailValue = fields.email.value.trim();
  const commentsValue = fields.comments.value.trim();

  appendFeedbackEntry(nameValue, emailValue, commentsValue);

  form.reset();
  charCount.textContent = "0 characters";
});