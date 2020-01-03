import React, {Fragment} from 'react';
import './App.css';
import Hero from './components/Hero'
import Services from './components/Services';

class App extends React.Component {
    state = {
        headerTitle: "Our Services",
        servicesContent: [
            {
                id: 1,
                title: "Design",
                icon: "fas fa-pencil-ruler",
            },
            {
                id: 2,
                title: "Build",
                icon: "fas fa-code",
            },
            {
                id: 3,
                title: "Manage",
                icon: "fas fa-user-shield",
            },
        ]
    }
    render () {
        return (
            <Fragment>
                <Hero headerTitle={this.state.headerTitle}/>
                <Services services={this.state.servicesContent}/>
            </Fragment>
        )
    }
}

export default App;
