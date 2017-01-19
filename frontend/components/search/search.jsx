import Autosuggest from 'react-autosuggest';
import React from 'react';

const getSuggestions = (batches, value) => {

  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : batches.filter( batch =>
   batch.title.toLowerCase().slice(0, inputLength) === inputValue
 );
};

const getSuggestionValue = suggestion => suggestion.title;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.title}
  </div>
);

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value: '',
      suggestions: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.getBatches = this.getBatches.bind(this);
  }

  onChange(event, { newValue }){
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested({ value }){
    this.setState({
      suggestions: getSuggestions(this.props.batches, value)
    });
  }

  onSuggestionsClearRequested(){
    this.setState({
      suggestions: []
    });
  }

  getBatches(e, {suggestion}){
    console.log("selected suggestion", suggestion);

      // e.preventDefault();
      // this.props.fetchSearchResults(this.state.value);

      }


  render(){

    const {value, suggestions} = this.state;

    const inputProps = {
      placeholder: 'Search...',
      value,
      onChange: this.onChange
    };

    return(
      <Autosuggest
        suggestions = {suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={this.getBatches}

      />
  );
  }
}

export default Search;
