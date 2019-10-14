const { User } = require("../models");

class SessionService {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email
      }
    });

    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado." });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: "Senha incorreta." });
    }

    user.password = user.password_hash = undefined;

    return res.json({ user, token: user.generateToken() });
  }
}

module.exports = new SessionService();
