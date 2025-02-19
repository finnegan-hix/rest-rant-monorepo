__
function CurrentUserProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {

        const getLoggedInUser = async () => {
            let response = await fetch('http://localhost:5000/authentication/profile'),{
            Headers: {
                'Authorization': 'bearer $(localStorage.getItem('token')}'
            }
            )
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    }, [])
