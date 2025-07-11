const twilio = require('twilio');
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.sendOTP = async (req, res) => {
  const { phone } = req.body;

  if (!phone) return res.status(400).json({ message: 'Phone number is required' });

  const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP

  try {
    await client.messages.create({
      body: `Your Delta Plax OTP is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });

    global.otpStore = global.otpStore || {};
    global.otpStore[phone] = otp;

    return res.status(200).json({ message: 'OTP sent' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to send OTP', error: error.message });
  }
};

exports.verifyOTP = async (req, res) => {
  const { phone, otp } = req.body;

  if (!global.otpStore || global.otpStore[phone] != otp) {
    return res.status(400).json({ message: 'Invalid OTP' });
  }

  delete global.otpStore[phone];
  return res.status(200).json({ message: 'OTP verified' });
};