"use client"

const colorMap = {
    primary: {
        bg: "poudre",
        text: "white",
    },
    secondary: {
        bg: "white",
        text: "highlight",
    }
}

function parseStyles(type, size) {
    return (`bg-${colorMap[type].bg} text-${colorMap[type].text} w-CTA-${size}`)
}

const CTA = (props) => {
    const {content, type, size} = props
    const styles = parseStyles(type, size)
    return (
        <div className={styles}>{content}</div>
    )
}

export default CTA