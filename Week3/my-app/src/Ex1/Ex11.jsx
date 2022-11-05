import * as React from "react";

class MyComponent1 extends React.Component {
    state = {
        heading: "React Awesomesauce (Busy)",
        content: ":Loading...",
    };

    constructor() {
        super();

        setTimeout(() => {
            this.setState({
                heading: "React Awesomesauce",
                content: "Done!",
            })
        }, 3000);
    }
    render() {
        const {heading, content} = this.state;
        return (
            <main>
                <h1 style={{color: "red"}}>Ex1.1</h1>
                <h1>{heading}</h1>
                <p>{content}</p>
            </main>
        )
    }
}

export default MyComponent1