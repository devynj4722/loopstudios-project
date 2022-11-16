
import React from "react"

class HomePage extends React.Component {

    state = {
        innerWidth: window.innerWidth
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this))
        this.resize()
    }

    resize() {
        this.setState({innerWidth: window.innerWidth})
    }

    getWindow() {
        if (window.innerWidth < 900 ) {
            image.setAttribute("src", "./assets/assets/desktop/image-hero.jpg");
        } else {
            image.setAttribute("src", "./assets/assets/mobile/image-interactive.jpg");
        }
    }
}
export default HomePage