import Card from './Card';


export default {
    component: Card,
}


export const FirstStory = {
    args: {
        title: 'Card title',
        description: 'Card description',
        image: 'https://picsum.photos/seed/picsum/200/300',
        onClick: () => { alert("You Clicked Me.") }
    },
  };