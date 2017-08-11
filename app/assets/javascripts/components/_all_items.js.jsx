// We’ll use componentDidMount(), which is called right after the component is mounted. You can find out about other component methods and how to use them in React’s documentation .
// Read more at https://www.pluralsight.com/guides/ruby-ruby-on-rails/building-a-crud-interface-with-react-and-ruby-on-rails#Wmsycq5lmlX6Amca.99

var AllItems = React.createClass({

  // Step 2 for updating item
  onUpdate(item) {
    this.props.onUpdate(item);
  },

  handleDelete(id) {
    this.props.handleDelete(id);
  },

  // Step 3 for rendering items object
  // Rendering items object
  render() {
    var items = this.props.items.map((item) => {
      return (
        // When we iterate through items in React, there must be a way to identify each item into the component’s DOM. For that, we’ll use a unique attribute of each item, also known as key. To add a key to the item, we need to use the key attribute in the div that wraps it, like this:
        <div key={item.id}>
          <Item item={item}
            handleDelete={this.handleDelete.bind(this, item.id)}
            handleUpdate={this.onUpdate}/>
        </div>
      )
    });

    return (
      <div>
        {items}
      </div>
      )
  }
});