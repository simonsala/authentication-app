import React from "react";

function SignInForm(){
    return (
        <form>
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" placeholder="username"/>
          </div>
        </form>
      );
}

export default SignInForm;