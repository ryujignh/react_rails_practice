// We’ll use componentDidMount(), which is called right after the component is mounted. You can find out about other component methods and how to use them in React’s documentation .
// Read more at https://www.pluralsight.com/guides/ruby-ruby-on-rails/building-a-crud-interface-with-react-and-ruby-on-rails#Wmsycq5lmlX6Amca.99

var AllItems = React.createClass({

  handleDelete(id) {
    this.props.handleDelete(id);
  },

  // Step 1
  // Here we are initializing items object as empty array.
  // getInitialState() {
  //   return { items: [] }
  // },

  // // Step 2
  // // Here we are fetching items and assign the response to items object defined above.
  // componentDidMount() {
  //   $.getJSON('/api/v1/items.json', (response) => {this.setState({ items: response }) });
  // },

  // Step 3
  // Rendering items object
  render() {
    var items = this.props.items.map((item) => {
      return (
        // When we iterate through items in React, there must be a way to identify each item into the component’s DOM. For that, we’ll use a unique attribute of each item, also known as key. To add a key to the item, we need to use the key attribute in the div that wraps it, like this:
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <button onClick={this.handleDelete.bind(this, item.id)}>Delete</button>
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