import React from 'react'

const Login = () => {
  return (
    <section>
      <form autoComplete="on" action="/login" method="post">
        <label htmlFor="mobile">手机号:</label>
        <input type="text" name="mobile" />
        <input type="submit" value="登录" />
      </form>
    </section>
  )
}

export default Login
