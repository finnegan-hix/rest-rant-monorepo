___
router.get('/profile', async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                userId: satisfies 
            }
        })
        res.json(user)
    } catch {
        res.json(null)
    }
})
