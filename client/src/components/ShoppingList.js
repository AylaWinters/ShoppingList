import React, { Component } from 'react'
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
} from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuidv1 from 'uuid/v1'

class ShoppingList extends Component {
    state = {
        items: [
            { id: uuidv1(), name: 'Eggs' },
            { id: uuidv1(), name: 'Milk' },
            { id: uuidv1(), name: 'Steak' },
            { id: uuidv1(), name: 'Water' },

        ]
    }
    render() {
        const { items } = this.state;
        return (
            <Container>
                <Button color="dark" style={{ marginBottom: '2rem' }} onClick={() => {
                    const name = prompt('Enter Item');
                    if (name) {
                        this.setState(state => ({
                            items: [...state.items, { id: uuidv1(), name }]
                        }))
                    }
                }}>Add Item</Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size='sm'
                                        onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id !== id)
                                            }))
                                        }}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

export default ShoppingList