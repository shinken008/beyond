const ignorePath = [/^\/login$/, /^\/logout$/, /^\/assets\/*/, /^\/favicon.ico$/]

export default function AuthMiddleware (req, res, next) {
  if (!ignorePath.find(path => path.test(req.url)) && !req.session.username) {
    res.redirect('/logout')
    res.end()
  } else {
    next()
  }
}