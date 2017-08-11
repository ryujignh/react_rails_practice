var NewItem = React.createClass({
  handleClick() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: { item: {name: name, description: description }},
      success: (response) => {
      }
    });
  },

  // The ref attribute is used to reference the element in the component. Its function is similar to the name attribute in AngularJS. Instead of finding elements by id or by class, we do it by ref. In this particular case, the ref will be used to get the value of the text field and send it to the server.
  render() {
    return (
      <div>
        <input ref='name' placeholder='Enter the name of the item' />
        <input ref='description' placeholder='Enter a description' />
          <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
})
