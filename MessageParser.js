import React from 'react';

const MessageParser = ({ children, actions }) => {



  const parse = (message) => {
    message = message.toLowerCase();
    console.log(message);

    if (message.includes('hi')) {
      actions.handleHello();
    } 
    else if (message.includes('hello')) {
      actions.handleHello();
    }
    else if (message.includes('can you speak tagalog')) {
      actions.tagalog();
    }

    else if (message.includes('who made the website')) {
      actions.website();
    }

    else if (message.includes('when did harrystoysph start')) {
      actions.when();
    }
    else if (message.includes('when did harrystoyph start')) {
      actions.when();
    }
    else if (message.includes('how did harrystoysph start')) {
      actions.how();
    }
    else if (message.includes('what is harrystoysph')) {
      actions.what();
    }
    else if (message.includes('what funko pop categories do you have')) {
      actions.categories();
    }
    else if (message.includes('what is the cheapest item that i can buy')) {
      actions.cheapest();
    }
    else if (message.includes('what is the cheapest')) {
      actions.cheapest();
    }
    else if (message.includes('what is the most expensive item that i can buy')) {
      actions.expensive();
    }
    else actions.sorry(); 
  };



  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;