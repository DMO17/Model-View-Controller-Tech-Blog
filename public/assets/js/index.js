const signupForm = $(".sign-up-form");

const handleSignUp = async (event) => {
  event.preventDefault();

  const first_name = $("#first-name").val();
  const last_name = $("#last-name").val();
  const email = $("#email").val();
  const username = $("#username").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirm-password").val();

  console.log(password, confirmPassword);

  if (password === confirmPassword && password.length > 8) {
    const response = await fetch("/auth/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        first_name,
        last_name,
      }),
      redirect: "follow",
    });

    const data = await response.json();

    if (data.success) {
      window.location.replace("/login");
    } else {
      const warning = `<div class="alert alert-success" role="alert">
       The email or username already has an account
      </div>`;

      return signupForm.append(warning);
    }
  } else if (password === confirmPassword && password.length < 8) {
    const warning = `<div class="alert alert-success" role="alert">
     Your password must be have over 8 characters
    </div>`;

    return signupForm.append(warning);
  } else {
    const warning = `<div class="alert alert-success" role="alert">
    Your confirm password does'nt match
  </div>`;

    return signupForm.append(warning);
  }
};

signupForm.on("submit", handleSignUp);
