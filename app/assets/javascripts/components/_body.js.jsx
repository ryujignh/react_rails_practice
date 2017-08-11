var Body = React.createClass({

  // Step 1
  // Here we are initializing items object as empty array.
  getInitialState() {
    return { items: [] }
  },

  // Step 2
  // Here we are fetching items and assign the response to items object defined above.
  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) => {this.setState({ items: response }) });
  },

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  },

  render() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit}/>
        <AllItems items={this.state.items} />
      </div>
    )
  }
})