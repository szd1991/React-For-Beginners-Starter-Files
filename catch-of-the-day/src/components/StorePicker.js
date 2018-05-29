import React from 'react';

class StorePicker extends React.Component {
    storeInput = React.createRef();
    
    goToStore = (event) => {
        // 1. stop form from submitting
        event.preventDefault();
        // 2. get the text from input
        const storeName = this.storeInput.value.value;
        // 3. change page to whatever they entered
        this.props.history.push(`/store/${storeName}`);
    }
    
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input type="text" ref={this.storeInput} required placeholder="Store Name" />
                <button type="submit">Visit Store ⇒</button>
            </form>
        );
    }
}

export default StorePicker;