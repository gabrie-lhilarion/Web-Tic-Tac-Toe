const clearPlayModeSelection = (container) => container.querySelectorAll('li')
    .forEach(element => {
        element.classList.remove("bg-orange-800")
    })

export const selectPlayMode = (el) => {
    clearPlayModeSelection(el.parentElement)
    if (el.tagName === "LI") {
        el.classList.add("bg-orange-800")

        if (el.id === 'ai') {
            const playBtn = document.getElementById("play")
            playBtn.classList.remove("hidden")
        }
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
    el.classList.add("bg-orange-800", "rounded-full")


}