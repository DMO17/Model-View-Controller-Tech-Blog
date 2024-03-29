const signupForm = $(".sign-up-form");
const loginForm = $(".log-in-form");
const logOutBtn = $("#logout-btn");
const createBlog = $(".create-blog");
const editBlog = $(".edit-blog");
const deleteBlog = $(".delete-btn");
const commentForm = $(".comment-form");
const deleteAComment = $(".delete-comment");

const handleSignUp = async (event) => {
  event.preventDefault();

  const first_name = $("#first-name").val();
  const last_name = $("#last-name").val();
  const email = $("#email").val();
  const username = $("#username").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirm-password").val();
  const alertMessage = $("#alert-message");

  if (
    first_name &&
    last_name &&
    email &&
    username &&
    password &&
    confirmPassword
  ) {
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
        alertMessage.empty();

        alertMessage.append(warning);
      }
    }

    if (password === confirmPassword && password.length < 8) {
      const warning = `<div class="alert alert-success" role="alert">
       Your password must be have over 8 characters
      </div>`;
      alertMessage.empty();
      alertMessage.append(warning);
    }
    if (password != confirmPassword) {
      const warning = `<div class="alert alert-success" role="alert">
      Your confirm password does'nt match
    </div>`;

      alertMessage.empty();

      alertMessage.append(warning);
    }
  } else {
    const warning = `<div class="alert alert-success" role="alert">
  Please Fill out the required fields to sign-up
</div>`;

    alertMessage.empty();
    alertMessage.append(warning);
  }
};

const handleLogin = async (event) => {
  event.preventDefault();

  const username = $("#username").val();
  const password = $("#password").val();
  const alertMessage = $("#alert-message");

  if (username && password) {
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
      const warning = `<div class="alert alert-warning" role="alert">
   Incorrect Email or Password 
   </div>`;
      alertMessage.empty();

      return alertMessage.append(warning);
    }
  } else {
    const warning = `<div class="alert alert-warning" role="alert">
  Please fill in the fields to log in
 </div>`;
    alertMessage.empty();

    return alertMessage.append(warning);
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
  const alertMessage = $("#alert-message");

  if (title && blog_img && content) {
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
  } else {
    const warning = `<div class="alert alert-warning" role="alert">
  Please fill in all the fields
 </div>`;
    alertMessage.empty();

    return alertMessage.append(warning);
  }
};

const handleEditBlogPost = async (event) => {
  event.preventDefault();

  // window.location.pathname.split('/')[3]

  const { id } = event.target;

  const title = $("#edit-title").val();
  const blog_img = $("#edit-img").val();
  const content = $("#edit-content").val();
  const alertMessage = $("#alert-message");

  console.log(title, blog_img, content);

  if (title && blog_img && content) {
    const response = await fetch(`/api/blog/${id}`, {
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
  } else {
    const warning = `<div class="alert alert-warning" role="alert">
  Please fill in all the fields 
 </div>`;
    alertMessage.empty();

    return alertMessage.append(warning);
  }
};

const handleDeleteBlog = async (event) => {
  event.preventDefault();
  const { id } = event.target;

  const confirmMessage = confirm("Are you sure you want to delete this blog");

  if (confirmMessage) {
    const response = await fetch(`api/blog/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (data.success) {
      return window.location.replace("/dashboard");
    }
  }
};

const handleCommentSubmission = async (event) => {
  event.preventDefault();

  const { id } = event.target;
  ///blog/:uuid/comment
  const comment = $("#user-comment").val();
  const alertMessage = $("#alert-message");

  if (comment) {
    const response = await fetch(`/api/blog/${id}/comment`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    });

    const data = await response.json();

    if (data.success) {
      return window.location.replace(`/blog/View/${id}`);
    }
  } else {
    const warning = `<div class="alert alert-warning" role="alert">
  Please fill in all the fields 
 </div>`;
    alertMessage.empty();

    return alertMessage.append(warning);
  }
};

const handleDeleteCommentById = async (event) => {
  event.preventDefault();
  const { id } = event.target;
  console.log(id);

  const deleteConfirmation = confirm(
    "Are you sure you want to delete this blog comment"
  );

  if (deleteConfirmation) {
    const response = await fetch(`api/comment/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.success) {
      return window.location.replace("/dashboard");
    }
  }
};

loginForm.on("submit", handleLogin);
signupForm.on("submit", handleSignUp);
logOutBtn.on("click", handleLogout);
deleteBlog.on("click", handleDeleteBlog);
createBlog.on("submit", handleCreateBlogPost);
editBlog.on("submit", handleEditBlogPost);
commentForm.on("submit", handleCommentSubmission);
deleteAComment.on("click", handleDeleteCommentById);
