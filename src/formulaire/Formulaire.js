import React from 'react'
import '../App.css';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      alert('Merci pour votre proposition');
      event.preventDefault();
    }
  
    render() {
      return (
        <form className="Formulaire" onSubmit={this.handleSubmit}>
            <label className="Form-champs">
                Pseudo :
                <input type="text" value={this.state.value} onChange={this.handleChange} />        
            </label>
            <label className="Form-champs">
                Message :
                <input type="text" value={this.state.value} onChange={this.handleChange} />        
            </label>
            <label className="Form-champs">
                Image :
                <input type="file" /> 
            </label>
            <label className="Form-champs">
                <input type="submit" value="Envoyer" />
            </label>
            
        </form>
      );
    }
  }

export default NameForm;