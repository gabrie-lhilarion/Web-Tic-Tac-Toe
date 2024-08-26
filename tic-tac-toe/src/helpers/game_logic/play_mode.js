const clearPlayModeSelection = (container) => container.querySelectorAll('li')
    .forEach(element => {
        element.classList.remove("bg-orange-800")
    })

export const selectPlayMode = (el) => {
    clearPlayModeSelection(el.parentElement)
    if (el.tagName === "LI") {
        el.classList.add("bg-orange-800")
    }
}

export const addAI = (el) => {
    const mode = {}
    mode.type = 1
    mode.gameOwner = 'me'
    mode.ai = 'ai'

    console.log(mode)
}

export const addFriend = (el) => {
    const mode = {}

    const friendName = el.parentElement.querySelector('input').value
    if (friendName.trim().length < 3) {
        alert("Please enter namem at leat 3 characters")
    } else {
        mode.type = 2
        mode.gameOwner = 'me'
        mode.friend = 'friend_name'

        console.log(mode)
    }

}

export const addBoth = (el) => {
    const mode = {}

    const friendName = el.parentElement.querySelector('input').value
    if (friendName.trim().length < 3) {
        alert("Please enter namem at leat 3 characters")
    } else {
        mode.type = 3
        mode.gameOwner = 'me'
        mode.ai = 'ai'
        mode.friend = 'friend_name'

        console.log(mode)
    }
}

export const hideInputElement = (el) => {

    if (el.id === 'friend' || el.id === 'both') {

        el.parentElement.querySelectorAll('p')
            .forEach((paragragh) => {
                paragragh.classList.remove('block')
                paragragh.classList.add('hidden')
            })

        el.querySelector('p').classList.remove('hidden')
        el.querySelector('p').classList.add('block')
    } else {
        el.parentElement.querySelectorAll('p')
            .forEach((paragragh) => {
                paragragh.classList.remove('block')
                paragragh.classList.add('hidden')
            })
    }

}

export const highlightBoardChoice = (el) => {

    el.parentElement.querySelectorAll("li").forEach(item => item.classList.remove("bg-orange-800"))
    el.classList.add("bg-orange-800")
}