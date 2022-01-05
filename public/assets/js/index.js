const signupForm = $(".sign-up-form");
const loginForm = $(".log-in-form");
const logOutBtn = $("#logout-btn");
const createBlog = $(".create-blog");
const editBlog = $(".edit-blog");

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

const handleLogin = async (event) => {
  event.preventDefault();

  const username = $("#username").val();
  const password = $("#password").val();

  console.log(username, password);

  const response = await fetch("/auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,

      password,
    }),
    redirect: "follow",
  });

  const data = await response.json();

  if (data.success) {
    window.location.replace("/dashboard");
  } else {
    const warning = `<div class="alert alert-success" role="alert">
      Username or password is incorrect
    </div>`;

    return loginForm.append(warning);
  }
};

const handleLogout = async () => {
  const response = await fetch("/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (data.success) {
    window.location.replace("/login");
  }
};

const handleCreateBlogPost = async (event) => {
  event.preventDefault();

  const title = $("#blog-title").val();
  const blog_img = $("#blog-img").val();
  const content = $("#blog-content").val();

  console.log(title, `${blog_img}`, content);
  const response = await fetch("/api/blog", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      blog_img,
      content,
    }),
    redirect: "follow",
  });

  const data = await response.json();

  if (data.success) {
    window.location.replace("/dashboard");
  }
};

const handleEditBlogPost = async (event) => {
  event.preventDefault();

  const title = $("#edit-title").val();
  const blog_img = $("#edit-img").val();
  const content = $("#edit-content").val();

  console.log(title, `${blog_img}`, content);
  const response = await fetch("/api/blog", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      blog_img,
      content,
    }),
    redirect: "follow",
  });

  const data = await response.json();

  if (data.success) {
    window.location.replace("/dashboard");
  }
};

loginForm.on("submit", handleLogin);
signupForm.on("submit", handleSignUp);
logOutBtn.on("click", handleLogout);
createBlog.on("submit", handleCreateBlogPost);
editBlog.on("submit", handleEditBlogPost);
