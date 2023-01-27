const User = require("./models/users.model");

const saveToken = async(email, accessToken, refreshToken) => {
  try {
    const user = await User.findOne({email})
    if(!user) {
      User.create({
        email, accessToken, refreshToken
      })
    }
    user.accessToken = accessToken;
    user.refreshToken = refreshToken;
    await user.save();

  } catch (err) {
    
  }
}

const getToken = async(email) => {
  try {
    const user = await User.findOne({email})
    if(!user) {
      return;
    }
    const credentials = {
      accessToken: user.accessToken,
      refreshToken: user.refreshToken,
    }
    return credentials;
  } catch (err) {
  }
}

module.exports = {saveToken, getToken};