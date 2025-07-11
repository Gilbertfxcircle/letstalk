
exports.loginUser = (req, res) => {
    const { identifier, password } = req.body;
    if (!identifier || !password) {
        return res.status(400).json({ message: 'Missing credentials' });
    }
    // Dummy response (replace with real auth logic)
    res.json({ message: 'Login successful', user: { identifier } });
};
