import React, {Component} from 'react'
import './Accordion.css'

export default class Accordion extends Component{
    static defaultProps = {
        sections: [
            {
                title: 'Section 1',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
            {
                title: 'Section 2',
                content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
            },
            {
                title: 'Section 3',
                content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
            },
        ]
    };

    state = {
        activeSectionIndex: null,
    }

    handleActiveSection = (sectionIndex) => {
        this.setState({activeSectionIndex: sectionIndex})
    }

    renderItem(section, id, activeSectionIndex){
        return(
                <li className='Accordion_item' key={id}>
                    <button type='button' onClick={() => this.handleActiveSection(id)}>
                    {section.title}
                    </button>
                    {(activeSectionIndex === id) && <p>{section.content}</p>}
                </li>
        )
    }

    render(){
        const {activeSectionIndex} = this.state
        const {sections} = this.props
        return(
            <ul className='Accordion'>
                {sections.map((section, id) => 
                    this.renderItem(section, id, activeSectionIndex)
                )}
            </ul>
        )
    }
}