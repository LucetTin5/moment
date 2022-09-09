import User from "../models/User";

export const createUser = async (req, res) => {
  const { username } = req.body;
  console.log(req.body);
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(200).json({
        msg: "Hello",
      });
    } else {
      const newUser = await User.create({
        username,
      });
      if (newUser) {
        return res.status(201).json({ msg: "Hello" });
      } else {
        throw new Error("계정 생성 실패");
      }
    }
  } catch (err) {
    console.log(err);
    return;
  }
};
