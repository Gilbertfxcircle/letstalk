const Message = require('../models/messageModel');
const User = require('../models/userModel');
const Chat = require('../models/chatModel');

// Send a message
const sendMessage = async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    return res.status(400).send({ message: "Invalid data passed into request" });
  }

  var newMessage = {
    sender: req.user._id,
    content,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);
    message = await message.populate("sender", "given_name surname email_or_phone");
    message = await message.populate("chat");
    message = await User.populate(message, {
      path: "chat.users",
      select: "given_name surname email_or_phone",
    });

    await Chat.findByIdAndUpdate(chatId, { latestMessage: message });

    res.json(message);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// Get all messages for a chat
const allMessages = async (req, res) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate("sender", "given_name surname email_or_phone")
      .populate("chat");
    res.json(messages);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { sendMessage, allMessages };