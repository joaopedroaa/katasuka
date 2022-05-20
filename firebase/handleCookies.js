import cookies from 'js-cookie'

export const mapUserData = (user) => {
    const { uid, email, xa, displayName, photoURL } = user
    return {
        uid,
        email,
        token: xa,
        name: displayName,
        profilePic: photoURL
    }
}

export const getUserFromCookie = () => {
    const cookie = cookies.get('auth')
    if (!cookie) { return }

    return JSON.parse(cookie)
}

export const setUserCookie = (user) => {
    cookies.set('auth', JSON.stringify(user), { expires: 7 })
}

export const removeUserCookie = () => {
    return cookies.remove('auth')
}
